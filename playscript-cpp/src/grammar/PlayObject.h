#pragma once

#include <unordered_map>
#include "Variable.h"

namespace play
{
  class PlayObject {
  public:
    std::unordered_map<Variable*, void*> fields;
    void* getValue(Variable* variable);
    void setValue(Variable* variable, void* value);
  };
} // namespace play
