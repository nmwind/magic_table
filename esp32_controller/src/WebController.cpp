//
// Created by nmWiN on 10.05.2022.
//

// TODO: почему-то при объявлении в WebController.h начинает ругаться на multiple definition. почему?
#include <AsyncElegantOTA.h>
#include <ArduinoJson.hpp>
#include <stdexcept>
#include <map>

#include "WebController.h"

using ARDUINOJSON_NAMESPACE::JsonDocument;

namespace
{

#define GET(path, handler) _server.on(path, HTTP_GET, [this](AsyncWebServerRequest* request) handler)
#define POST(path, handler) _server.on(path, HTTP_POST, [this](AsyncWebServerRequest* request) handler)
#define EXTRACT_POST_VALUE(name, default) request->getParam(name, true).

#define OK(var) request->send(200, "text/plain", var)
#define JSON(val) request->send(200, "application/json", val)

	String ExtractValue(AsyncWebServerRequest* request, bool isPost, const String& param, const String& defaultValue)
	{
		auto ref = request->getParam(param, isPost);
		return ref != nullptr ? ref->value() : defaultValue;
	}

	String ExtractValue(AsyncWebServerRequest* request, bool isPost, const String& param)
	{
		auto ref = request->getParam(param, isPost);
		if (ref == nullptr)
		{
			throw std::invalid_argument("Parameter is missing");
		}

		return ref->value();
	}
}

/* ctors */

WebController::WebController(EffectsManager* effectsManager, uint16_t port) noexcept
	: _server(port),
	  _effectsManager(effectsManager),
	  _socket(BOARD_UI_WEB_SOCKET_URI),
	  _state(Stopped),
	  _stateEventHandler(nullptr),
	  _commandEventHandler(nullptr)
{
	_server.addHandler(new SPIFFSEditor(SPIFFS, DEFAULT_ADMIN_PARAMS_USERNAME, DEFAULT_ADMIN_PARAMS_PASSWORD));
	_server.serveStatic("/", SPIFFS, "/").setDefaultFile(BOARD_UI_DEFAULT_FILENAME);

	AsyncElegantOTA.begin(&_server, DEFAULT_ADMIN_PARAMS_USERNAME, DEFAULT_ADMIN_PARAMS_PASSWORD);

	InitHttpHandlers();
	InitSocketHandlers();
}

/* private methods */

void WebController::HandleStateEvent(WebController* controller, WebControllerClientState state)
{
	if (_stateEventHandler != nullptr)
	{
		_stateEventHandler(controller, state);
	}
}

void WebController::HandleCommandEvent(WebController* controller, String& commandId, CommandArgs& commandArgs)
{
	if (_commandEventHandler != nullptr)
	{
		_commandEventHandler(controller, commandId, commandArgs);
	}
}

void WebController::InitHttpHandlers()
{
	_server.onRequestBody(WebController::OnBody);
	_server.onNotFound(WebController::OnRequest);

//	_server.on("/control/run", HTTP_GET, [this](AsyncWebServerRequest* request)
//	{
//
//	});

/*
	GET("/state", {
		StaticJsonDocument<48> json;
		json["Effect"] = _effectsManager->GetEffectIndex();
		json["Running"] = _effectsManager->IsRunning();

//		StaticJsonDocument<48> jsonArray;
//		ArduinoJson::JsonArray jEffects = json["Effects"].to<ArduinoJson::JsonArray>();
//
//		jEffects.add("Rainbow");
//		jEffects.add("Fireball");

		String response;
		if (serializeJson(json, response))
		{
			request->send(200, "application/json", response);
		}
		else
		{
			request->send(500);
		}
	});

	POST("/control/start", {
		auto effectIndex = ExtractValue(request, true, "effect", "0").toInt();
		_effectsManager->Start(effectIndex);
		OK("OK");
	});

	POST("/control/stop", {
		_effectsManager->Stop();
		OK("OK");
	});
 */
}

void WebController::InitSocketHandlers()
{
	using namespace std::placeholders;
	_socket.onEvent(std::bind(&WebController::OnWebSocketEvent, this, _1, _2, _3, _4, _5, _6));
	_server.addHandler(&_socket);
}

void WebController::OnWsConnected(AsyncWebSocketClient* client)
{
	_state = UnderControl;
	HandleStateEvent(this, Established);
}

void WebController::OnWsDisconnected(AsyncWebSocketClient* client)
{
	_state = NoControl;
	HandleStateEvent(this, Disconnected);
}

void WebController::OnWsTextData(AsyncWebSocketClient* client, String& data)
{
	Serial.printf("[OnWsTextData] data: [%s]\n", data.c_str());
	const auto capacity = 1024; //2 * (JSON_OBJECT_SIZE(2) + JSON_OBJECT_SIZE(1));
	StaticJsonDocument<capacity> json;
	auto error = deserializeJson(json, data);
	if (error != DeserializationError::Ok)
	{
		Serial.printf("[OnWsTextData] Deserialization error: [%s], capacity:[%u]\n", error.c_str(), capacity);
	}
	else
	{
//		for (ARDUINOJSON_NAMESPACE::Pair p : json.as<ArduinoJson::JsonObject>()) {
//			Serial.printf("json [%s:%s]\n", p.key().c_str(), p.value());
//		}

		String commandId = json["event"] | "";
		if (!commandId.isEmpty())
		{
			CommandArgs args = json["data"];
			this->HandleCommandEvent(this, commandId, args);
		}
		else
		{
			Serial.printf("[OnWsTextData] event is empty\n");
		}
	}
}

