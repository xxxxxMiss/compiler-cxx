#if !defined(_TOKEN_READER_)
#define _TOKEN_READER_

#include <vector>
#include "Token.h"
#include "SimpleToken.h"
class TokenReader {
private:
  std::vector<SimpleToken*> tokens;
  int pos = 0;
public:
  TokenReader() = default;
  TokenReader(const std::vector<SimpleToken*>& _tokens) : tokens(_tokens) {}
  SimpleToken* read() {
    if (pos < tokens.size()) {
      return tokens[pos++];
    }
    return nullptr;
  }
  SimpleToken* peek() {
    if (pos < tokens.size()) {
      return tokens[pos];
    }
    return nullptr;
  }
  void unread() {
    if (pos > 0) {
      pos--;
    }
  }
  int getPosition() {
    return pos;
  }
  void setPosition(int position) {
    if (position >= 0 && position < tokens.size()) {
      pos = position;
    }
  }
};

#endif // _TOKEN_READER_
