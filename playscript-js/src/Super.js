const Variable = require('./Variable')

class Super extends Variable {
  constructor(theClass, ctx) {
    super('super', theClass, ctx)
  }
}

module.exports = Super
