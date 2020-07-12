const Scope = require('./Scope')
const PlayObject = require('./PlayObject')

class StackFrame extends Scope {
  // 该frame所对应的作用域
  scope = null
  /**
   * 如果是同一级函数调用，则跟上一级的parentFrame相同
   * 如果是下一级的函数调用或者For, If等block，那么parentFrame就是自己
   * 如果是一个闭包，那么要带一个存放在堆里的环境
   */
  parentFrame = null
  object = null

  StackFrame(scope) {
    // 是一个block的作用域还是一个class的作用域
    // class
    if (scope.type) {
      this.scope = scope.type
      this.object = scope
    } else if (scope.function) {
      // 函数作用域
      this.scope = scope.function
      this.object = scope
    } else {
      // block作用域
      this.scope = scope
      this.object = new PlayObject()
    }
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
