const PlayObject = require('./PlayObject')

class FunctionObject extends PlayObject {
  receiver = null

  constructor(func) {
    this.func = func
  }

  setFunction(func) {
    this.func = func
  }
}

module.exports = FunctionObject
