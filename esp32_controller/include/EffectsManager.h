//
// Created by nmWiN on 08.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_
#define ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_

#include <FastLED.h>
#include <map>

#include "models.h"
#include "utils.h"
#include "ConfigBase.h"
#include "EffectBase.h"

#include "effects/RainbowEffect.h"
#include "effects/FireballEffect.h"

#define EFFECTS_COUNT 2

namespace
{
	template<typename T>
	std::unique_ptr<EffectBase> makeEffect()
	{
		return static_cast<std::unique_ptr<EffectBase>>(new T{});
	}

	const EffectDescriptor EffectsDescriptorsArray[] = {
		{ "Rainbow", 01, makeEffect<RainbowEffect> },
		{ "Fireball", 02, makeEffect<FireballEffect> },
	};

	//const int EffectsCount = sizeof(EffectsDescriptorsArray) / sizeof(EffectsDescriptorsArray[0]);

	EffectDescriptor* GetEffectDescriptor(const char* name)
	{
		for (const auto& i : EffectsDescriptorsArray)
		{
			if (i.Name == name)
				return const_cast<EffectDescriptor*>(&i);
		}

		return nullptr;
	}

	EffectDescriptor* GetEffectDescriptor(uint order)
	{
		for (const auto& i : EffectsDescriptorsArray)
		{
			if (i.Order == order)
				return const_cast<EffectDescriptor*>(&i);
		}

		return nullptr;
	}

//#define MAP(order, name)    { hash(#name), {#name,order,makeEffect<name##Effect>} }
//	const static std::map<uint32_t, EffectDescriptor> EffectsDescriptors_Mapping = {
//		MAP (01, Rainbow),
//		MAP (02, Fireball),
//	};
//#define EFFECTS_NUMBER 2
//
//	EffectDescriptor* GetEffectDescriptor(const char* name) {
//		return const_cast<EffectDescriptor*>(&EffectsDescriptors_Mapping.at(hash(name)));
//	}
//	const EffectDescriptor& GetEffectDescriptor(uint16_t order) {
//		for (const auto& item : EffectsDescriptors_Mapping){
//			if (item.second.Order == order)
//				return item.second;
//		}
//	}
}

class EffectsManager
{
 private:
	const uint16_t LedsCount;
	CRGB* const _leds{};
	std::unique_ptr<EffectBase> _effect = nullptr;
	EffectDescriptor* _descriptor = nullptr;
	bool _isTicking = false;
 public:
	explicit EffectsManager(uint16_t ledsCount) noexcept;
 public:
	void Start(const String& name);
	void Stop();
	void Tick();
	void Next();
	void Previous();
	EffectsManagerInfo GetInfo() const;
	static void GetEffectsInfo(EffectInfo* array);
	static int GetEffectsCount()
	{
		return EFFECTS_COUNT;
	};
	int Index() const;
	bool IsRun() const;
	void Reset();
};

#endif //ESP32_CONTROLLER_INCLUDE_EFFECTSMANAGER_H_
