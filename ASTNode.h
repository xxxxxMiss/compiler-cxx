#include <vector>
#include <string>
#include "./ASTNodeType.h"

class ASTNode {
public:
  ASTNode getParent();
  std::vector<ASTNode> getChildren();
  ASTNodeType getType();
  std::string getText();
};