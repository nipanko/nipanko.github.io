+++
title = 'Hello'
date = 2024-03-09T14:41:35+05:30
draft = false
+++


# Rules of Rounding off
1. If the digit to be dropped is smaller than 5, then the preceding digit is left unchanged. eg: 2.4341257 = 2.4341 (need only four places) since 5th place is 2 which is smaller than 5 so it remained unchanged.
2. If the digit to be dropped is greater than 5, then the preceding digit is increased by 1. eg : 2.4354785 = 2.4355 (need four place only) since 5th place is 7 which is greater than 5 so the previous value is increased by 1
3. If the digit to be dropped is 5 followed by non-zero digits, then the preceding digit is increased by 1. eg: 15.284351 = 15.2844 (since there is 5 in fifth place and there is 1 after 5 which is a non zero number so the preceding digit is increased by 1)
4. If the digit to be dropped is 5 then the preceding digit is left unchanged if it is even. eg: 21.23465 = 21.2346 (till 4th place only) (since there is no nonzero digit after 5 . and the previous digit of 5 is an even number then it remains  unchanged)
5. If the digit to be dropped is 5 then the preceding digit is increased by 1 . if it is odd. eg: 134.20315 = 134.2032 (since 1 is odd so increased by 1)


# Transcendental Equations
Equations of the type f(x) = 0 can be either algebraic or transcendental
The equation f(x) = 0 is an algebraic if f(x) is an algebraic polynomial. eg: x^2 -4x+2=0
x^3 = 8

if f(x) contains functions like trigonometry logarithm exponential etc then f(x) = 0 is called a transcendental Equation 
ex : log(x-1) =0 ,e^5x = 3

In general an equation is solved by factorization but in many cases the method of factorization fails. In such cases numerical methods are used various methods to solve f(x) = 0 are

1. Bisection Method or Bolzano Method 
2. Regula-Falsi Method or False-Position Method 
3. Secant Method 
4. Newton-Raphson Method or Newton's Iteration Method 
5. Birge-Vieta Method 
6. Lin-Bairstow's Method

## Bisection Method (Bolzano Method)
let f(x) =0 be the given equation
Suppose, f(0) = -ve ,  f(1) = -ve , f(2) = +ve
f(1) and f(2) one is -ve and one is +ve the root lies between 1.5 and 2

First approximation 
x1 = ()
