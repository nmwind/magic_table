#include <Arduino.h>
#include <WiFi.h>
#include <SPIFFS.h>
#include <GyverOS.h>

#include "definitions.h"
#include "prints.h"
#include "GeneralConfig.h"
#include "EffectsManager.h"
#include "WebController.h"
#include "effects/index.h"

using ARDUINOJSON_NAMESPACE::JsonDocument;

EffectsManager effectsManager(DEFAULT_LEDS_PARAMS_COUNT);
WebController webController(&effectsManager, BOARD_UI_HTTP_PORT);
GyverOS<2> OS;

void SendLedInfoData();
void SendStateData();
void SendEffectsData();

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

	webController.OnState([](WebController* controller, WebControllerClientState state)
	{
	  Serial.printf("OnState[%u] clientState: [%u]\n", controller->State(), state);
	  if (state == Established)
	  {
		  SendStateData();
	  }
	  if (controller->State() != UnderControl)
	  {
		  OS.detach(0);
	  }
	});
	webController.OnCommand([](WebController* controller, String& commandId, CommandArgs& commandArgs)
	{
	  String output;
	  serializeJson(commandArgs, output);
	  Serial.printf("OnCommand[%s] args: [%s]\n", commandId.c_str(), output.c_str());
	  switch (hash(commandId.c_str()))
	  {
	  case hash(WS_COMMAND_START):
		  effectsManager.Start(commandArgs["Name"]);
		  SendStateData();
		  break;
	  case hash(WS_COMMAND_STOP):
		  effectsManager.Stop();
		  SendStateData();
		  break;
	  case hash(WS_COMMAND_NEXT):
		  effectsManager.Next();
		  break;
	  case hash(WS_COMMAND_PREV):
		  effectsManager.Previous();
		  break;
	  case hash(WS_COMMAND_GET_EFFECTS):
		  SendEffectsData();
		  break;
	  case hash(WS_COMMAND_SUBSCRIPTION):
		  if (commandArgs["Type"] == WS_COMMAND_DATA_LED_INFO)
		  {
			  auto enabled = commandArgs["Enabled"] | false;
			  if (enabled)
			  {
				  OS.attach(0, SendLedInfoData, 1000);
			  }
			  else
			  {
				  OS.detach(0);
			  }
		  }
		  break;
	  default:
		  Serial.printf("warning: no handler for the command\n");
		  break;
	  }
	});

	SPIFFS.begin();
	webController.Start();
}

void loop()
{
	OS.tick();
	effectsManager.Tick();
}

void SendLedInfoData()
{
	auto info = effectsManager.GetInfo();
	const int capacity = JSON_OBJECT_SIZE(5);
	StaticJsonDocument<capacity> json;
	CommandArgs jCmd = json.to<CommandArgs>();
	jCmd["NumberLeds"] = info.NumberLeds;
	jCmd["CurrentMaxBrightness"] = info.CurrentMaxBrightness;
	jCmd["CurrentPowerAtMaxBrightness"] = info.CurrentPowerAtMaxBrightness;
	jCmd["CurrentBrightness"] = info.CurrentBrightness;
	jCmd["Fps"] = info.Fps;

	webController.Send<LedInfoData::Capacity>(WS_COMMAND_DATA_LED_INFO, jCmd);
//	auto info = effectsManager.GetInfo();
//	const LedInfoData data(info);
//	const CommandArgs commandArgs = data.ToCommandArgs();
//	webController.Send<LedInfoData::Capacity>(WS_COMMAND_DATA_LED_INFO, commandArgs);
}

void SendStateData()
{
	const int capacity = JSON_OBJECT_SIZE(2);
	StaticJsonDocument<capacity> json;
	CommandArgs jCmd = json.to<CommandArgs>();
	jCmd["EffectIndex"] = effectsManager.Index();
	jCmd["IsRun"] = effectsManager.IsRun();
	webController.Send<capacity>(WS_COMMAND_DATA_STATE, jCmd);

//	StateData data{ effectsManager.Index(), effectsManager.IsRun() };
//	CommandArgs commandArgs = data.ToCommandArgs();
//	webController.Send<StateData::Capacity>(WS_COMMAND_DATA_STATE, commandArgs);
}

void SendEffectsData()
{
	EffectInfo array[EFFECTS_COUNT]{};
	EffectsManager::GetEffectsInfo(array);

	const int capacity = 2 * // ХЗ
		EFFECTS_COUNT * JSON_OBJECT_SIZE(2) // EffectInfo = 2 property
		+ JSON_OBJECT_SIZE(1) //Effects
		+ JSON_ARRAY_SIZE(EFFECTS_COUNT); //Array
	StaticJsonDocument<capacity> json;
	auto jCmd = json.to<CommandArgs>();
	auto jArr = jCmd.createNestedArray("Effects");
	for (int i = 0; i < EFFECTS_COUNT; ++i)
	{
		jArr[i]["Name"] = array[i].Name;
		jArr[i]["Order"] = array[i].Order;
		//Serial.printf("[SendEffectsData]: i=[%u],name=[%s],order=[%u]\n", i, array[i].Name.c_str(), array[i].Order);
	}

	if (json.overflowed())
	{
		Serial.printf("[Warning!][SendEffectsData]: Json overflowed\n");
	}

	webController.Send<capacity>(WS_COMMAND_DATA_EFFECTS, jCmd);
//	EffectInfo array[EFFECTS_COUNT]{};
//	EffectsManager::GetEffectsInfo(array);
//	const EffectsData<EFFECTS_COUNT> data{ array };
//	const CommandArgs commandArgs = data.ToCommandArgs();
//	webController.Send<EffectsData<EFFECTS_COUNT>::Capacity>(WS_COMMAND_DATA_EFFECTS, commandArgs);
}