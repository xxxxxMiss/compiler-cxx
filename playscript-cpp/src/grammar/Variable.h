#pragma once
#include "Type.h"
#include "Symbol.h"
#include <string>

namespace play {
  class Variable : Symbol {
  public:
    Variable() {}
    Variable(const std::string& name, Scope* enclosingScope, antlr4::ParserRuleContext* ctx);
  protected:
    Type* type;
    // TODO: 缺省值如何表示
    std::string toString();
  };
} // namespace play
