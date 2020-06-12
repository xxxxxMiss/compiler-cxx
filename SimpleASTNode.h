#if !defined(__SIMPLE_ASTNODE__)
#define __SIMPLE_ASTNODE__

#include "ASTNodeType.h"
#include <string>
#include <vector> 

class SimpleASTNode {
private:
  ASTNodeType type;
  std::string text;
  SimpleASTNode* parent;
  std::vector<SimpleASTNode*> children;

public:
  SimpleASTNode() {}
  SimpleASTNode(const ASTNodeType& _type, const std::string& _text) : type(_type), text(_text) {}
  void setType(const ASTNodeType& _type) {
    type = _type;
  }
  void setText(const std::string& _text) {
    text = _text;
  }
  ASTNodeType getType() {
    return type;
  }
  std::string getText() {
    return text;
  }
  SimpleASTNode* getParent() {
    return parent;
  }
  void addChild(SimpleASTNode* child) {
    children.push_back(child);
    child->parent = this;
  }
  std::vector<SimpleASTNode*> getChildren() {
    return children;
  }
};

#endif // MACRO
