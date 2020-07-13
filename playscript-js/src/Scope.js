const Symbol = require('./Symbol')
const Variable = require('./Variable')
const Class = require('./Class')
const Function = require('./Function')
const FunctionType = require('./FunctionType')

class Scope extends Symbol {
  symbols = []

  addSymbol(symbol) {
    this.symbols.push(symbol)
    symbol.enclosingScope = this
  }

  getVariable(name) {
    return Scope.getVariable(this, name)
  }
  static getVariable(scope, name) {
    for (let s of scope.symbols) {
      if (s instanceof Variable && s.name == name) {
        return s
      }
    }
    return null
  }

  getFunction(name, paramTypes) {
    return Scope.getFunction(this, name, paramTypes)
  }
  static getFunction(scope, name, paramTypes) {
    let rtn = null
    for (let s of scope.symbols) {
      if (s instanceof Function && s.name === name) {
        if (s.matchParameterTypes(paramTypes)) {
          rtn = s
          break
        }
      }
    }
    return rtn
  }

  getFunctionVariable(name, paramTypes) {
    return Scope.getFunctionVariable(this, name, paramTypes)
  }
  static getFunctionVariable(scope, name, paramTypes) {
    let rtn = null
    for (let s of scope.symbols) {
      if (
        s instanceof Variable &&
        s.type instanceof FunctionType &&
        s.name === name
      ) {
        if (s.type.matchParameterTypes(paramTypes)) {
          rtn = s
          break
        }
      }
    }
    return rtn
  }

  // TODO: primitive type or reference type
  containsSymbol(symbol) {
    return this.symbols.includes(symbol)
  }

  getClass(scope, name) {
    if (typeof scope === 'string') {
      name = scope
      scope = this
    }
    for (let s of scope.symbols) {
      if (s instanceof Class && s.name === name) {
        return s
      }
    }
    return null
  }

  toString() {
    return 'Scope: ' + this.name
  }
}

module.exports = Scope
