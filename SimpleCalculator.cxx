#include "./ASTNode.h"
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
  SimpleCalculator(/* args */);
  ~SimpleCalculator();
};

int main(int argc, char const *argv[])
{
  /* code */
  return 0;
}
