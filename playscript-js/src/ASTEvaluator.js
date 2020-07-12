const { PlayScriptVisitor } = require('./PlayScriptVisitor')
const StackFrame = require('./StackFrame')
const MyLValue = require('./MyLValue')
const LValue = require('./LValue')
const BreakObject = require('./BreakObject')
const { PlayScriptParser } = require('./PlayScriptParser')
const Variable = require('./Variable')

class ASTEvaluator extends PlayScriptVisitor {
  at = null
  traceStackFrame = false
  traceFunctionCall = false
  // 栈帧管理
  stack = []

  constructor(at) {
    super()
    this.at = at
  }

  pushStack(frame) {
    // 关键是设置正确的parentFrame
    if (this.stack.length) {
      for (let i = this.stack.length - 1; i >= 0; --i) {
        const f = this.stack[i]
        /**
         * function foo()
         * if (...) foo()
         */
        if (f.scope.enclosingScope === frame.scope.enclosingScope) {
          frame.parentFrame = f.parentFrame
          break
        }
        if (f.scope === frame.scope.enclosingScope) {
          frame.parentFrame = f
          break
        }
        // TODO: function handler
        // if (frame.object instanceof FunctionObject) {}
      }

      if (frame.parentFrame == null) {
        frame.parentFrame = this.stack[this.stack.length - 1]
      }
    }

    this.stack.push(frame)

    if (this.traceStackFrame) {
      this.dumpStackFrame()
    }
  }

  popStack() {
    this.stack.pop()
  }

  dumpStackFrame() {
    console.log('\nStackFrames------------------------')
    for (let frame of this.stack) {
      // TODO: call frame object's toString if it's existed
      console.log(frame)
    }
    console.log('-----------------------\n')
  }

  getLValue(variable) {
    let f = this.stack[this.stack.length - 1]

    let valueContainer = null
    while (f != null) {
      console.log('===========', f)
      if (f.scope.containsSymbol(variable)) {
        valueContainer = f.object
        break
      }
      f = f.parentFrame
    }

    // 正常作用域找不到，从闭包找
    if (valueContainer == null) {
      f = this.stack[this.stack.length - 1]
      while (f != null) {
        if (f.contains(variable)) {
          valueContainer = f.object
          break
        }
        f = f.parentFrame
      }
    }

    // 左值处理：取值还是取地址
    const lvalue = new MyLValue(valueContainer, variable)
    return lvalue
  }

  // -----------------------
  // ----------visit per node
  visitProg(ctx) {
    let rtn = null
    this.pushStack(new StackFrame(this.at.node2Scope.get(ctx)))
    rtn = this.visitBlockStatements(ctx.blockStatements())
    // TODO: why pop stack immediately?
    this.popStack()
    return rtn
  }

  visitBlockStatements(ctx) {
    let rtn = null
    for (let child of ctx.blockStatement()) {
      rtn = this.visitBlockStatement(child)
      if (rtn instanceof BreakObject) {
        break
      }
      // TODO: ReturnObject
      // if (rtn instanceof ReturnObject) {
      //   break
      // }
    }
    return rtn
  }

  visitBlock(ctx) {
    // for, if, function等会产生scope
    const scope = this.at.node2Scope.get(ctx)
    if (scope != null) {
      // 有些block底下是不对应scope的，比如函数
      const frame = new StackFrame(scope)
      this.pushStack(frame)
    }

    const rtn = this.visitBlockStatements(ctx.blockStatements())
    if (scope != null) {
      this.popStack()
    }
    return rtn
  }

  visitBlockStatement(ctx) {
    let rtn = null
    if (ctx.variableDeclarators() != null) {
      rtn = this.visitVariableDeclarators(ctx.variableDeclarators())
    } else if (ctx.statement() != null) {
      rtn = this.visitStatement(ctx.statement())
    }
    return rtn
  }

  visitVariableDeclarators(ctx) {
    let rtn = null
    for (let child of ctx.variableDeclarator()) {
      // TODO: 只返回最后一个变量初始化信息?
      rtn = this.visitVariableDeclarator(child)
    }
    return rtn
  }

  visitVariableDeclarator(ctx) {
    let rtn = null
    let lvalue = this.visitVariableDeclaratorId(ctx.variableDeclaratorId())
    // TODO: 这个地方对于左值的处理
    if (ctx.variableInitializer() != null) {
      rtn = this.visitVariableInitializer(ctx.variableInitializer())
      if (rtn instanceof LValue) {
        rtn = rtn.getValue()
      }
      lvalue.setValue(rtn)
    }
    return rtn
  }
  visitVariableDeclaratorId(ctx) {
    let rtn = null
    let symbol = this.at.symbolOfNode.get(ctx)
    // TODO: 取引用还是值?
    rtn = this.getLValue(symbol)
    return rtn
  }
  visitVariableInitializer(ctx) {
    let rtn = null
    if (ctx.expression() != null) {
      rtn = this.visitExpression(ctx.expression())
    }
    return rtn
  }

