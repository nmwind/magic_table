//
// Created by nmWiN on 10.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_WEBCONTROLLER_H_
#define ESP32_CONTROLLER_INCLUDE_WEBCONTROLLER_H_

#include <Arduino.h>
#include <FS.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
// #include <ESPmDNS.h>
// #include <LittleFS.h>
#include <SPIFFSEditor.h>

#include <utility>

#include "definitions.h"
#include "commands.h"
#include "EffectsManager.h"

class WebController;

typedef enum
{
	Stopped,
	NoControl,
	UnderControl,
} WebControllerState;

typedef enum
{
	Null, Established, Disconnected, Timeout
} WebControllerClientState;

typedef enum
{
	Received, Sent
} WebControllerCommandDirection;


typedef std::function<void(WebController* controller, WebControllerClientState state)> WebControllerStateEventHandler;

typedef std::function<void(WebController* controller, String& commandId, CommandArgs& commandArgs)>
	WebControllerCommandEventHandler;

class WebController
{
 private:
	AsyncWebServer _server;
	AsyncWebSocket _socket;
	EffectsManager* _effectsManager;
	WebControllerState _state;
	WebControllerStateEventHandler _stateEventHandler;
	WebControllerCommandEventHandler _commandEventHandler;
 public:
	explicit WebController(EffectsManager* effectsManager, uint16_t port) noexcept;
 private:
	void HandleStateEvent(WebController* controller, WebControllerClientState state);
	void HandleCommandEvent(WebController* controller, String& commandId, CommandArgs& commandArgs);
	void InitHttpHandlers();
	void InitSocketHandlers();
	void OnWsConnected(AsyncWebSocketClient* client);
	void OnWsDisconnected(AsyncWebSocketClient* client);
	void OnWsTextData(AsyncWebSocketClient* client, String& data);
	void OnWsBinaryData(AsyncWebSocketClient* client, String& data, size_t len);
	void OnWebSocketEvent(AsyncWebSocket*, AsyncWebSocketClient*, AwsEventType, void*, uint8_t*, size_t);
 private:
	static void OnBody(AsyncWebServerRequest*, uint8_t*, size_t, size_t, size_t);
	static void OnRequest(AsyncWebServerRequest* request);
 public:
	WebControllerState State()
	{
		return _state;
	}
	void OnState(WebControllerStateEventHandler handler)
	{
		_stateEventHandler = std::move(handler);
	};
	void OnCommand(WebControllerCommandEventHandler handler)
	{
		_commandEventHandler = std::move(handler);
	};
	template<size_t capacity>
	void Send(const String& commandId, const CommandArgs& commandArgs)
	{
		const auto fullCapacity = 2 * (capacity + JSON_OBJECT_SIZE(2));
		StaticJsonDocument<fullCapacity> json;
		json["event"] = commandId;
		json["data"] = commandArgs;
		String response;
		size_t size;
		if ((size = serializeJson(json, response)))
		{
			_socket.textAll(response);
			Serial.printf("[WebController::Send] sent: [%s]\n", response.c_str());
		}
		else
		{
			Serial.printf("[WebController::Send] serializeJson error:[%u]\n", size);
		}
	}
	void Send(const String& commandId, const CommandArgs& commandArgs)
	{
		const auto capacity = 2 * (JSON_OBJECT_SIZE(2) + JSON_OBJECT_SIZE(1));
		WebController::Send<capacity>(commandId, commandArgs);
	}
	void Start();
	void Stop();

};

#endif //ESP32_CONTROLLER_INCLUDE_WEBCONTROLLER_H_
