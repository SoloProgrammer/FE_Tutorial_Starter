console.log("External JS file is linked..");

// Variables

// var myVar;
// let myVal;
// myVal = 10;
// myVal = 20;
// const Pi = 3.14;
// console.log(Pi, "myVal - ", myVal);

// Scopes

// if (true) {
//     console.log(a)
//     var a = 10;
// }

// let shadowVar = 20;
// function myFunc() {
//     shadowVar = 200;
//     console.log(shadowVar);
//     console.log("Before initializing", b)
//     var b = 10
//     function nested() {
//         console.log("Inside nested", b);
//         var c = 10
//     }
//     console.log("After initializing", b)
//     nested()
//     // console.log("After calling nested", c);
// }

// myFunc()
// console.log("Outside myFunc", shadowVar)
// console.log("Outside ", b)

// DataTypes
// 1. Primitive

// String
let a = "Pratham"
console.log(typeof a);
let b;
b = a
b = "Updated"
console.log(b, a);

// Boolean

let isMale = true
console.log(typeof isMale);

// Number

let num = 10
console.log(typeof num);

// BigInt

let badaNum = 999999999999999999999999999n
console.log(typeof badaNum);

// Undefined
let myVal;
console.log(typeof myVal);

// NUll
// Undefined
myVal = null;
console.log(typeof myVal);

// 2 Non-Primitive

// Object

let obj = {
    name: "Pratham",
    age: 24
}

console.log(typeof obj);

let objCopy;

objCopy = obj;

objCopy.name = "Updated"

console.log("Object copy is:", objCopy);
console.log("Original Objectis  :", obj);

// Array

let arr = [1, 2, 3, "pratham"]
console.log(arr);

let arr2 = arr;
arr2[3] = 4
console.log("Array2 is,", arr2);
console.log("Ori Array is,", arr);

