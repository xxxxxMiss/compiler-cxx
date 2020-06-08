#if !defined(_TOKEN_READER_)
#define _TOKEN_READER_

#include "Token.h"
class TokenReader
{
public:
  TokenReader() = default;
  Token *read();
  Token *peek();
  void unread();
  int getPosition();
  void setPosition(int position);
};

#endif // _TOKEN_READER_
