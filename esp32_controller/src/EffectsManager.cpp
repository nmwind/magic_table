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

void EffectsManager::Start(const String& name)
{
//	if (index >= sizeof(make_effects_array) / sizeof(make_effects_array[0]) || index < 0)
//	{
//		return;
//	}
	_isTicking = false;

	if (_descriptor == nullptr || _descriptor->Name != name)
	{
		if (_effect)
		{
			_effect.reset(nullptr);
		}

		_descriptor = GetEffectDescriptor(name.c_str());
		if (_descriptor == nullptr)
		{
			Serial.printf("[EffectsManager::Start][%s]: effect not found\n", name.c_str());
			return;
		}
		_effect = _descriptor->creator();
		_effect->setLeds(_leds, LedsCount);
		_effect->begin();
	}

	_isTicking = true;
}

void EffectsManager::Stop()
{
	FastLED.clear(true);
	FastLED.show();
	_isTicking = false;
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
		const auto effect = GetEffectDescriptor(_descriptor->Order + 1);
		if (effect)
			Start(effect->Name);
	}
}

void EffectsManager::Previous()
{
	if (_isTicking)
	{
		const auto effect = GetEffectDescriptor(_descriptor->Order - 1);
		if (effect)
			Start(effect->Name);
	}
}

EffectsManagerInfo EffectsManager::GetInfo() const
{
	EffectsManagerInfo info{
		FastLED.size(),
		calculate_max_brightness_for_power_vmA(_leds,
			LedsCount,
			255,
			DEFAULT_POWER_PARAMS_VOLTS,
			DEFAULT_POWER_PARAMS_MILLI_AMPS),
		calculate_unscaled_power_mW(_leds, LedsCount),
		FastLED.getBrightness(),
		FastLED.getFPS()
	};

	return info;
}

int EffectsManager::Index() const
{
	return _descriptor != nullptr ? _descriptor->Order : -1;
}

bool EffectsManager::IsRun() const
{
	return _isTicking;
}

void EffectsManager::Reset()
{

}
void EffectsManager::GetEffectsInfo(EffectInfo* array)
{
	for (int i = 0; i < EFFECTS_COUNT; ++i)
	{
		array[i] = { EffectsDescriptorsArray[i].Name, EffectsDescriptorsArray[i].Order };
	}
}




