#if !defined(__AST_NODE_TYPE__)
#define __AST_NODE_TYPE__

#include <unordered_map>
#include <string>

enum class ASTNodeType {
  Programm,           //程序入口，根节点

  IntDeclaration,     //整型变量声明
  ExpressionStmt,     //表达式语句，即表达式后面跟个分号
  AssignmentStmt,     //赋值语句

  Primary,            //基础表达式
  Multiplicative,     //乘法表达式
  Additive,           //加法表达式

  Identifier,         //标识符
  IntLiteral          //整型字面量
};

//  ASTNODE_TYPE_MAPPING 
std::unordered_map<ASTNodeType, std::string> astnode_mapping = {
  { ASTNodeType::Programm, "Programm" },
  { ASTNodeType::IntDeclaration, "IntDeclaration" },
  { ASTNodeType::ExpressionStmt, "ExpressionStmt" },
  { ASTNodeType::AssignmentStmt, "AssignmentStmt" },
  { ASTNodeType::Primary, "Primary" },
  { ASTNodeType::Multiplicative, "Multiplicative" },
  { ASTNodeType::Additive, "Additive" },
  { ASTNodeType::Identifier, "Identifier" },
  { ASTNodeType::IntLiteral, "IntLiteral" }
};

#endif // MACRO
