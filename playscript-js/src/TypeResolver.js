const { PlayScriptListener } = require('./PlayScriptListener')
const Variable = require('./Variable')
const Scope = require('./Scope')
const PrimitiveType = require('./PrimitiveType')
const VoidType = require('./VoidType')
/**
 * 第二遍扫描，把变量，函数，类继承的类型都解析出来
 */
class TypeResolver extends PlayScriptListener {
  constructor(at) {
    super()
    this.at = at
  }

  /**
   * 设置所声明的变量的类型
   * @param {*} ctx
   */
  exitVariableDeclarators(ctx) {
    const type = this.at.typeOfNode.get(ctx.typeType())
    for (let child of ctx.variableDeclarator()) {
      const variable = this.at.symbolOfNode.get(child.variableDeclaratorId())
      variable.type = type
    }
  }

  /**
   * 把所有的变量声明加入符号表
   * @param {*} ctx
   */
  enterVariableDeclaratorId(ctx) {
    const idName = ctx.IDENTIFIER().getText()
    const scope = this.at.enclosingScopeOfNode(ctx)
    const variable = new Variable(idName, scope, ctx)

    if (Scope.getVariable(scope, idName) != null) {
      this.at.log('Variable or parameter already Declared: ' + idName, ctx)
    }
    scope.addSymbol(variable)
    this.at.symbolOfNode.set(ctx, variable)
  }

  /**
   * 设置函数的返回值类型
   * @param {*} ctx
   */
  exitFunctionDeclaration(ctx) {}

  /**
   * 设置函数参数类型
   * @param {*} ctx
   */
  exitFormalParameter(ctx) {}

  /**
   * 设置类的父类
   * @param {*} ctx
   */
  enterClassDeclaration(ctx) {}

  exitTypeTypeOrVoid(ctx) {
    if (ctx.VOID() != null) {
      this.at.typeOfNode.set(ctx, VoidType.instance())
    } else if (ctx.typeType() != null) {
      this.at.typeOfNode.set(ctx, this.at.typeOfNode.get(ctx.typeType()))
    }
  }

  exitTypeType(ctx) {
    if (ctx.classOrInterfaceType() != null) {
      const type = this.at.typeOfNode.get(ctx.classOrInterfaceType())
      this.at.typeOfNode.set(ctx, type)
    } else if (ctx.functionType() != null) {
      const type = this.at.typeOfNode.get(ctx.functionType())
      this.at.typeOfNode.set(ctx, type)
    } else if (ctx.primitiveType() != null) {
      const type = this.at.typeOfNode.get(ctx.primitiveType())
      this.at.typeOfNode.set(ctx, type)
    }
  }

  enterClassOrInterfaceType(ctx) {}

  exitFunctionType(ctx) {}

  exitPrimitiveType(ctx) {
    let type = null
    if (ctx.BOOLEAN() != null) {
      type = PrimitiveType.Boolean
    } else if (ctx.INT() != null) {
      type = PrimitiveType.Integer
    } else if (ctx.LONG() != null) {
      type = PrimitiveType.Long
    } else if (ctx.FLOAT() != null) {
      type = PrimitiveType.Float
    } else if (ctx.DOUBLE() != null) {
      type = PrimitiveType.Double
    } else if (ctx.BYTE() != null) {
      type = PrimitiveType.Byte
    } else if (ctx.SHORT() != null) {
      type = PrimitiveType.Short
    } else if (ctx.CHAR() != null) {
      type = PrimitiveType.Char
    } else if (ctx.STRING() != null) {
      type = PrimitiveType.String
    }

    this.at.typeOfNode.set(ctx, type)
  }
}

module.exports = TypeResolver
