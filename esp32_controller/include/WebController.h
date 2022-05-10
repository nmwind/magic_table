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

#include "definitions.h"
#include "EffectsManager.h"

class WebController
{
 private:
	AsyncWebServer _server;
	EffectsManager *_effectsManager;
 public:
	explicit WebController(EffectsManager *effectsManager, uint16_t port) noexcept;
 public:
	void Start();
	void Stop();
};

#endif //ESP32_CONTROLLER_INCLUDE_WEBCONTROLLER_H_
