const Symbol = require('./Symbol')

class Variable extends Symbol {
  // Type
  type = null
  // Object
  defaultValue = null
  // Integer
  multiplicity = 1

  Variable(name, enclosingScope, ctx) {
    this.name = name
    this.enclosingScope = enclosingScope
    this.ctx = ctx
  }

  // 面向对象，一个类中的成员的作用域在限制在这个类中
  // 通过访问修饰符扩大作用范围
  isClassMember() {
    return this.enclosingScope instanceof Class
  }

  toString() {
    return 'Variable ' + this.name + '->' + this.type
  }
}

module.exports = Variable
