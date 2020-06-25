const { PlayScriptVisitor } = require('./PlayScriptVisitor')
const StackFrame = require('./StackFrame')
const MyLValue = require('./MyLValue')
const LValue = require('./LValue')
const BreakObject = require('./BreakObject')

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
  visitBlock(ctx) {
    // for, if, function等会产生scope
    const scope = this.at.node2Scope.get(ctx)
    if (scope != null) {
      const frame = new StackFrame(scope)
      this.pushStack(frame)
    }

    const rtn = this.visitBlockStatements(ctx.blockStatements())
    if (scope != null) {
      this.popStack()
    }
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
      rtn = this.visitVariableDeclarator(child)
    }
    return rtn
  }

  visitVariableDeclarator(ctx) {
    let rtn = null
    let lvalue = this.visitVariableDeclaratorId(ctx.variableDeclaratorId())
    if (ctx.variableInitializer() != null) {
      rtn = this.visitVariableInitializer(ctx.variableInitializer())
      if (rtn instanceof LValue) {
        rtn = rtn.getValue()
      }
      lvalue.setValue(rtn)
    }
    return rtn
  }
  visitVariableDeclaratorId(ctx) {}
  visitVariableInitializer(ctx) {
    let rtn = null
    if (ctx.expression() != null) {
      rtn = this.visitExpression(ctx.expression())
    }
    return rtn
  }

  // 各种各样的表达式....
  visitExpression(ctx) {}
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
