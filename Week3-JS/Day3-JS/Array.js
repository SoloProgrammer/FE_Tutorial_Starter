console.log("Array.js is connected..");

let arr = [1, 2, 3, 4, 5]

// console.log(arr);

// Array accessing - indexing

// let secondELm = arr[2]
// console.log(secondELm);

// Array methods
// forEach, forof, forin, map, filter, reduce, push, pop, shift, unshift, concat, flat, slice, splice, join, reverse


// break - cannot use break keyword!
// arr.forEach((val, index, khudArr) => {
//     console.log(val, index, khudArr);
// })
// for(let i in arr){
//     console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(arr[i]);
// }

// Imp array methods  - map, filter, reduce!

// map
let newDoubledArr = arr.map((item, index, khudarr) => item * 2)
// console.log(newDoubledArr);

// filter
let filteredArr = arr.filter((item) => {
    return item > 3
})

console.log(filteredArr);

// let personArr = [
//     {
//         name: "Xyz",
//         id: 1,
//     },
//     {
//         name: "Xyz",
//         id: 2,
//     }, {
//         name: "Xyz",
//         id: 3,
//     }, {
//         name: "Xyz",
//         id: 4,
//     },
// ]

// let filteredPersonArr = personArr.filter(person =>{
//     if(person.id > 2) return person
// })

// console.log(filteredPersonArr);

arr = [1, 2, 3, 4, 5]
arr.push(10)
console.log(arr.pop())

arr.shift()
arr.unshift(1)

let nestedArr = [1,2,3,[2,3,4,[4,5,6]]]

let flattenedArr = nestedArr.flat(2);
console.log(flattenedArr);

let joinArr = arr.concat(flattenedArr)

console.log(arr, nestedArr);
console.log("Join arr", joinArr);

let commaSeperatedStringElms = arr.join(',')
console.log(commaSeperatedStringElms.split(','));


