const Variable = require('./Variable')

class This extends Variable {
  constructor(theClass, ctx) {
    // TODO: super()
    super('this', theClass, ctx)
  }
}

module.exports = This
