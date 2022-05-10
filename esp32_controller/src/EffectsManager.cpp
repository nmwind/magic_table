//
// Created by nmWiN on 08.05.2022.
//
#include "definitions.h"
#include "EffectsManager.h"

EffectsManager::EffectsManager(uint16_t ledsCount) noexcept
	: LedsCount(ledsCount),
	  _leds(new CRGB[ledsCount])
{
	std::fill_n(_leds, LedsCount, CRGB::Blue);
	CFastLED::addLeds<WS2812B, BOARD_DATA_PIN, GRB>(_leds, LedsCount);
	FastLED.setMaxPowerInVoltsAndMilliamps(DEFAULT_POWER_PARAMS_VOLTS, DEFAULT_POWER_PARAMS_MILLI_AMPS);
}

void EffectsManager::Start(uint index)
{
	if (index >= sizeof(make_effects_array) / sizeof(make_effects_array[0]) || index < 0)
	{
		return;
	}

	_isTicking = false;

	if (_effectIndex != index)
	{
		if (_effect)
		{
			_effect.reset(nullptr);
		}

		_effectIndex = index;
		_effect = make_effects_array[index]();
		_effect->setLeds(_leds, LedsCount);
		_effect->begin();
	}

	_isTicking = true;
}

void EffectsManager::Stop()
{
	_isTicking = false;
	FastLED.clear(true);
	FastLED.show();
}

void EffectsManager::Tick()
{
	if (!_isTicking)
	{
		delay(10);
		return;
	}

	_effect->loop();
}

void EffectsManager::Next()
{
	if (_isTicking)
	{
		Start(_effectIndex + 1);
	}
}

void EffectsManager::Previous()
{
	if (_isTicking)
	{
		Start(_effectIndex - 1);
	}
}

uint EffectsManager::GetEffectIndex() const
{
	return _effectIndex;
}

void EffectsManager::Reset()
{

}