  // 各种各样的表达式....
  visitExpression(ctx) {
    let rtn = null
    if (ctx.bop != null && ctx.expression().length >= 2) {
      let left = this.visitExpression(ctx.expression(0))
      let right = this.visitExpression(ctx.expression(1))
      let leftObject = left
      let rightObject = right

      if (left instanceof LValue) {
        leftObject = left.getValue()
      }
      if (right instanceof LValue) {
        rightObject = right.getValue()
      }

      let type = at.typeOfNode.get(ctx)
      let type1 = at.typeOfNode(ctx.expression(0))
      let type2 = at.typeOfNode(ctx.expression(1))

      switch (ctx.bop.getType()) {
        case PlayScriptParser.ADD:
          rtn = this.add(leftObject, rightObject, type)
          break
        case PlayScriptParser.SUB:
          rtn = this.minus(leftObject, rightObject, type)
          break
        case PlayScriptParser.MUL:
          rtn = this.mul(leftObject, rightObject, type)
          break
        case PlayScriptParser.DIV:
          rtn = this.div(leftObject, rightObject, type)
          break
        // TODO: others
        //.........
        default:
          break
      }
      // . operator
    } else if (ctx.bop != null && ctx.bop.getType() === PlayScriptParser.DOT) {
      let leftObject = this.visitExpression(ctx.expression(0))
      if (leftObject instanceof LValue) {
        let value = leftObject.getValue()
        if (value instanceof ClassObject) {
          let valueContainer = value
          let leftVar = this.at.symbolOfNode.get(ctx.expression(0))
          if (ctx.IDENTIFIER() != null) {
          } else if (ctx.functionCall() != null) {
            if (this.traceFunctionCall) {
              console.log(`\n>>MethodCall: ${ctx.getText()}`)
            }
            rtn = this.methodCall(
              valueContainer,
              ctx.functionCall(),
              leftVar instanceof Super
            )
          }
        }
      }
    } else if (ctx.primary() != null) {
      rtn = this.visitPrimary(ctx.primary())
    }

    return rtn
  }

  visitPrimary(ctx) {
    let rtn = null

    if (ctx.literal() != null) {
      // 字面量
      rtn = this.visitLiteral(ctx.literal())
    } else if (ctx.IDENTIFIER() != null) {
      // 变量
      const symbol = this.at.symbolOfNode.get(ctx)
      if (symbol instanceof Variable) {
        rtn = this.getLValue(symbol)
      } else if (symbol instanceof Function) {
        rtn = new FunctionObject(symbol)
      }
    } else if (ctx.expression() != null) {
      // 括号括起来的变量
      rtn = this.visitExpression(ctx.expression())
    } else if (ctx.THIS() != null) {
      // this
      const thisRef = this.at.symbolOfNode.get(ctx)
      rtn = this.getLValue(thisRef)
    } else if (ctx.SUPER() != null) {
      // super
      const superRef = this.at.symbolOfNode.get(ctx)
      rtn = this.getLValue(superRef)
    }
    return rtn
  }

  visitLiteral(ctx) {
    let rtn = null

    if (ctx.integerLiteral() != null) {
      // 整数
      rtn = this.visitIntegerLiteral(ctx.integerLiteral())
    } else if (ctx.floatLiteral() != null) {
      // 浮点数
      rtn = this.visitFloatLiteral(ctx.floatLiteral())
    } else if (ctx.BOOL_LITERAL() != null) {
      // 布尔值
      // TODO: Boolean.TRUE || Boolean.FALSE
      if (ctx.BOOL_LITERAL().getText() === 'true') {
        rtn = true
      } else {
        rtn = false
      }
    } else if (ctx.STRING_LITERAL() != null) {
      // 字符串，取到的文本是带有双引号的
      const withQuotationMark = ctx.STRING_LITERAL().getText()
      rtn = withQuotationMark.substring(1, withQuotationMark.length - 1)
    } else if (ctx.CHAR_LITERAL() != null) {
      // TODO: 带有单引号吗？
      rtn = ctx.CHAR_LITERAL().getText()
    } else if (ctx.NULL_LITERAL() != null) {
      rtn = NullObject.instance()
    }
    return rtn
  }

  visitIntegerLiteral(ctx) {
    let rtn = null
    if (ctx.DECIMAL_LITERAL() != null) {
      // 十进制
      rtn = ctx.DECIMAL_LITERAL().getText()
    }
    // else if () {
    // TODO: 其他进制
    // }
    console.log('============', rtn)
    return rtn
  }

  add(obj1, obj2, targetType) {
    let rtn = null
    // TODO: js中参与运算的数据类型和其他语言的运算数类型
    // if (targetType === ...)
    return obj1.valueOf() + obj2.valueOf()
  }

  minus(obj1, obj2, targetType) {
    let rtn = null
    // TODO:
    // if (targetType === ...)
    return obj1.valueOf() - obj2.valueOf()
  }

  mul(obj1, obj2, targetType) {
    // TODO:
    return obj1.valueOf() * obj2.valueOf()
  }

  div(obj1, obj2, targetType) {
    // TODO:
    return obj1.valueOf() / obj2.valueOf()
  }

  EQ(obj1, obj2, targetType) {
    let rtn = null
    // 原始类型，引用类型的比较
    if (targetType === 'primitive') {
    } else {
      rtn = obj1 === obj2
    }
    return rtn
  }
  // void f()
  visitFunctionDeclaration(ctx) {
    return visitFunctionBody(ctx.functionBody())
  }

  visitFunctionBody(ctx) {
    let rtn = null
    if (ctx.block() != null) {
      rtn = this.visitBlock(ctx.block())
    }
    return rtn
  }
}

module.exports = ASTEvaluator
