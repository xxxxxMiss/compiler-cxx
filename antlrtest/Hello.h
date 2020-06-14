
// Generated from antlrtest/Hello.g4 by ANTLR 4.7.2

#pragma once

#include "antlr4-runtime/antlr4-runtime.h"



class  Hello : public antlr4::Lexer {
public:
  enum {
    If = 1, Int = 2, IntLiteral = 3, StringLiteral = 4, AssignmentOP = 5, 
    RelationalOP = 6, Star = 7, Plus = 8, Sharp = 9, SemiColon = 10, Dot = 11, 
    Comm = 12, LeftBracket = 13, RightBracket = 14, LeftBrace = 15, RightBrace = 16, 
    LeftParen = 17, RightParen = 18, Id = 19, Whitespace = 20, Newline = 21
  };

  Hello(antlr4::CharStream *input);
  ~Hello();

  virtual std::string getGrammarFileName() const override;
  virtual const std::vector<std::string>& getRuleNames() const override;

  virtual const std::vector<std::string>& getChannelNames() const override;
  virtual const std::vector<std::string>& getModeNames() const override;
  virtual const std::vector<std::string>& getTokenNames() const override; // deprecated, use vocabulary instead
  virtual antlr4::dfa::Vocabulary& getVocabulary() const override;

  virtual const std::vector<uint16_t> getSerializedATN() const override;
  virtual const antlr4::atn::ATN& getATN() const override;

private:
  static std::vector<antlr4::dfa::DFA> _decisionToDFA;
  static antlr4::atn::PredictionContextCache _sharedContextCache;
  static std::vector<std::string> _ruleNames;
  static std::vector<std::string> _tokenNames;
  static std::vector<std::string> _channelNames;
  static std::vector<std::string> _modeNames;

  static std::vector<std::string> _literalNames;
  static std::vector<std::string> _symbolicNames;
  static antlr4::dfa::Vocabulary _vocabulary;
  static antlr4::atn::ATN _atn;
  static std::vector<uint16_t> _serializedATN;


  // Individual action functions triggered by action() above.

  // Individual semantic predicate functions triggered by sempred() above.

  struct Initializer {
    Initializer();
  };
  static Initializer _init;
};

