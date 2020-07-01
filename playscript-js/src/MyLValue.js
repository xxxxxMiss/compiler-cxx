const LValue = require('./LValue')

class MyLValue extends LValue {
  constructor(valueContainer, variable) {
    super()
    this.valueContainer = valueContainer
    this.variable = variable
  }

  getValue() {
    // TODO: express super
    // this.variable instanceof super
    if (this.variable instanceof this) {
      return this.variable
    }

    return this.valueContainer.getValue(this.variable)
  }

  setValue(value) {
    this.valueContainer.set(this.variable, value)

    // TODO: function handler
    // if (value instanceof FunctionObject) {
    //   value.receiver = this.variable
    // }
  }

  getVariable() {
    return this.variable
  }

  getValueContainer() {
    return this.valueContainer
  }

  toString() {
    return 'LValue of ' + this.variable.name + ': ' + this.getValue()
  }
}

module.exports = MyLValue