void WebController::OnWsBinaryData(AsyncWebSocketClient* client, String& data, size_t len)
{

}

void WebController::OnWebSocketEvent(AsyncWebSocket* server,
	AsyncWebSocketClient* client,
	AwsEventType type,
	void* arg,
	uint8_t* data,
	size_t len)
{
	switch (type)
	{
	case WS_EVT_CONNECT:
		Serial.printf("ws[%s][%u] connect\n", server->url(), client->id());
		this->OnWsConnected(client);
		break;
	case WS_EVT_DISCONNECT:
		Serial.printf("ws[%s][%u] disconnect\n", server->url(), client->id());
		this->OnWsDisconnected(client);
		break;
	case WS_EVT_ERROR:
		Serial.printf("ws[%s][%u] error(%u): %s\n", server->url(), client->id(), *((uint16_t*)arg), (char*)data);
		break;
	case WS_EVT_PONG:
		Serial.printf("ws[%s][%u] pong[%u]: %s\n", server->url(), client->id(), len, (len) ? (char*)data : "");
		break;
	case WS_EVT_DATA:
		auto* info = (AwsFrameInfo*)arg;
		String msg = "";
		if (info->final && info->index == 0 && info->len == len)
		{
			// the whole message is in a single frame and we got all of it's data
			Serial.printf("ws[%s][%u] %s-message[%llu]: ",
				server->url(),
				client->id(),
				(info->opcode == WS_TEXT) ? "text" : "binary",
				info->len);

			switch (info->opcode)
			{
			case WS_TEXT:
				for (size_t i = 0; i < info->len; i++)
				{
					msg += (char)data[i];
				}
				break;
			case WS_BINARY:
				char buff[4];
				for (size_t i = 0; i < info->len; i++)
				{
					sprintf(buff, "%02x ", (uint8_t)data[i]);
					msg += buff;
				}
				break;
			}

			Serial.printf("%s\n", msg.c_str());

			if (info->opcode == WS_TEXT)
			{
				OnWsTextData(client, msg);
			}
			else
			{
				OnWsBinaryData(client, msg, len);
			}
		}
		else
		{
			// message is comprised of multiple frames or the frame is split into multiple packets
			if (info->index == 0)
			{
				if (info->num == 0)
				{
					Serial.printf("ws[%s][%u] %s-message start\n",
						server->url(),
						client->id(),
						(info->message_opcode == WS_TEXT) ? "text" : "binary");
				}

				Serial.printf("ws[%s][%u] frame[%u] start[%llu]\n",
					server->url(),
					client->id(),
					info->num,
					info->len);
			}

			Serial.printf("ws[%s][%u] frame[%u] %s[%llu - %llu]: ",
				server->url(),
				client->id(),
				info->num,
				(info->message_opcode == WS_TEXT) ? "text" : "binary",
				info->index,
				info->index + len);

			if (info->opcode == WS_TEXT)
			{
				for (size_t i = 0; i < len; i++)
				{
					msg += (char)data[i];
				}
			}
			else
			{
				char buff[4];
				for (size_t i = 0; i < len; i++)
				{
					sprintf(buff, "%02x ", (uint8_t)data[i]);
					msg += buff;
				}
			}

			Serial.printf("%s\n", msg.c_str());

			if ((info->index + len) == info->len)
			{
				Serial.printf("ws[%s][%u] frame[%u] end[%llu]\n",
					server->url(),
					client->id(),
					info->num,
					info->len);

				if (info->final)
				{
					Serial.printf("ws[%s][%u] %s-message end\n",
						server->url(),
						client->id(),
						(info->message_opcode == WS_TEXT) ? "text" : "binary");

					if (info->message_opcode == WS_TEXT)
					{
						OnWsTextData(client, msg);
					}
					else
					{
						OnWsBinaryData(client, msg, info->len);
					}
				}
			}
		}
		break;
	}
}

/* static methods */

void WebController::OnBody(AsyncWebServerRequest* request, uint8_t* data, size_t len, size_t index, size_t total)
{
	Serial.printf("onBody: [%s]\n", request->url().c_str());
}

void WebController::OnRequest(AsyncWebServerRequest* request)
{
	Serial.printf("OnRequest Not Found: [%s]\n", request->url().c_str());
	//Handle Unknown Request
	request->send(404);
}

/* public methods */

void WebController::Start()
{
	_server.begin();
	_state = NoControl;
	HandleStateEvent(this, Null);
}

void WebController::Stop()
{
	_server.end();
	_state = Stopped;
	HandleStateEvent(this, Null);
}

//template<size_t capacity>
//void WebController::Send(const String& commandId, CommandArgs commandArgs)
//{
//
//}
//
//template<size_t capacity>
//void WebController::Send2(const char* commandId)
//{
//	Serial.printf(commandId);
//}




