const CompilationLog = require('./CompilationLog')

class AnnotatedTree {
  // AST
  ast = null
  types = []
  // AST节点对应的symbol
  symbolOfNode = new Map()
  // AST节点对应的scope，如for, 函数调用会启动新的scope
  node2Scope = new Map()
  // 用于做类型推断
  typeOfNode = new Map()
  logs = []

  lookupVariable(scope, idName) {
    let rtn = scope.getVariable(idName)
    if (rtn == null && rtn.enclosingScope != null) {
      rtn = this.lookupVariable(scope.enclosingScope, idName)
    }
    return rtn
  }

  log(message, type, ctx) {
    if (typeof type != 'number' && ctx == null) {
      ctx = type
      type = CompilationLog.ERROR
    }
    const log = new CompilationLog()
    log.message = message
    log.type = type
    log.line = ctx.getStart().getLine()
    log.positionInLine = ctx.getStart().getStartIndex()
    this.logs.push(log)
    // TODO:
    // console.log(log)
  }

  hasCompilationError() {
    for (let log of this.logs) {
      if (log.type === CompilationLog.ERROR) {
        return true
      }
    }
    return false
  }

  /**
   * 查找某节点所在的scope
   * @param {*} ctx
   */
  enclosingScopeOfNode(ctx) {
    let rtn = null
    // TODO: ctx上没有getParent方法？？？
    let parent = ctx.getParent()
    if (parent != null) {
      rtn = this.node2Scope.get(parent)
      if (rtn == null) {
        this.enclosingScopeOfNode(parent)
      }
    }
    return rtn
  }
}

module.exports = AnnotatedTree
