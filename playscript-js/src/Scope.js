const Symbol = require('./Symbol')

class Scope extends Symbol {
  symbols = []

  addSymbol(symbol) {
    this.symbols.push(symbol)
    symbol.enclosingScope = this
  }

  getVariable(scope, name) {
    if (typeof scope === 'string' && name == null) {
      name = scope
      scope = this
    }
    for (let s of scope.symbols) {
      if (s instanceof Variable && s.name == name) {
        return s
      }
    }
    return null
  }

  // TODO: primitive type or reference type
  containsSymbol(symbol) {
    return this.symbols.includes(symbol)
  }

  toString() {
    return 'Scope: ' + this.name
  }
}

module.exports = Scope
