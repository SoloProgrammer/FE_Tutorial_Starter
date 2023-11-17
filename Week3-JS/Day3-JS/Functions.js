console.log("Functions js file is connected..")

// Types of function 
// 1. Normal

function myFunc() {
    console.log("My function is called");
    // statements
    // return statement
    return true
}
// 1. Normal

// let myArrowFunc = () => { // Function Expression
//     // statements
//     // return statement
// }

// // Anonymous function

// let myAnonymousFunc = function () {
//     // statements
//     // return statement
// }

// function calAvg(val1, val2, val3) {
//     return (val1 + val2 + val3) / 3
// }

// let calAvgWithArrow = (val1, val2, val3) => Math.round((val1 + val2 + val3) / 3)

// console.log("Average of 100, 200, 400 is: ", calAvgWithArrow(10, 100, 200))
// console.log("Average of 100, 200, 400 is: ", calAvgWithArrow(200, 300, 1000))
// console.log("Average of 100, 200, 400 is: ", calAvgWithArrow(10, 50, 40))


// function hello() {
//     console.log("Hey Hello");
// }

// Callback function

// function me(callback) {
//     console.log("This is me");
//     callback("Pratham Shinde")
// }

// function sayHello(name) {
//     console.log("hello Myself ", name);
// }

// me(sayHello)

// function plusTen(num) {
//     return num + 10
// }

// function addTwoNum(a, b) {
//     let c = a + b
//     c = plusTen(c)
//     return c;
// }

// function subTwoNum(a, b) {
//     let c = a - b
//     c = plusTen(c)
//     return c;
// }

// console.log(addTwoNum(10, 20, plusTen))
// console.log(subTwoNum(100, 20, plusTen))


// function fillAddress(callback) {
//     console.log("Address filled successfully!");
//     callback(showOrderDetail)
// }
// function moveToPayment(callback) {
//     console.log("Payment done");
//     let oID = 1234
//     callback(oID)
// }
// function showOrderDetail(orderID) {
//     console.log("Order details with Id" + orderID + "is here");
// }

// function BuyNow() {
//     fillAddress(moveToPayment)
// }

// BuyNow()

// HOF

// function calDiameter(r) {
//     return 2 * r
// }
// function calArea(r) {
//     return 2 * Math.PI * r
// }
// function calCurCum(r) {
//     return 2 * Math.PI * (r ** 2)
// }

// function diameterOfCircle(r, logic) {
//     console.log("diameterOfCircle: ", logic(r))
// }
// function areaOfCircle(r, logic) {
//     console.log("area Of Circle: ", logic(r))
// }
// function circumferenceOfCircle(r, logic) {
//     console.log("circumferenceOfCircle: ", logic(r))
// }
// diameterOfCircle(20, calDiameter)
// areaOfCircle(20, calArea)
// circumferenceOfCircle(20, calCurCum)

// function cal() {
//     let radius = 10
//     let dia = calDiameter(radius)
// }

// Create a function that takes a num as a parameter and prints the table of that number

function printTable(num) {
    // Logic
    for (let i = 1; i <= 10; i++) {
        console.log(num + "x" + i + "=" + num * i);
    }
}
printTable(5)
printTable(10)

// Create a calculator function that takes 3 params - num1, num2, operandType(add/sub/mul/div/ETC) and using switch statement return the appropriate calculation result! 

function calculator(num1, num2, operandType) {
    // Logic

    let c;
    switch (operandType) {
        case "+":
            c = num1 + num2
            break;
        case "-":
            c = num1 - num2
            break;
        case "*":
            c = num1 * num2
            break;
        case "/":
            c = num1 / num2
            break;
        default:
            // alert("Please send the operantType from one of these (+, -, *, /)")
            c = "Please send the operantType from one of these (+, -, *, /)"
            break;
    }
    return c;
}
console.log(calculator(12, 20, "+"))
console.log(calculator(120, 20, "-"))
console.log(calculator(200, 20, "/"))
console.log(calculator(2, 20, "*"))
console.log(calculator(2, 20, "9"))
