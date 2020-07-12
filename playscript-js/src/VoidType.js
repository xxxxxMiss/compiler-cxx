const Type = require('./Type')

class VoidType extends Type {
  static voidType = new VoidType()
  static instance() {
    return VoidType.voidType
  }

  getName() {
    return 'void'
  }

  getEnclosingScope() {
    return null
  }

  isType(type) {
    return this == type
  }

  toString() {
    return 'void'
  }
}

module.exports = VoidType
