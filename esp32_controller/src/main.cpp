#include <Arduino.h>
#include <FS.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
// #include <SPIFFS.h>
// #include <ESPmDNS.h>
#include <LittleFS.h>
#include <SPIFFSEditor.h>

const char *ssid = "Viba.Net";
const char *password = "c-GZVVl9tSYTqK$ggiuPibY3bsz!u1wtUeWXeLm!L8LtslYVgJs5XKWM8Ezl";
const char *hostName = "esp-async";
const char *http_username = "admin";
const char *http_password = "admin";

AsyncWebServer server(80);

void listDir(fs::FS &fs, const char *dirname, uint8_t levels)
{
  Serial.printf("Listing directory: %s\r\n", dirname);

  File root = fs.open(dirname);
  if (!root)
  {
    Serial.println("- failed to open directory");
    return;
  }
  if (!root.isDirectory())
  {
    Serial.println(" - not a directory");
    return;
  }

  File file = root.openNextFile();
  while (file)
  {
    if (file.isDirectory())
    {
      Serial.print("  DIR : ");
      Serial.println(file.name());
      if (levels)
      {
        listDir(fs, file.name(), levels - 1);
      }
    }
    else
    {
      Serial.print("  FILE: ");
      Serial.print(file.name());
      Serial.print("\tSIZE: ");
      Serial.println(file.size());
    }
    file = root.openNextFile();
  }
}

void setup()
{
  Serial.begin(9600);
  Serial.setDebugOutput(true);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  LittleFS.begin(false, "/spiffs");

  // MDNS.addService("http","tcp",80);

  server.addHandler(new SPIFFSEditor(LittleFS, http_username, http_password));

  server.on("/heap", HTTP_GET, [](AsyncWebServerRequest *request)
            { request->send(200, "text/plain", String(ESP.getFreeHeap())); });

  // server.serveStatic("/", LittleFS, "/").setDefaultFile("index.html");

  server.on("/dirs", HTTP_GET, [](AsyncWebServerRequest *request)
            { 
              listDir(LittleFS, "/", 1);
              request->send(200, "text/plain", String(ESP.getFreeHeap())); });

  server.begin();

  listDir(LittleFS, "/", 2);
}

void loop()
{
  // put your main code here, to run repeatedly:
  delay(2000);
  listDir(LittleFS, "/", 2);
}