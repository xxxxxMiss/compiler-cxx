#include "StackFrame.h"

using namespace play;

// TODO: not public extension
StackFrame::StackFrame(BlockScope* scope) {
  this->scope = scope;
  this->object = new PlayObject();
}

bool StackFrame::contains(Variable* variable) {
  return object && object->fields.find(variable) != object->fields.end();
}