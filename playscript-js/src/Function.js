const Scope = require('./Scope')
const FunctionType = require('./FunctionType')
const Class = require('./Class')

class Function extends Scope {
  parameters = []
  returnType = null
  // 闭包变量
  closureVariables = null
  // Set
  paramTypes = null

  constructor(name, enclosingScope, ctx) {
    this.name = name
    this.enclosingScope = enclosingScope
    this.ctx = ctx
  }

  getReturnType() {
    return this.returnType
  }

  getParamTypes() {
    if (this.paramTypes == null) {
      this.paramTypes = new Set()
    }
    for (let param of this.parameters) {
      this.paramTypes.add(param.type)
    }
    return this.paramTypes
  }

  // 检查该函数是佛匹配所需参数
  matchParameterTypes(paramTypes) {
    if (paramTypes.length != this.paramTypes.length) {
      return false
    }

    let match = true
    for (let i = 0; i < paramTypes.length; ++i) {
      const variable = this.parameters[i]
      const type = paramTypes[i]
      if (!variable.type.isType(type)) {
        match = false
        break
      }
    }
    return match
  }
  // TODO:
  // isType(type) {
  //   if (type instanceof FunctionType) {
  //     return DefaultFunctionType.isType(this, type)
  //   }
  //   return false
  // }

  // isMethod() {
  //   return this.enclosingScope instanceof Class
  // }

  // isConstructor() {
  //   if (this.enclosingScope instanceof Class) {
  //     return this.enclosingScope.name === this.name
  //   }
  //   return false
  // }
}

module.exports = Function
