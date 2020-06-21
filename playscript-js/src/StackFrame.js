const Scope = require('./Scope')
const PlayObject = require('./PlayObject')

class StackFrame extends Scope {
  scope = null
  parentFrame = null
  object = null

  StackFrame(scope) {
    this.scope = scope
    this.object = new PlayObject()
  }

  contains(variable) {
    if (this.object != null && this.object.fields != null) {
      return this.object.fields.has(variable)
    }
    return false
  }

  toString() {
    let rtn = this.scope.toString()
    // TODO: string type + reference type(call reference toString() directly?)
    if (this.parentFrame != null) {
      rtn += ' -> ' + this.parentFrame
    }
    return rtn
  }
}

module.exports = StackFrame