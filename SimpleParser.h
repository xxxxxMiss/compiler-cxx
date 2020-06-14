#if !defined(__SIMPLE_PARSER__)
#define __SIMPLE_PARSER__

#include "SimpleLexer.h"
#include "SimpleASTNode.h"
#include "TokenReader.h"
#include <algorithm>

class SimpleParser {
public:
  SimpleASTNode* parse(const std::string& script) {
    SimpleLexer *lexer = new SimpleLexer();
    TokenReader* tokens = lexer->tokenize(script);
    // lexer->dump(tokens);

    SimpleASTNode* tree = prog(tokens);
    dump(tree, "");
    return tree;
  }

  SimpleASTNode* prog(TokenReader* tokens) {
    SimpleASTNode* root = new SimpleASTNode(ASTNodeType::Programm, "pwc");
    while (tokens->peek()) {
      SimpleASTNode* child = intDeclare(tokens);
      if (!child) {
        child = expressionStatement(tokens);
      }
      if (!child) {
        child = assignmentStatement(tokens);
      }
      if (!child) {
        std::cerr << "unknow statement" << std::endl;
        break;
      } else {
        root->addChild(child);
      }
    }
    return root;
  }

  // 表达式后面跟个分号
  SimpleASTNode* expressionStatement(TokenReader* tokens) {
    int pos = tokens->getPosition();
    SimpleASTNode* node = additive(tokens);
    if (node) {
      SimpleToken* token = tokens->peek();
      if (token && token->getType() == TokenType::SemiColon) {
        tokens->read();
      } else {
        // backtrace
        node = nullptr;
        tokens->setPosition(pos);
      }
    }
    return node;
  }

  SimpleASTNode* additive(TokenReader* tokens) {
    SimpleASTNode* child1 = multiplicative(tokens);
    SimpleASTNode* node = child1;
    if (child1) {
      while (true) {
        SimpleToken* token = tokens->peek();
        if (token && (token->getType() == TokenType::Plus || token->getType() == TokenType::Minus)) {
          tokens->read();
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
  
  SimpleASTNode* multiplicative(TokenReader* tokens) {
    SimpleASTNode* child1 = primary(tokens);
    SimpleASTNode* node = child1;
    while (true) {
      SimpleToken* token = tokens->peek();
      if (token && (token->getType() == TokenType::Star || token->getType() == TokenType::Slash)) {
        tokens->read();
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

  SimpleASTNode* intDeclare(TokenReader* tokens) {
    SimpleToken* token = tokens->peek();
    SimpleASTNode* node = nullptr;
    if (token && token->getType() == TokenType::Int) {
      tokens->read();
      if (tokens->peek()->getType() == TokenType::Identifier) {
        tokens->read();
        /**
         *    int
         *    /
         *  a
         */
        node = new SimpleASTNode(ASTNodeType::IntDeclaration, token->getText());
        token = tokens->peek();
        if (token && token->getType() == TokenType::Assignment) {
          tokens->read();
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
        token = tokens->peek();
        if (token && token->getType() == TokenType::SemiColon) {
          tokens->read();
        } else {
          std::cerr << "Invalid int declaration, missing a semicolon" << std::endl; 
        }
      }
    }
    return node;
  }

  SimpleASTNode* assignmentStatement(TokenReader* tokens) {
    SimpleToken* token = tokens->peek();
    SimpleASTNode* node = nullptr;
    if (token && token->getType() == TokenType::Identifier) {
      tokens->read();
      // ast是 AssignmentStmt
      node = new SimpleASTNode(ASTNodeType::AssignmentStmt, token->getText());
      token = tokens->peek();
      if (token && token->getType() == TokenType::Assignment) {
        tokens->read();
        SimpleASTNode* child = additive(tokens);
        if (child) {
          node->addChild(child);
          token = tokens->peek();
          // 分号并没有创建一个ast
          if (token && token->getType() == TokenType::SemiColon) {
            tokens->read();
          } else {
            std::cerr << "Invalid expression, expecting a semicolon" << std::endl;
          }
        } else {
          std::cerr << "Invalid assignmentstatement, expecting an expression" << std::endl;
        }
      }
    } else { // backtrace
      node = nullptr;
      tokens->unread();
    }
    return node;
  }

  SimpleASTNode* primary(TokenReader* tokens) {
    SimpleToken* token = tokens->peek();
    SimpleASTNode* node = nullptr;
    if (token) {
      if (token->getType() == TokenType::IntLiteral) {
        tokens->read();
        node = new SimpleASTNode(ASTNodeType::IntLiteral, token->getText());
      } else if (token->getType() == TokenType::Identifier) {
        tokens->read();
        node = new SimpleASTNode(ASTNodeType::Identifier, token->getText());
      } else if (token->getType() == TokenType::LeftParen) {
        tokens->read();
        node = additive(tokens);
        if (node) {
          token = tokens->peek();
          if (token->getType() == TokenType::RightParen) {
            tokens->read();
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
    std::cout << indent + astnode_mapping[tree->getType()] << "  " << tree->getText() << std::endl;
    for (auto child : tree->getChildren()) {
      dump(child, indent + "\t");
    }
  }
};

#endif // __SIMPLE_PARSER__
