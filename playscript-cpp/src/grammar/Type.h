#pragma once

#include <string> 

namespace play {
  class Scope;
  class Type {
  public:
    std::string getName();
    Scope* getEnclosingScope();
    // typeof
    bool isType(Type* type);
  }; 
} // namespace play
