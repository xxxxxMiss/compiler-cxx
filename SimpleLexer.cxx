#include <iostream>
#include <vector>
#include <cstdlib>
#include <string>

using namespace std;

enum TYPE {
  IntLiteral, // 0
  GE,         // 1
  GT,         // 2
  Identifier, // 3
  Id_int1,
  Id_int2,
  Id_int3,
  Int,
  Assignment,
  Semicon
};

class SimpleLexer {
private:
  vector<pair<int, string>> tokens;
  string text;
  int type;

  void next_state(const string &code, int &i, const int &t) {
    bool is_break = false;
    for (int k = i + 1; k < code.size(); ++k) {
      char c = code[k];
      switch (t) {
      case TYPE::Id_int1:
        if (c == 'n') {
          type = TYPE::Id_int2;
          text.push_back(c);
          ++i;
        } else if (isalnum(c)) {
          type = TYPE::Identifier;
          text.push_back(c);
          ++i;
        } else {
          is_break = true;
        }
        break;
      case TYPE::Id_int2:
        if (c == 't') {
          type = TYPE::Id_int3;
          text.push_back(c);
          ++i;
        } else if (isalnum(c)) {
          type = TYPE::Identifier;
          text.push_back(c);
          ++i;
        } else {
          is_break = true;
        }
        break;
      case TYPE::Id_int3:
        if (isblank(c)) {
          type = TYPE::Int;
          text.push_back(c);
          ++i;
          is_break = true;
        } else {
          type = TYPE::Identifier;
          text.push_back(c);
          ++i;
        }
      case TYPE::IntLiteral:
        if (isdigit(c)) {
          text.push_back(c);
          ++i;
        } else {
          is_break = true;
        }
        break;
      case TYPE::GT:
        if (c == '=') { type = TYPE::GE;
          text.push_back(c);
          ++i;
        } else {
          is_break = true;
        }
        break;
      case TYPE::GE:
        is_break = true;
        break;
      case TYPE::Identifier:
        if (isalnum(c)) {
          text.push_back(c);
          ++i;
        } else {
          is_break = true;
        }
        break;
      case TYPE::Semicon:
        is_break = true;
        break;
      }
      if (is_break) {
        tokens.push_back({type, text});
        text = "";
        type = 0;
        break;
      }
    }
  }

public:
  SimpleLexer(const string &code) {
    // age >= 45
    for (int i = 0; i < code.size(); ++i) {
      char c = code[i];
      if (isalpha(c)) {
        text.push_back(c);
        if (c == 'i') {
          type = TYPE::Id_int1;
        } else {
          type = TYPE::Identifier;
        }
        next_state(code, i, type);
      } else if (isdigit(c)) {
        text.push_back(c);
        type = TYPE::IntLiteral;
        next_state(code, i, type);
      } else if (c == '>') {
        text.push_back(c);
        type = TYPE::GT;
        next_state(code, i, type);
      } else if (c == ';' && !text.empty()) {
        tokens.push_back({type, text});
      } else if (c == '=') {
        text.push_back(c);
        type = TYPE::Assignment;
        tokens.push_back({type, text});
        text = "";
        type = 0;
      }
    }
  }
  void dump() {
    for (const auto &p : tokens) {
      cout << "type: " << p.first << " text: " << p.second << "\n"
           << endl;
    }
  }
};
