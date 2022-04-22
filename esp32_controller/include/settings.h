#ifndef _SETTINGS_H
#define _SETTINGS_H

#include <Arduino.h>
#include <EEPROM.h>
#include <EEManager.h>
#include "settings_cfg.h"

#define EEMANAGER_INIT_KEY 50

class Settings
{
public:
    static Settings &getInstance()
    {
        static Settings instance; // Guaranteed to be destroyed.
                                  // Instantiated on first use.
        return instance;
    }

private:
    Settings()
    {
        //_memoryWiFi.begin(0, EEMANAGER_INIT_KEY);
    } // Constructor? (the {} brackets) are needed here.

    // C++ 03
    // ========
    // Don't forget to declare these two. You want to make sure they
    // are inaccessible(especially from outside), otherwise, you may accidentally get copies of
    // your singleton appearing.
    // Settings(Settings const &);       // Don't Implement
    // void operator=(Settings const &); // Don't implement

    // C++ 11
    // =======
    // We can use the better technique of deleting the methods
    // we don't want.
public:
    Settings(Settings const &) = delete;
    void operator=(Settings const &) = delete;

    // Note: Scott Meyers mentions in his Effective Modern
    //       C++ book, that deleted functions should generally
    //       be public as it results in better error messages
    //       due to the compilers behavior to check accessibility
    //       before deleted status

public:
    Wifi_cfg *_wifi_cfg;
    // EEManager memory = new EEManager(&_wifi_cfg);
};

#endif
