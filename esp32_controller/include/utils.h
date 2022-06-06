//
// Created by nmWiN on 15.05.2022.
//

#ifndef ESP32_CONTROLLER_INCLUDE_UTILS_H_
#define ESP32_CONTROLLER_INCLUDE_UTILS_H_

#include <cstdint>

static constexpr uint32_t hash(const char* str, uint32_t h = 2166136261UL)
{
	return *str ? hash(str + 1, (h ^ *str) * 16777619ULL) : h;
}

#endif //ESP32_CONTROLLER_INCLUDE_UTILS_H_

