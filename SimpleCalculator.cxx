#include "./ASTNode.h"
#include "./SimpleLexer2.cxx"
#include <algorithm>

class SimpleASTNode : ASTNode {
private:
  SimpleASTNode* parent;
  std::vector<SimpleASTNode*> children;
  ASTNodeType nodeType;
  std::string text;
public:
  SimpleASTNode(ASTNodeType nodeType, std::string text) : nodeType(nodeType), text(text) {
  }
  SimpleASTNode* getParent() {
    return parent;
  }
  std::vector<SimpleASTNode*> getChildren() {
    return children;
  }
  std::string getText() {
    return text;
  }
  ASTNodeType getType() {
    return nodeType;
  }
  void addChild(SimpleASTNode* child) {
    children.push_back(child);
    child->parent = this;
  }
};

class SimpleCalculator {
private:
  /* data */
public:
  void evaluate(const std::string& code) {
    SimpleASTNode* tree = parse(code);
    try {
      dumpAST(tree, "");
      evaluate(tree, "");
    } catch(const std::exception& e) {
      std::cerr << e.what() << '\n';
    }
  }

  // 给你一颗AST，对这个AST求值(简化的表达式树求值)
  int evaluate(SimpleASTNode* node, const std::string indent) {
    int result = 0;
    std::vector<SimpleASTNode*> children;
    switch (node->getType()) {
    case ASTNodeType::Programm:
      for (SimpleASTNode* child : node->getChildren()) {
        result = evaluate(child, indent + "\t");
      }
      break;
    case ASTNodeType::Additive:
      children = node->getChildren();
      int left;
      left = evaluate(children[0], indent + "\t");
      int right;
      right = evaluate(children[1], indent + "\t");
      if (node->getText() == "+") {
        result = left + right;
      } else {
        result = left - right;
      }
      break;
    case ASTNodeType::Multiplicative:
      children = node->getChildren();
      left = evaluate(children[0], indent + "\t");
      right = evaluate(children[1], indent + "\t");
      if (node->getText() == "*") {
        result = left * right;
      } else {
        result = left / right;
      }
      break;
    case ASTNodeType::IntLiteral:
      result = stoi(node->getText());
      break;
    }
    std::cout << indent << " Result: " << result << std::endl;
    return result;
  }
  
  SimpleASTNode* parse(const std::string& code) {
    SimpleLexer2 *lexer = new SimpleLexer2();
    std::vector<SimpleToken*> tokens = lexer->tokenize(code);

    std::reverse(tokens.begin(), tokens.end());
    SimpleASTNode* rootNode = prog(tokens);
    return rootNode;
  }

  SimpleASTNode* prog(std::vector<SimpleToken*>& tokens) {
    SimpleASTNode* root = new SimpleASTNode(ASTNodeType::Programm, "Calculator");
    SimpleASTNode* node = additive(tokens);
    if (node) {
      root->addChild(node);
    }
    return root;
  }

  SimpleASTNode* intDeclare(std::vector<SimpleToken*>& tokens) {
    SimpleASTNode* node = nullptr;
    SimpleToken* token = tokens.back();
    if (token && token->getType() == TokenType::Int) {
      tokens.pop_back();
      if (tokens.back()->getType() == TokenType::Identifier) {
        token = tokens.back();
        tokens.pop_back();
        node = new SimpleASTNode(ASTNodeType::IntDeclaration, token->getText());
        token = tokens.back();
        if (token && token->getType() == TokenType::Assignment) {
          tokens.pop_back();
          SimpleASTNode *child = additive(tokens);
        }
      }
    }
    return node;
  }
  SimpleASTNode* additive(std::vector<SimpleToken*>& tokens) {
    SimpleASTNode* child1 = multiplicative(tokens);
    SimpleASTNode* node = child1;
    SimpleToken* token = tokens.back();
    if (child1 && token) {
      if (token->getType() == TokenType::Plus || token->getType() == TokenType::Minus) {
        tokens.pop_back();
        SimpleASTNode* child2 = additive(tokens);
        if (child2) {
          node = new SimpleASTNode(ASTNodeType::Additive, token->getText());
          node->addChild(child1);
          node->addChild(child2);
        } else {
          std::cerr << "Invalid additive expression, expecting the right part";
        }
      }
    }
    return node;
  }
  SimpleASTNode* multiplicative(std::vector<SimpleToken*>& tokens) {
    SimpleASTNode* child1 = primary(tokens);
    SimpleASTNode* node = child1;
    SimpleToken* token = tokens.back();
    if (child1 && token) {
      if (token->getType() == TokenType::Slash || token->getType() == TokenType::Star) {
        tokens.pop_back();
        SimpleASTNode* child2 = primary(tokens);
        if (child2) {
          node = new SimpleASTNode(ASTNodeType::Multiplicative, token->getText());
          node->addChild(child1);
          node->addChild(child2);
        } else {
          std::cerr << "Invalid multiplicative expression, expecting right part";
        }
      }
    }
    return node;
  }
  SimpleASTNode* primary(std::vector<SimpleToken*>& tokens) {
    SimpleToken* token = tokens.back();
    SimpleASTNode* node = nullptr;
    if (token) {
      if (token->getType() == TokenType::IntLiteral) {
        tokens.pop_back();
        node = new SimpleASTNode(ASTNodeType::IntLiteral, token->getText());
      } else if (token->getType() == TokenType::Identifier) {
        tokens.pop_back();
        node = new SimpleASTNode(ASTNodeType::Identifier, token->getText());
      } else if (token->getType() == TokenType::LeftParen) {
        tokens.pop_back();
        node = additive(tokens);
        if (node) {
          token = tokens.back();
          if (token && token->getType() == TokenType::RightParen) {
            tokens.pop_back();
          } else {
            std::cerr << "Expecting right parenthesis" << std::endl;
          }
        } else {
          std::cerr << "Expecting an additive expression in parenthesis" << std::endl;
        }
      }
    }
    return node;
  }
  void dumpAST(SimpleASTNode* node, const std::string indent) {}
};

int main(int argc, char const *argv[]) {
  SimpleCalculator* calculator = new SimpleCalculator();
  SimpleLexer2 *lexer = new SimpleLexer2();
  std::string code = "int a = b+3;";
  std::vector<SimpleToken*> tokens = lexer->tokenize(code);
  SimpleASTNode* node = calculator->intDeclare(tokens);
  calculator->dumpAST(node, "");

  code = "2 + 3*5";
  std::cout << "正确的 " << code << std::endl;
  calculator->evaluate(code);

  code = "2 + 3 + 4";
  std::cout << "结合性出现错误" << code << std::endl;
  calculator->evaluate(code);

  code = "2+";
  std::cout << "应该抛出语法错误" << code << std::endl;
  calculator->evaluate(code);
  return 0;
}
