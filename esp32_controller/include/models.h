//
// Created by nmWiN on 22.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_MODELS_H_
#define ESP32_CONTROLLER_INCLUDE_MODELS_H_

#include "EffectBase.h"

struct EffectsManagerInfo
{
	int NumberLeds;
	//calculate_max_brightness_for_power_mW tells you the highest brightness level you can use and still stay under the specified power budget for a given set of leds
	uint8_t CurrentMaxBrightness;
	//calculate_unscaled_power_mW tells you how many milliwatts the current LED data would draw at brightness = 255.
	uint32_t CurrentPowerAtMaxBrightness;
	uint8_t CurrentBrightness;
	//Get the number of frames/second being written out
	uint16_t Fps;
};

typedef std::unique_ptr<EffectBase> (* EffectsCreator)();

struct EffectDescriptor
{
	String Name;
	uint16_t Order;
	EffectsCreator creator;
};

struct EffectInfo {
	String Name;
	uint16_t Order;
};

#endif //ESP32_CONTROLLER_INCLUDE_MODELS_H_
