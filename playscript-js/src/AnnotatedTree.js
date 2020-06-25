const CompilationLog = require('./CompilationLog')

class AnnotatedTree {
  anst = null
  types = []
  symbolOfNode = new Map()
  node2Scope = new Map()
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
}

module.exports = AnnotatedTree
