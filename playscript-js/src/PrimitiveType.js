const Type = require('./Type')

class PrimitiveType extends Type {
  // 把常见的基础数据类型都定义出来
  static Integer = new PrimitiveType('Integer')
  static Long = new PrimitiveType('Long')
  static Float = new PrimitiveType('Float')
  static Double = new PrimitiveType('Double')
  static Boolean = new PrimitiveType('Boolean')
  static Byte = new PrimitiveType('Byte')
  static Char = new PrimitiveType('Char')
  static Short = new PrimitiveType('Short')
  static String = new PrimitiveType('Short') //增加String为基础类型
  static Null = new PrimitiveType('null')

  constructor(name) {
    super()
    this.name = name
  }

  getName() {
    return this.name
  }

  getEnclosingScope() {
    return null
  }

  toString() {
    return this.name
  }

  static getUpperType(type1, type2) {
    let type = null
    if (type1 == PrimitiveType.String || type2 == PrimitiveType.String) {
      type = PrimitiveType.String
    } else if (type1 == PrimitiveType.Double || type2 == PrimitiveType.Double) {
      type = PrimitiveType.Double
    } else if (type1 == PrimitiveType.Float || type2 == PrimitiveType.Float) {
      type = PrimitiveType.Float
    } else if (type1 == PrimitiveType.Long || type2 == PrimitiveType.Long) {
      type = PrimitiveType.Long
    } else if (
      type1 == PrimitiveType.Integer ||
      type2 == PrimitiveType.Integer
    ) {
      type = PrimitiveType.Integer
    } else if (type1 == PrimitiveType.Short || type2 == PrimitiveType.Short) {
      type = PrimitiveType.Short
    } else {
      type = PrimitiveType.Byte // TODO 以上这些规则有没有漏洞？
    }
    return type
  }

  static isNumeric(type) {
    if (
      type == PrimitiveType.Byte ||
      type == PrimitiveType.Short ||
      type == PrimitiveType.Integer ||
      type == PrimitiveType.Long ||
      type == PrimitiveType.Float ||
      type == PrimitiveType.Double
    ) {
      return true
    }
    return false
  }
}

module.exports = PrimitiveType
