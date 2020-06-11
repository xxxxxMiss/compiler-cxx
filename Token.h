#if !defined(_TOKEN_)
#define _TOKEN_

#include <string>
#include "TokenType.h"
class Token {
public:
  TokenType getType();
  std::string getText();
};
#endif // _TOKEN_
