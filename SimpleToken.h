#if !defined(__SIMPLE_TOKEN__)
#define __SIMPLE_TOKEN__

#include "TokenType.h"
#include <string>
class SimpleToken {
private:
  TokenType type;
  std::string text;
public:
  SimpleToken() {}
  SimpleToken(const TokenType& _type, const std::string& _text) : type(_type), text(_text) {}
  TokenType getType() {
    return type;
  }
  std::string getText() {
    return text;
  }
  void setType(const TokenType& _type) {
    type = _type;
  }
  void setText(const std::string& _text) {
    text = _text;
  }
};

#endif // MACRO
