const BlockScope = require('./BlockScope')

class NameSpace extends BlockScope {
  parent = null
  subNameSpaces = []
  name = ''

  constructor(name, enclosingScope, ctx) {
    super()
    this.name = name
    this.enclosingScope = enclosingScope
    this.ctx = ctx
  }

  getName() {
    return this.name
  }

  addSubNameSpace(child) {
    this.subNameSpaces.push(child)
  }
  removeSubNameSpace(child) {
    const index = this.subNameSpaces.findIndex(item === child)
    this.subNameSpaces.splice(index, 1)
  }
}

module.exports = NameSpace
