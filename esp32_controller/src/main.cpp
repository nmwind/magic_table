#include <Arduino.h>
#include <FS.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
// #include <ESPmDNS.h>
// #include <LittleFS.h>
#include <SPIFFSEditor.h>
#include <AsyncElegantOTA.h>
#include <FastLED.h>

#include "ConfigBase.h"
#include "GeneralConfig.h"

#define POWER_VOLTS 5
#define POWER_MILLIAMPS 8000 // 490
#define POWER_MILLIWATTS POWER_VOLTS *POWER_MILLIAMPS

#define LED_DATA_PIN 22
#define LED_POWER_PIN 23
#define LED_NUM 300

const char* ssid = "Viba.Net";
const char* password = "c-GZVVl9tSYTqK$ggiuPibY3bsz!u1wtUeWXeLm!L8LtslYVgJs5XKWM8Ezl";
const char* hostName = "esp-async";
const char* http_username = "admin";
const char* http_password = "admin";

AsyncWebServer server(80);

CRGB leds[LED_NUM];
uint8_t baza = 0;
bool _stop = false;

void raduga_loop()
{
	for (int i = 0; i < LED_NUM; i++)
	{
		leds[i] = CHSV(baza + i * 5, 255, 255);
	}

	baza++;
	FastLED.show();
	delay(20);
}

void run_fire_loop2()
{
	fadeToBlackBy(leds, LED_NUM, 2);
	int pos = beatsin16(13, 0, LED_NUM - 1);
	leds[pos] += CHSV(baza++, 255, 192);
	FastLED.show();
}

void setup()
{
	Serial.begin(9600);
	Serial.setDebugOutput(true);
	WiFi.mode(WIFI_STA);
	WiFi.begin(ssid, password);
	while (WiFi.status() != WL_CONNECTED)
	{
		delay(500);
		Serial.print(".");
	}

	Serial.println("");
	Serial.print("Connected to ");
	Serial.println(ssid);
	Serial.print("IP address: ");
	Serial.println(WiFi.localIP());

	SPIFFS.begin();

	// MDNS.addService("http","tcp",80);

	server.addHandler(new SPIFFSEditor(SPIFFS, http_username, http_password));

	server.on("/heap", HTTP_GET, [](AsyncWebServerRequest* request)
	{ request->send(200, "text/plain", String(ESP.getFreeHeap())); });

	server.serveStatic("/", SPIFFS, "/").setDefaultFile("index.html");

	server.on("/stop", HTTP_GET, [](AsyncWebServerRequest* request)
	{
	  _stop = true;
	  request->send(200, "text/plain", String(ESP.getFreeHeap()));
	});

	server.on("/save", HTTP_GET, [](AsyncWebServerRequest* request)
	{
	  GeneralConfig cfg;
	  strcpy(cfg.Admin.UserName, "Mike Tike");
	  strcpy(cfg.Admin.Password, "123123123");
	  String result = cfg.Save() ? "OK" : "ERR";
	  request->send(200, "text/plain", result);
	});

	server.on("/load", HTTP_GET, [](AsyncWebServerRequest* request)
	{
	  GeneralConfig cfg;
	  String result = cfg.Load() ? "OK" : "ERR";
	  Serial.printf("user: %s, pass: %s", cfg.Admin.UserName, cfg.Admin.Password);
	  request->send(200, "text/plain", result);
	});

	//	server.on()
	//	server.onFileUpload([](AsyncWebServerRequest* request,
	//		const String& fileName,
	//		size_t index,
	//		uint8_t* data,
	//		size_t length,
	//		bool final)
	//	{
	//		Serial.printf("begin file %s, size:%d, index:%d, final:%d", fileName.c_str(), length, index, final);
	//	});
	server.begin();
	AsyncElegantOTA.begin(&server); // Start ElegantOTA

	FastLED.addLeds<WS2812B, LED_DATA_PIN, GRB>(leds, LED_NUM);
	FastLED.setMaxPowerInVoltsAndMilliamps(POWER_VOLTS, POWER_MILLIAMPS);
}

void loop()
{
	if (_stop)
		return;

	raduga_loop();
	// put your main code here, to run repeatedly:
}