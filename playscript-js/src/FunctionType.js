const Type = require('./Type')

module.exports = class FunctionType extends Type {
  getReturnType() {}

  getParamTypes() {}

  matchParameterTypes(types) {}
}
