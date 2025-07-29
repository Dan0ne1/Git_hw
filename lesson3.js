"use strict";

// console.log("Hello Dina");
// //This part is a comment

// /*
// dksajlkdjasd;
// akdlkasd
// kjsldkjasd
// ksjadksajkdl
// */

// // var myFistVariable;
// // myFistVariable = "Hello World";

// // myFistVariable = 1;
// let myFistVariable = "Hello World";

// console.log("Hello World");

// // let a, b, c;
// let a = 1;
// let b = 2;
// let c = 3;

// let $, _;

// let a1$;

// let abc;
// let Abc;

// let my_first_variable;

// const myFirstConstant = "constant";

// const PORT = 3000;

// const PORTAL_ALERTS = "";

// //TODO: Data Types
// // number

// let num = 1;

// //string

// let str = "string";

// //boolean

// let bool = true;

// //bigInt

// const bigInt = 1234567890123456789012345678901234567890n;

// //null

// let nullValue = null;

// //undefined

// let undefinedValue = undefined;

// //symbol

// let symbol = Symbol("symbol");

// //object

// let obj = {};

//TODO: Convert into string;

// let num = 1; //'1'
// let bool = false; //'false'
// let nullValue = null; //'null'
// let undefinedValue = undefined; //'undefined'

// // num = String(num);
// num = "";
// const numDataType = typeof num;
// console.log(num);
// console.log(numDataType);

//TODO: into number;

// let value = "1";

// // value = Number(value);
// value = parseInt(value);
// value = parseFloat(value);
// console.log(value);
// console.log(typeof value);

// let value = "Alex";

// value = Number(value);
// console.log(value);
// console.log(typeof value);

// console.log(Number(""));

/*
  При преобразовании в число получится:
  undefined => NaN
  null => 0
  true => 1
  false => 0
  string => 0 (если строка пустая), число (если в строке только цифры), NaN если в строке есть НЕ цифры
  */

//TODO: into Boolean;

/*

  Falsy значения:
  - 0
  - ""
  - null 
  - undefined
  - NaN
  - false
  */

// console.log(Boolean("0"));

//TODO: Operators:

//1.
// let x = "123aaa";
// x = +x;
// console.log(x);
// console.log(typeof x);

//2
// let x = 1;
// let y = 2;
// console.log(x + y);

//3

// const result = "1" + 1;
// const result = 1 + 1 + "1";

// console.log(result);
// console.log(typeof result);

// console.log(1 - "1"); //Number(1) - Number('1') => 0

// console.log("6" / "2"); //Number(6) / Number('2') => 3

// console.log(2 - NaN); => NaN

// console.log("b" + "a" + +"a" + "a");

// const result = 9 % 2;
// console.log(result);

// const power = 2 ** 3;
// console.log(power);

//TODO: Operator =

// let a = 1 + 2 + 3;
// console.log(a);

// let value = 1;

// // value = value + 1;

// value += 1;
// value -= 1;
// value *= 1;
// value /= 1;

// console.log(value);

// let value = 1;
// console.log(value);
// value = value + 1 + value + 1;
// console.log(value);

let value = 1;

// value += 1;
// value++;
// ++value;
// console.log(value);

let result = 1 + 2 + 3 + ++value;
console.log(result);
console.log(value);
