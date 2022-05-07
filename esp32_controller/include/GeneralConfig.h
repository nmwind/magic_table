//
// Created by nmWiN on 07.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_GENERALCONFIG_H_
#define ESP32_CONTROLLER_INCLUDE_GENERALCONFIG_H_

#include <ArduinoJson.hpp>
#include "ConfigBase.h"

using ARDUINOJSON_NAMESPACE::JsonDocument;

struct WiFiParams
{
	char SSID[32];
	char Password[64];
} WiFiParamsDefault = { "Viba.Net", "c-GZVVl9tSYTqK$ggiuPibY3bsz!u1wtUeWXeLm!L8LtslYVgJs5XKWM8Ezl" };

struct AdminParams
{
	char UserName[16];
	char Password[16];
} AdminParamsDefault = { "admin", "admin" };

struct PowerParams
{
	uint8_t Volts;
	uint16_t MilliAmps;
	uint32_t MilliWatts;
} PowerParamsDefault = { 5, 10000, 5 * 10000 };

struct LedsParams
{
	uint32_t Count;
} LedsParamsDefault = { 300 };

class GeneralConfig : public ConfigBase<256>
{
 public:
	WiFiParams WiFi{};
	AdminParams Admin{};
	PowerParams Power{};
	LedsParams Leds{};

	GeneralConfig() : ConfigBase<256>("GeneralConfig.json")
	{

	}
 public:
	void Default() override
	{
		this->WiFi = WiFiParamsDefault;
		this->Admin = AdminParamsDefault;
		this->Power = PowerParamsDefault;
		this->Leds = LedsParamsDefault;
	}
 protected:
	void onSave(JsonDocument& jDoc) override
	{
		jDoc["WiFi"]["SSID"] = this->WiFi.SSID;
		jDoc["WiFi"]["Password"] = this->WiFi.Password;

		jDoc["Admin"]["UserName"] = this->Admin.UserName;
		jDoc["Admin"]["Password"] = this->Admin.Password;

		jDoc["Power"]["Volts"] = this->Power.Volts;
		jDoc["Power"]["MilliAmps"] = this->Power.MilliAmps;
		jDoc["Power"]["MilliWatts"] = this->Power.MilliWatts;

		jDoc["Leds"]["Count"] = this->Leds.Count;
	}

	void onLoad(JsonDocument& jDoc) override
	{
		Serial.println(F("onLoad"));

		strlcpy(this->WiFi.SSID,
			jDoc["WiFi"]["SSID"] | WiFiParamsDefault.SSID,
			sizeof(this->WiFi.SSID));
		strlcpy(this->WiFi.Password,
			jDoc["WiFi"]["Password"] | WiFiParamsDefault.Password,
			sizeof(this->WiFi.Password));

		strlcpy(this->Admin.UserName,
			jDoc["Admin"]["UserName"] | AdminParamsDefault.UserName,
			sizeof(this->Admin.UserName));
		strlcpy(this->Admin.Password,
			jDoc["Admin"]["Password"] | AdminParamsDefault.Password,
			sizeof(this->Admin.Password));

		if (jDoc["Power"])
		{
			this->Power = {
				static_cast<uint8_t>(jDoc["Power"]["Volts"].as<uint8_t>() | PowerParamsDefault.Volts),
				static_cast<uint16_t>(jDoc["Power"]["MilliAmps"].as<uint16_t>() | PowerParamsDefault.MilliAmps),
				jDoc["Power"]["MilliWatts"].as<uint32_t>() | PowerParamsDefault.MilliWatts
			};
		}
		else
		{
			this->Power = PowerParamsDefault;
		}

		jDoc["Leds"]["Count"] = this->Leds.Count;
	}
};

#endif //ESP32_CONTROLLER_INCLUDE_GENERALCONFIG_H_
