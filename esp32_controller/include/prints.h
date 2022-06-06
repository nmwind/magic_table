//
// Created by nmWiN on 20.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_PRINTS_H_
#define ESP32_CONTROLLER_INCLUDE_PRINTS_H_

#include "EffectsManager.h"

static void print(EffectsManagerInfo& ptr)
{
	Serial.printf(
		"NumberLeds:[%u],CurrentMaxBrightness:[%u],CurrentPowerAtMaxBrightness:[%u],CurrentBrightness:[%u],Fps:[%u]\n",
		ptr.NumberLeds,
		ptr.CurrentMaxBrightness,
		ptr.CurrentPowerAtMaxBrightness,
		ptr.CurrentBrightness,
		ptr.Fps);
}

#endif //ESP32_CONTROLLER_INCLUDE_PRINTS_H_
