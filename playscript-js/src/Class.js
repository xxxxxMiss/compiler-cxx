const Scope = require('./Scope')
const Type = require('./Type')
const This = require('./This')
const Super = require('./Super')

class ClassScope extends Type {}

class Class extends ClassScope {
  parentClass = null
  thisRef = null
  superRef = null
  // 最顶层的基类
  static rootClass = new Class('Object', null)

  constructor(name, ctx) {
    super()
    this.name = name
    this.ctx = ctx

    this.thisRef = new This(this, ctx)
    this.thisRef.type = this
  }

  getParentClass() {
    return this.parentClass
  }

  setParentClass(theClass) {
    this.parentClass = theClass

    this.superRef = new Super(theClass, ctx)
    this.superRef.type = this.parentClass
  }

  getThis() {
    return this.thisRef
  }

  getSuper() {
    return this.superRef
  }

  toString() {
    return 'Class ' + this.name
  }

  getVariable(name) {
    // TODO: 注意JS语言本身的查找方式和我们要实现的查找方式
    let rtn = this.getVariable(name)
    if (rtn == null && this.parentClass != null) {
      rtn = this.parentClass.getVariable(name)
    }
    return rtn
  }

  /**
   * 是否包含某个class
   */
  getClass(name) {
    let rtn = this.getClass(name)
    if (rtn == null && this.parentClass != null) {
      rtn = this.parentClass.getClass(name)
    }
    return rtn
  }
}

module.exports = Class
