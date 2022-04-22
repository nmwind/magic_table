#ifndef _SETTINGS_CFG_H
#define _SETTINGS_CFG_H

#include <Arduino.h>

struct Wifi_cfg
{
    char ssid[32];
    char password[64];
};

struct DC_cfg
{
    uint8_t volts;
    uint16_t milliamps;
    uint32_t milliwatts;
};

#endif