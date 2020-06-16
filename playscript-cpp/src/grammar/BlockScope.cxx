#include "BlockScope.h"

using namespace play;

BlockScope::BlockScope() {
  this->name = "block" + index++;
}

BlockScope::BlockScope(Scope* enclosingScope, antlr4::ParserRuleContext* ctx) {
  this->name = "block" + index++;
  this->enclosingScope = enclosingScope;
  this->ctx = ctx;
}

std::string BlockScope::toString() {
  return "block " + name;
}