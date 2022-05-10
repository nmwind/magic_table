#include <Arduino.h>
#include <WiFi.h>
#include <SPIFFS.h>

#include "definitions.h"
#include "GeneralConfig.h"
#include "EffectsManager.h"
#include "WebController.h"

EffectsManager effectsManager(DEFAULT_LEDS_PARAMS_COUNT);
WebController webController(&effectsManager, BOARD_UI_HTTP_PORT);

void setup()
{
	Serial.begin(9600);
	Serial.setDebugOutput(true);
	WiFi.mode(WIFI_STA);
	WiFi.begin(DEFAULT_WIFI_PARAMS_SSID, DEFAULT_WIFI_PARAMS_PASSWORD);
	while (WiFi.status() != WL_CONNECTED)
	{
		delay(500);
		Serial.print(".");
	}

	Serial.println("");
	Serial.print("Connected to ");
	Serial.println(DEFAULT_WIFI_PARAMS_SSID);
	Serial.print("IP address: ");
	Serial.println(WiFi.localIP());

	SPIFFS.begin();
	webController.Start();
}

void loop()
{
	effectsManager.Tick();
}