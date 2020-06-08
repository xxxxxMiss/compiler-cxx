#if !defined(_TOKEN_TYPE_)
#define _TOKEN_TYPE_
enum class TokenType
{
  Plus,  // +
  Minus, // -
  Star,  // *
  Slash, // /

  GE, // >=
  GT, // >
  EQ, // =
  LE, // <=
  LT, // <

  SemiColon,  // ;
  LeftParen,  // (
  RightParen, // )

  Assignment, // =

  If,
  Else,

  Int,

  Identifier,

  IntLiteral,
  StringLiteral
};
#endif // MACRO