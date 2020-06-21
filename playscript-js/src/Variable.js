const Symbol = require('./Symbol')

class Variable extends Symbol {
  type = null
  defaultValue = null
  multiplicity = 1

  Variable(name, enclosingScope, ctx) {
    this.name = name
    this.enclosingScope = enclosingScope
    this.ctx = ctx
  }

  // TODO: 是不是类的成员
  // isClassMember() {
  //   return this.enclosingScope instanceof Class
  // }

  toString() {
    return 'Variable ' + this.name + '->' + this.type
  }
}

module.exports = Variable