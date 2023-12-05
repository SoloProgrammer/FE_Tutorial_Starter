import Products from '../../Week4-JS/Day4/JSON+DynamicRendering/products.json' assert {type: 'json'}

let errDiv = document.querySelector('.err')
let h1 = document.querySelector('h1')
let productsDiv = document.querySelector('.products')
let err = true;
// Fake api call to get products array from backed
function getProducts() {
    h1.innerText = "Loading..."
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(Products)
                console.log('data fetched..')
            }
            else rej(new Error("Some error occured plz try again!"))
        }, 3000);
    })
}

function printProducts(products) {
    products.forEach(p => {
        productsDiv.innerHTML += `<p>${p.title}</p>`
    });
}

document.querySelector('button').addEventListener('click', () => {
    errDiv.innerText = ""
    getProducts()
        .then(products => {
            printProducts(products)
            h1.innerText = ""
        })
        .catch(error => {
            h1.innerText = ""
            errDiv.innerHTML = `<p>${error.message}</p>`
            err = false
        })
})

// creating our custom promise
// let myPromise = new Promise((res, rej) => {
//     console.log("Hello inside promise")
//     setTimeout(() => {
//         rej("SOme Error occured!")
//     }, 2000);
// })

// console.log("Hello before then/catch")

// myPromise.then((value) => {
//     console.log(value + 10);
// }).catch(err => console.log(err))

// console.log("Hello after then/catch")


