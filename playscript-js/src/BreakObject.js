class BreakObject {
  static instance = new BreakObject()

  static instance() {
    return BreakObject.instance
  }

  toString() {
    return 'Break'
  }
}

module.exports = BreakObject
