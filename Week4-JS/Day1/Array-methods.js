// Slice, Splice, join, reverse, reduce

console.log("This file is connected");

let arr = [1, 2, 3, 4, 5, 6, 7]

// para - ----------parameter----------

let slicedArr = arr.slice(2, 5) // first para is start index, 2nd para is end index 
console.log(slicedArr, arr)

let splicedArr = arr.splice(2, 2) // first para is start index, 2nd para is count of items to be delete
console.log(splicedArr, arr);

// reduce function

arr = [1, 2, 3, 4, 5, 10, 100, 34, 46]

let sum = arr.reduce((accum, val, index, origArr) => {
    accum = accum + val
    return accum;
}, 0)
console.log("Sum of arr: ", sum)

console.log("Filtered arr by using filter arr method: ", arr.filter(val => val > 2))

// Task 1
console.log("Arr filtered with only even number of values:  ", arr.reduce((acc, val) => {
    if (val % 2 === 0) acc.push(val)
    return acc;
}, []))

// Task 2
const getFullNameObj = (fullName) => {
    let strArr = fullName.split(" ")
    let fname = strArr[0]
    let lname = strArr[1]
    return { fname, lname }
}
console.log(getFullNameObj("Pratham Shinde"))
// output :- { fname:"Pratham", lname:"Shinde" }