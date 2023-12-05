import Products from '../../Week4-JS/Day4/JSON+DynamicRendering/products.json' assert {type: 'json'}


function promise1() {
    let err = false
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


function promise2() {
    let err = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(2)
                console.log('data fetched..')
            }
            else rej(new Error("Some error occured in promise2 plz try again!"))
        }, 1000);
    })
}

function promise3() {
    let err = false
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(3)
                console.log('data fetched..')
            }
            else rej(new Error("Some error occured in promise3 plz try again!"))
        }, 1000);
    })
}

console.log("Outside function")

async function callPromises() {

    try {
        console.log("Inside callPromises function")
        let promise1Data = await promise1()
        let promise2Data = await promise2()
        let promise3Data = await promise3()
        console.log(promise1Data, promise2Data, promise3Data)
        console.log("after we get resolved promise1 data")
        return "My data"

    } catch (error) {
        console.log("Error", error.message)
    }
}

callPromises()

console.log("after function has been called")



