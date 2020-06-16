#pragma once
#include "Scope.h"

namespace play {
  class BlockScope : public Scope {
  private:
    int index = 1;
  public:
    BlockScope();
    BlockScope(Scope* enclosingScope, antlr4::ParserRuleContext* ctx);
    std::string toString();
  };
} // namespace play
