#pragma once

#include "Symbol.h"
#include <vector>
#include "Variable.h"

namespace play
{
  class Symbol;
  class Scope : public Symbol {
  public:
    std::vector<Symbol*> symbols;
    void addSymbol(Symbol* symbol);
    Variable* getVariable(const std::string& name);
    Variable* getVariable(Scope* scope, const std::string& name);
    std::string toString();
  };
} // namespace play
