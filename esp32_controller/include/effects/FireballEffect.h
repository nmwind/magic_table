//
// Created by nmWiN on 08.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_EFFECTS_FIREBALLEFFECT_H_
#define ESP32_CONTROLLER_INCLUDE_EFFECTS_FIREBALLEFFECT_H_

#include "../EffectBase.h"

class FireballEffect : public EffectBase
{
 private:
	uint8_t _baza = 0;
 public:
	FireballEffect() : EffectBase("Fireball")
	{
	}
 public:
	void begin() override
	{
	}

	void loop() override
	{
		fadeToBlackBy(Leds, LedsCount, 2);
		int pos = beatsin16(13, 0, LedsCount - 1);
		Leds[pos] += CHSV(_baza++, 255, 192);
		FastLED.show();
	}
};

#endif //ESP32_CONTROLLER_INCLUDE_EFFECTS_FIREBALLEFFECT_H_
