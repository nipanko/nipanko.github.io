+++
title = 'Lexical'
date = 2024-03-09T14:42:47+05:30
draft = false
+++

Rough Idea
```C++
HLL -> Lexical Analysis (stream of tokens) -> Syntax Analysis (parse tree) -> Semantic analysis (Parse tree (semantically verified))-> Intermidiate code generation (Three address code) -> Code optimization -> Target code generation -> Assembler

During all this process all the modules will take support form {[SYMBOL TABLE MANAGER]}
and talk with the {[ERROR HANDLER]}


```

A lexical(relating to word) analyzer is ==a part of a compiler that breaks input into meaningful units==.
Basic working
```C++
Example > x=a+b*c;
			||   ignore comments and convert the program(stream of lexims) into stream                    of tokens
		id=id+id*id
			||
		SYNTAX ANALYZER (it will take all the tokens one by one and Context free                    ||            grammmer is generated)
		PARSE TREE IS GENERATED
			|| 
		Semantic Analyser (Parse tree is passed to it which will check the validity of               ||        the parse tree)	
		Intermediate Code Generator (ICG) (most popular is three address code)
			||       Reduce(convert) to three address code (TILL THIS IT WAS PLATFORM                         INDEPENDENT)
		CODE OPTIMIZER (Reduce more number of work if possible)
			||
		Target Code Generator (Main functionality is to write the code which assembler                                  can understand)


TILL ICG (Intermediate Code Generator) -> everything is front end and rest is backend

In practical implementation we dont need many modules most of the will be joined and done inside SYNTAX ANALYZER (heart of compiler). 





The last two phase(CODE OPTIMIZER,TARGET CODE GENERATOR) are dependent on the platform, rest is same for all

```

# Tools for Implementing a Compiler
- For lexical analysis -> lex is a tool available in Linux 
- For Syntax analyzer -> yacc 

Project for compiler tool is used lance (provides front end) we need to code backend on our own.