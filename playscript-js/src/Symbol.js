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