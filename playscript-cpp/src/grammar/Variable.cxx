#include "Variable.h"

using namespace play;

Variable::Variable(const std::string& name, Scope* enclosingScope, antlr4::ParserRuleContext* ctx) {
  this->name = name;
  this->enclosingScope = enclosingScope;
  this->ctx = ctx;
}

std::string Variable::toString() {
  return "Variable " + name + "->" + type->getName();
}
