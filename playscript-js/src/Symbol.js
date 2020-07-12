/**
 * 编译过程中产生的变量，类，函数，块都被称作符号
 */
class Symbol {
  name = null
  enclosingScope = null
  visibility = 0
  ctx = null

  getName() {
    return this.name
  }

  getEclosingScope() {
    return this.enclosingScope
  }
}

module.exports = Symbol
