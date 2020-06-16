#include "Scope.h"

using namespace play;

void Scope::addSymbol(Symbol* symbol) {
  symbols.push_back(symbol);
  symbol->enclosingScope = this;
}

Variable* Scope::getVariable(const std::string& name) {
  return getVariable(this, name);
}
Variable* Scope::getVariable(Scope* scope, const std::string& name) {
  for (Symbol* symbol : scope->symbols) {
    // TODO: 判断子类，以及类型转化
    if (symbol->name == name) {
      return (Variable*)symbol;
    }
  }
  return nullptr;
}

std::string Scope::toString() {
  return "Scope " + name;
}