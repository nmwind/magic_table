//
// Created by nmWiN on 15.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_COMMANDS_H_
#define ESP32_CONTROLLER_INCLUDE_COMMANDS_H_

#include <WString.h>
#include <typeinfo>
#include <utility>
#include <memory>
#include <ArduinoJson.hpp>
#include <map>
#include "models.h"
#include "utils.h"

using ARDUINOJSON_NAMESPACE::JsonDocument;
using ARDUINOJSON_NAMESPACE::StaticJsonDocument;
typedef ArduinoJson::JsonObject CommandArgs;

#define WS_COMMAND_START                       "StartCommand"
#define WS_COMMAND_STOP                        "StopCommand"
#define WS_COMMAND_NEXT                        "NextCommand"
#define WS_COMMAND_PREV                        "PrevCommand"
#define WS_COMMAND_GET_EFFECTS                 "GetEffectsCommand"
#define WS_COMMAND_SUBSCRIPTION                "SubscriptionCommand"

#define WS_COMMAND_DATA_LED_INFO               "LedInfoData"
#define WS_COMMAND_DATA_EFFECTS                "EffectsData"
#define WS_COMMAND_DATA_STATE                  "StateData"

class LedInfoData
{
 private:
	EffectsManagerInfo _info;
 public:
	explicit LedInfoData(const EffectsManagerInfo& info) : _info(info)
	{
	}
 public:
	static const int Capacity = JSON_OBJECT_SIZE(5);
	CommandArgs ToCommandArgs() const
	{
		StaticJsonDocument<Capacity> json;
		CommandArgs jCmd = json.to<CommandArgs>();

		jCmd["NumberLeds"] = _info.NumberLeds;
		jCmd["CurrentMaxBrightness"] = _info.CurrentMaxBrightness;
		jCmd["CurrentPowerAtMaxBrightness"] = _info.CurrentPowerAtMaxBrightness;
		jCmd["CurrentBrightness"] = _info.CurrentBrightness;
		jCmd["Fps"] = _info.Fps;

		return jCmd;
	}
};

class StateData
{
 public:
	int EffectIndex;
	bool IsRun;
 public:
	static const int Capacity = JSON_OBJECT_SIZE(2);
	CommandArgs ToCommandArgs() const
	{
		StaticJsonDocument<Capacity> json;
		CommandArgs jCmd = json.to<CommandArgs>();
		jCmd["EffectIndex"] = EffectIndex;
		jCmd["IsRun"] = IsRun;

//		Serial.printf("\n");
//		serializeJson(jCmd, Serial);
//		Serial.printf("\n\n");

		return jCmd;
	}
};

template <int effectsCount>
class EffectsData
{
 public:
	EffectInfo *array;
 public:
	static const int Capacity = effectsCount*JSON_OBJECT_SIZE(2) + JSON_ARRAY_SIZE(effectsCount);
	CommandArgs ToCommandArgs() const
	{
		StaticJsonDocument<Capacity> json;
		//CommandArgs jCmd = json.to<CommandArgs>();
		for (int i = 0; i < effectsCount; ++i)
		{
			json[i]["Name"] = array[i].Name;
			json[i]["Order"] = array[i].Order;
		}

		return json.template to<CommandArgs>();
	}
};

typedef const char* WsCommandName;

/*
class WsCommand
{
 public:
	const uint32_t Id;
 protected:
	explicit WsCommand(uint32_t id) : Id(id)
	{
	}
// protected:
//	virtual void Pack(JsonDocument& jDoc) = 0;
//	virtual void UnPack(JsonDocument& jDoc) = 0;
 public:
	virtual ~WsCommand() = default;
};

typedef std::unique_ptr<WsCommand> (* WsCommandCreator)();

template<typename T>
std::unique_ptr<WsCommand> makeWsCommand()
{
	return static_cast<std::unique_ptr<WsCommand>>(new T{});
}

class StartCommand : public WsCommand
{
 public:
	uint32_t Index;
	explicit StartCommand(uint32_t index = 0) : WsCommand(WS_COMMAND_START), Index(index)
	{
	}
};

class StopCommand : public WsCommand
{
 public:
	explicit StopCommand() : WsCommand(WS_COMMAND_STOP)
	{
	}
};

class NextCommand : public WsCommand
{
 public:
	explicit NextCommand() : WsCommand(WS_COMMAND_NEXT)
	{
	}
};

class PrevCommand : public WsCommand
{
 public:
	explicit PrevCommand() : WsCommand(WS_COMMAND_PREV)
	{
	}
};

namespace
{
	const std::map<uint32_t, WsCommandCreator> commands_mapping = {
		{ WS_COMMAND_START, makeWsCommand<StartCommand> },
		{ WS_COMMAND_STOP, makeWsCommand<StopCommand> },
		{ WS_COMMAND_NEXT, makeWsCommand<NextCommand> },
		{ WS_COMMAND_PREV, makeWsCommand<PrevCommand> },
	};
}

std::unique_ptr<WsCommand> CreateWsCommand(const char*);

 */

#endif //ESP32_CONTROLLER_INCLUDE_COMMANDS_H_
