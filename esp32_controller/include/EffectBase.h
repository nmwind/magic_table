//
// Created by nmWiN on 07.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_EFFECTBASE_H_
#define ESP32_CONTROLLER_INCLUDE_EFFECTBASE_H_

#include <WString.h>
#include <FastLED.h>

#include <utility>
#include "ConfigBase.h"

class EffectBase
{
 private:
	const String Name;
 protected:
	CRGB* Leds = nullptr;
	uint16_t LedsCount{};
 protected:
	explicit EffectBase(String name)
		: Name(std::move(name))
	{
	}
 public:
	void setLeds(CRGB* leds, uint16_t count)
	{
		Leds = leds;
		LedsCount = count;
	}
 public:
	virtual void begin()
	{
	}
	virtual void loop() = 0;
 public:
	virtual ~EffectBase() = default;
};

#endif //ESP32_CONTROLLER_INCLUDE_EFFECTBASE_H_
