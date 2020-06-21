class PlayObject {
  fields = new Map()

  getValue(variable) {
    let rtn = this.fields.get(variable)
    if (rtn == null) {
      return NullObject.instance()
    }
    return rtn
  }

  setValue(variable, value) {
    this.fields.set(variable, value)
  }
}

module.exports = PlayObject