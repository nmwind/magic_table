//
// Created by nmWiN on 15.05.2022.
//
//#include "commands.h"
//
//#include <WString.h>
//#include <typeinfo>
//#include <utility>
//#include <memory>
//
//
//std::unique_ptr<WsCommand> CreateWsCommand(const char* event)
//{
//	auto id = hash(event);
//	auto ctor = commands_mapping.at(id);
//	return ctor();
//}