class CompilationLog {
  message = null
  line = 0
  positionInLine = 0
  ctx = null
  type = CompilationLog.INFO

  static INFO = 0
  static WARNING = 1
  static ERROR = 2

  toString() {
    return this.message + ' @' + this.line + ':' + this.positionInLine
  }
}