//
// Created by nmWiN on 06.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_CONFIG_H_
#define ESP32_CONTROLLER_INCLUDE_CONFIG_H_

#include <WString.h>
#include <FS.h>
#include <SPIFFS.h>
#include <ArduinoJson.hpp>

using ARDUINOJSON_NAMESPACE::StaticJsonDocument;
using ARDUINOJSON_NAMESPACE::JsonDocument;
using ARDUINOJSON_NAMESPACE::deserializeJson;
using ARDUINOJSON_NAMESPACE::serializeJson;
using ARDUINOJSON_NAMESPACE::DeserializationError;

template<size_t jsonBufferSize>
class ConfigBase
{
 protected:
	const String fileName;
	explicit ConfigBase(const String& name) : fileName('/' + name)
	{
	}

 public:
	virtual void Default() = 0;

 protected:
	virtual void onSave(JsonDocument& jDoc) = 0;
	virtual void onLoad(JsonDocument& jDoc) = 0;

 public:
	bool Load()
	{
		File file = SPIFFS.open(fileName, FILE_READ);
		StaticJsonDocument<jsonBufferSize> jDoc;
		auto error = deserializeJson(jDoc, file);

		if (error)
		{
			Serial.printf("Failed to read file, error code: %s", error.c_str());
			Serial.println();
			return false;
		}

		onLoad(jDoc);

		return true;
	}

	bool Save()
	{
		SPIFFS.remove(fileName);
		File file = SPIFFS.open(fileName, FILE_WRITE);
		if (!file)
		{
			Serial.println(F("Failed to create file"));
			return false;
		}

		StaticJsonDocument<jsonBufferSize> jDoc;

		onSave(jDoc);

		if (serializeJson(jDoc, file) == 0)
		{
			Serial.println(F("Failed to write to file"));
			return false;
		}

		return true;
	}

};

#endif //ESP32_CONTROLLER_INCLUDE_CONFIG_H_
