#pragma once

#include "antlr4-runtime.h"
#include <string>

#include "Scope.h"

namespace play {
  class Scope;
  class Symbol {
  public:
    std::string name;

    Scope* enclosingScope;

    size_t visibility = 0;

    // Symbol关联的AST节点
    antlr4::ParserRuleContext* ctx;

    
  };
} // namespace play
