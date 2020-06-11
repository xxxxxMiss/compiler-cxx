#include "TokenType.h"
#include <vector>
#include <string>
#include <iostream>

enum class DfaState {
  Initial,

  If, Id_if1, Id_if2, Else, Id_else1, Id_else2, Id_else3, Id_else4, Int, Id_int1, Id_int2, Id_int3, Id, GT, GE,

  Assignment,

  Plus, Minus, Star, Slash,

  SemiColon,
  LeftParen,
  RightParen,

  IntLiteral
};

class SimpleToken {
private:
  TokenType type;
  std::string text;
public:
  SimpleToken() {}
  SimpleToken(TokenType type, std::string& text) : type(type), text(text) {}

  TokenType getType() {
    return type;
  }
  std::string getText() {
    return text;
  }
  void setText(const std::string& text) {
    this->text = text;
  }
  void setType(TokenType type) {
    this->type = type;
  }
  // friend std::ostream& operator<<(std::ostream& os, SimpleToken* token) {}
};

// std::ostream& operator<<(std::ostream& os, SimpleToken* token) {
//   os << token->getText() << "\t" << token->getType() << endl;
//   return os;
// }

class SimpleLexer2 {
public:
  std::string text;
  TokenType type;
  SimpleToken* token = new SimpleToken();
  std::vector<SimpleToken*> tokens;
  
  DfaState initToken(const char& c) {
    if (!text.empty()) {
      token->setText(text);
      token->setType(type);
      tokens.push_back(token);

      token = new SimpleToken();
      text = "";
    }
    DfaState newState = DfaState::Initial;
    if (isalpha(c)) {
      if (c == 'i') {
        newState = DfaState::Id_int1;
      } else {
        newState = DfaState::Id;
      }
      type = TokenType::Identifier;
      text.push_back(c);
    } else if (isdigit(c)) {
      newState = DfaState::IntLiteral;
      type = TokenType::IntLiteral;
      text.push_back(c);
    } else if (c == '>') {
      newState = DfaState::GT;
      type = TokenType::GT;
      text.push_back(c);
    } else if (c == '+') {
      newState = DfaState::Plus;
      type = TokenType::Plus;
      text.push_back(c);
    } else if (c == '-') {
      newState = DfaState::Minus;
      type = TokenType::Minus;
      text.push_back(c);
    } else if (c == '*') {
      newState = DfaState::Star;
      type = TokenType::Star;
      text.push_back(c);
    } else if (c == '/') {
      newState = DfaState::Slash;
      type = TokenType::Slash;
      text.push_back(c);
    } else if (c == '=') {
      newState = DfaState::Assignment;
      type = TokenType::Assignment;
      text.push_back(c);
    } else if (c == ';') {
      newState = DfaState::SemiColon;
      type = TokenType::SemiColon;
      text.push_back(c);
    } else {
      newState = DfaState::Initial;
    }
    return newState;
  }

  std::vector<SimpleToken*> tokenize(const std::string& code) {
    tokens.resize(0);
    DfaState state = DfaState::Initial;
    char c;
    for (int i = 0; i < code.size(); ++i) {
      c = code[i];
      switch (state) {
      case DfaState::Initial:
        state = initToken(c);
        break;
      case DfaState::Id:
        if (isalnum(c)) {
          text.push_back(c);
        } else {
          state = initToken(c);
        }
        break;
      case DfaState::GT:
        if (c == '=') {
          state = DfaState::GE;
          text.push_back(c);
          token->setType(TokenType::GE);
        } else {
          state = initToken(c);
        }
        break;
      case DfaState::GE:
      case DfaState::Assignment:
      case DfaState::Plus:
      case DfaState::Minus:
      case DfaState::Star:
      case DfaState::Slash:
      case DfaState::SemiColon:
      case DfaState::LeftParen:
      case DfaState::RightParen:
        state = initToken(c);
        break;
      case DfaState::IntLiteral:
        if (isdigit(c)) {
          text.push_back(c);
        } else {
          state = initToken(c);
        }
        break;
      case DfaState::Id_int1:
        if (c == 'n') {
          state = DfaState::Id_int2;
          text.push_back(c);
        } else if (isalnum(c)) {
          state = DfaState::Id;
          text.push_back(c);
        } else {
          state = initToken(c);
        }
        break;
      case DfaState::Id_int2:
        if (c == 't') {
          state = DfaState::Id_int3;
          text.push_back(c);
        } else if (isalnum(c)) {
          state = DfaState::Id;
          text.push_back(c);
        } else {
          state = initToken(c);
        }
        break;
      case DfaState::Id_int3:
        if (isblank(c)) {
          token->setType(TokenType::Int);
          state = initToken(c);
        } else {
          state = DfaState::Id;
          text.push_back(c);
        }
        break;
      default:
        break;
      }
    }
    // 每个状态都是从上一个状态推断的，所以最后一个状态需要单独处理
    if (!text.empty()) {
      initToken(c);
      text = "";
    }
    return tokens;
  }

  void dump(const std::vector<SimpleToken*>& tokens) {
    std::cout << "text\ttype" << std::endl;
    for (auto token : tokens) {
      std::cout << token->getText() << std::endl;
    }
    std::cout << "-----------------" << std::endl;
  }
};

// int main(int argc, char const *argv[])
// {
//   SimpleLexer2* lexer = new SimpleLexer2();
//   std::vector<SimpleToken*> tokens;

//   std::string code = "int a = 45;";
//   std::cout << "code: " << code << std::endl;
//   tokens = lexer->tokenize(code);
//   lexer->dump(tokens);

//   code = "inta age = 45;";
//   std::cout << "code: " << code << std::endl;
//   tokens = lexer->tokenize(code);
//   lexer->dump(tokens);

//   code = "a > 45;";
//   std::cout << "code: " << code << std::endl;
//   tokens = lexer->tokenize(code);
//   lexer->dump(tokens);
//   return 0;
// }
