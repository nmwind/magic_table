//
// Created by nmWiN on 08.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_
#define ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_

#include <FastLED.h>

#include "ConfigBase.h"
#include "EffectBase.h"

#include "effects/RainbowEffect.h"
#include "effects/FireballEffect.h"

namespace
{
	typedef std::unique_ptr<EffectBase> (* Creator)();

	template<typename T>
	std::unique_ptr<EffectBase> make()
	{
		return static_cast<std::unique_ptr<EffectBase>>(new T{});
	}

	Creator make_effects_array[] =
		{
			make<RainbowEffect>,
			make<FireballEffect>
		};
}

class EffectsManager
{
 private:
	const uint16_t LedsCount;
	CRGB* const _leds{};
	std::unique_ptr<EffectBase> _effect = nullptr;
	uint _effectIndex =-1;
	bool _isTicking = false;
 public:
	explicit EffectsManager(uint16_t ledsCount) noexcept;
 public:
	void Start(uint index);
	void Stop();
	void Tick();
	void Next();
	void Previous();
	uint GetEffectIndex() const;
	void Reset();
};

#endif //ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_
