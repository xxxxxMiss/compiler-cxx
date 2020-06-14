#include <iostream>
#include <string>
#include "SimpleParser.h"

class SimpleScript {
private:
  std::unordered_map<std::string, int> variables;
public:
  int evaluate(SimpleASTNode* node, std::string indent) {
    int result = 0;
    std::vector<SimpleASTNode*> children;
    std::string varName;
    switch (node->getType()) {
    case ASTNodeType::Programm:
      for (auto child : node->getChildren()) {
        result = evaluate(child, indent + "\t");
      }
      break;
    case ASTNodeType::Additive:
      children = node->getChildren();
      int value1, value2;
      value1 = evaluate(children[0], indent + "\t");
      value2 = evaluate(children[1], indent + "\t");
      if (node->getText() == "+") {
        result = value1 + value2;
      } else {
        result = value1 - value2;
      }
      break;
    case ASTNodeType::Multiplicative:
      children = node->getChildren();
      value1 = evaluate(children[0], indent + "\t");
      value2 = evaluate(children[1], indent + "\t");
      if (node->getText() == "*") {
        result = value1 * value2;
      } else {
        result = value1 / value2;
      }
      break;
    case ASTNodeType::IntLiteral:
      result = stoi(node->getText());
      break;
    case ASTNodeType::IntDeclaration:
      varName = node->getText();
      int varValue;
      if (node->getChildren().size() > 0) {
        varValue = evaluate(node->getChildren()[0], indent + "\t");
      }
      variables[varName] = varValue;
      break;
    case ASTNodeType::Identifier:
      varName = node->getText();
      if (variables.find(varName) != variables.end()) {
        result = variables[varName];
      } else {
        std::cerr << "unknow variable name: " << varName << std::endl;
      }
      break;
    case ASTNodeType::AssignmentStmt:
      varName = node->getText();
      if (variables.find(varName) == variables.end()) {
        std::cerr << "unknow variable name: " << varName << std::endl;
      }
      break;
    default:
      break;
    }
    return result;
  }
};

int main(int argc, char const *argv[]) {
  std::string text;
  SimpleParser* parser = new SimpleParser();
  SimpleScript* script = new SimpleScript();
  while (std::getline(std::cin, text)) {
    if (text.back() == ';') {
      std::cout << "text: " << text << std::endl;
      SimpleASTNode* tree =  parser->parse(text);
      int value = script->evaluate(tree, "");
      std::cout << "value: " << value << std::endl;
    }
  }
  return 0;
}
