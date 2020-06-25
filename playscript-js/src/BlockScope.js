const Scope = require('./Scope')

class BlockScope extends Scope {
  static index = 1

  constructor(enclosingScope, ctx) {
    super()
    this.name = 'block' + BlockScope.index++
    if (enclosingScope && ctx) {
      this.enclosingScope = enclosingScope
      this.ctx = ctx
    }
  }

  toString() {
    return 'Block ' + this.name
  }
}

module.exports = BlockScope
