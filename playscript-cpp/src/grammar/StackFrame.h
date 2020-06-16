#pragma once

#include "PlayObject.h"
#include "BlockScope.h"

namespace play
{
  class Scope;
  class StackFrame {
  public:
    StackFrame(BlockScope* scope);
    Scope* scope;
    StackFrame* parentFrame;
    PlayObject* object;
    // 本栈里有没有包含某个这个变量
    bool contains(Variable* variable);
    std::string toString();
  };
} // namespace play
