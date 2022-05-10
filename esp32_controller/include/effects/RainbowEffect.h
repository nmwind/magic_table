//
// Created by nmWiN on 08.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_EFFECTS_RAINBOWEFFECT_H_
#define ESP32_CONTROLLER_INCLUDE_EFFECTS_RAINBOWEFFECT_H_

#include "../EffectBase.h"

class RainbowEffect : public EffectBase
{
 private:
	uint8_t _baza = 0;
 public:
	bool UseBlink = false;
 public:
	RainbowEffect() : EffectBase("Rainbow")
	{

	}
 public:
	void loop() override
	{
		//TODO: replace to: fill_rainbow(leds, LED_NUM, baza++, 7);

		for (int i = 0; i < LedsCount; i++)
		{
			Leds[i] = CHSV(_baza + i * 5, 255, 255);
		}

		_baza++;

		if (UseBlink)
		{
			if (random8() < 80)
			{
				Leds[random16(LedsCount)] += CRGB::White;
			}
		}

		FastLED.show();
		delay(20);
	}
};

#endif //ESP32_CONTROLLER_INCLUDE_EFFECTS_RAINBOWEFFECT_H_
