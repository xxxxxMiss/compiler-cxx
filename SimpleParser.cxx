#include "SimpleLexer.h"
#include "SimpleASTNode.h"
#include <algorithm>

class SimpleParser {
public:
  int evaluate(SimpleASTNode* tree) {
    return 0;
  }

  SimpleASTNode* parse(const std::string& script) {
    SimpleLexer *lexer = new SimpleLexer();
    std::vector<SimpleToken*> tokens = lexer->tokenize(script);
    lexer->dump(tokens);

    std::reverse(tokens.begin(), tokens.end());
    SimpleASTNode* tree = prog(tokens);
    dump(tree, "");
    return tree;
  }

  SimpleASTNode* prog(std::vector<SimpleToken*> tokens) {
    SimpleASTNode* root = new SimpleASTNode(ASTNodeType::Programm, "pwc");
    while (tokens.back()) {
      SimpleASTNode* node = intDeclare(tokens);
      if (!node) {
        node = expressionStatement(tokens);
      }
      if (!node) {
        node = assignmentStatement(tokens);
      }
      if (!node) {
        std::cerr << "unknow statement" << std::endl;
      } else {
        root->addChild(node);
      }
    }
    return root;
  }

  SimpleASTNode* expressionStatement(std::vector<SimpleToken*> tokens) {
    SimpleASTNode* node = additive(tokens);
    if (node) {
      SimpleToken* token = tokens.back();
      if (token && token->getType() == TokenType::SemiColon) {
        tokens.pop_back();
      } else {
        // backtrace
        node = nullptr;
      }
    }
    return node;
  }

  SimpleASTNode* additive(std::vector<SimpleToken*> tokens) {
    SimpleASTNode* child1 = multiplicative(tokens);
    SimpleASTNode* node = child1;
    if (child1) {
      while (true) {
        SimpleToken* token = tokens.back();
        if (token && (token->getType() == TokenType::Plus || token->getType() == TokenType::Minus)) {
          tokens.pop_back();
          SimpleASTNode* child2 = multiplicative(tokens);
          if (child2) {
            node = new SimpleASTNode(ASTNodeType::Additive, token->getText());
            node->addChild(child1);
            node->addChild(child2);
            child1 = node;
          } else {
            std::cerr << "Invalid additive expression, expecting the right part" << std::endl;
          }
        } else {
          break;
        }
      }
    }
    return node;
  }
  
  SimpleASTNode* multiplicative(std::vector<SimpleToken*> tokens) {
    SimpleASTNode* child1 = primary(tokens);
    SimpleASTNode* node = child1;
    while (true) {
      SimpleToken* token = tokens.back();
      if (token && (token->getType() == TokenType::Star || token->getType() == TokenType::Slash)) {
        tokens.pop_back();
        SimpleASTNode* child2 = primary(tokens);
        if (child2) {
          node = new SimpleASTNode(ASTNodeType::Multiplicative, token->getText());
          node->addChild(child1);
          node->addChild(child2);
          child1 = node;
        } else {
          std::cerr << "invalid muliplicative expression, expecting the right part" << std::endl;
        }
      } else {
        break;
      }
    }
    return node;
  }

  SimpleASTNode* intDeclare(std::vector<SimpleToken*> tokens) {
    SimpleToken* token = tokens.back();
    SimpleASTNode* node = nullptr;
    if (token && token->getType() == TokenType::Int) {
      tokens.pop_back();
      if (tokens.back()->getType() == TokenType::Identifier) {
        tokens.pop_back();
        /**
         *    int
         *    /
         *  a
         */
        node = new SimpleASTNode(ASTNodeType::IntDeclaration, token->getText());
        token = tokens.back();
        if (token && token->getType() == TokenType::Assignment) {
          tokens.pop_back();
          SimpleASTNode* child = additive(tokens);
          if (child) {
            node->addChild(child);
          } else {
            std::cerr << "Invalid variable init, expecting a expression" << std::endl;
          }
        }
      } else {
        std::cerr << "variable name expected" << std::endl;
      }
      if (node) {
        token = tokens.back();
        if (token && token->getType() == TokenType::SemiColon) {
          tokens.pop_back();
        } else {
          std::cerr << "Invalid int declaration, missing a semicolon" << std::endl; 
        }
      }
    }
    return node;
  }

  SimpleASTNode* assignmentStatement(std::vector<SimpleToken*> tokens) {
    SimpleToken* token = tokens.back();
    SimpleASTNode* node = nullptr;
    if (token && token->getType() == TokenType::Identifier) {
      tokens.pop_back();
      // ast是 AssignmentStmt
      node = new SimpleASTNode(ASTNodeType::AssignmentStmt, token->getText());
      token = tokens.back();
      if (token && token->getType() == TokenType::Assignment) {
        tokens.pop_back();
        SimpleASTNode* child = additive(tokens);
        if (child) {
          node->addChild(child);
          token = tokens.back();
          // 分号并没有创建一个ast
          if (token && token->getType() == TokenType::SemiColon) {
            tokens.pop_back();
          } else {
            std::cerr << "Invalid expression, expecting a semicolon" << std::endl;
          }
        } else {
          std::cerr << "Invalid assignmentstatement, expecting an expression" << std::endl;
        }
      }
    } else { // backtrace
      node = nullptr;
      tokens.push_back(token);
    }
    return node;
  }

  SimpleASTNode* primary(std::vector<SimpleToken*> tokens) {
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
          if (token->getType() == TokenType::RightParen) {
            tokens.pop_back();
          } else {
            std::cerr << "expecting right parenthesis" << std::endl;
          }
        } else {
          std::cerr << "expecting a additive expression in parenthesis" << std::endl;
        }
      }
    }
    return node;
  }
  void dump(SimpleASTNode* tree, std::string indent) {
    std::cout << tree->getText() << std::endl;
    for (auto child : tree->getChildren()) {
      dump(child, indent + "\t");
    }
  }
};

int main(int argc, char const *argv[]) {
  SimpleParser* parser = new SimpleParser();

  std::string code = "int a = 1;";
  parser->parse(code);
  /* code */
  return 0;
}
