//
// Created by nmWiN on 10.05.2022.
//

// TODO: почему-то при объявлении в WebController.h начинает ругаться на multiple definition. почему?
#include <AsyncElegantOTA.h>

#include "WebController.h"

#define GET(path, handler) _server.on(path, HTTP_GET, [this](AsyncWebServerRequest* request) handler)
#define OK(var) request->send(200, "text/plain", var)

WebController::WebController(EffectsManager* effectsManager, uint16_t port) noexcept
	: _server(port),
	  _effectsManager(effectsManager)
{
	_server.addHandler(new SPIFFSEditor(SPIFFS, DEFAULT_ADMIN_PARAMS_USERNAME, DEFAULT_ADMIN_PARAMS_PASSWORD));

	_server.serveStatic("/", SPIFFS, "/").setDefaultFile(BOARD_UI_DEFAULT_FILENAME);

	AsyncElegantOTA.begin(&_server, DEFAULT_ADMIN_PARAMS_USERNAME, DEFAULT_ADMIN_PARAMS_PASSWORD);

//	_server.on("/control/run", HTTP_GET, [this](AsyncWebServerRequest* request)
//	{
//
//	});

	GET("/control/start", {
		_effectsManager->Start(0);
		OK(String(_effectsManager->GetEffectIndex()));
	});

	GET("/control/next", {
		_effectsManager->Next();
		OK(String(_effectsManager->GetEffectIndex()));
	});

	GET("/control/prev", {
		_effectsManager->Previous();
		OK(String(_effectsManager->GetEffectIndex()));
	});

	GET("/control/stop", {
		_effectsManager->Stop();
		OK(String(_effectsManager->GetEffectIndex()));
	});
}

void WebController::Start()
{
	_server.begin();
}

void WebController::Stop()
{
	_server.end();
}


