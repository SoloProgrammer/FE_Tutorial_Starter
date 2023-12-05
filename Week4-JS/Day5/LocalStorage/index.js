// localStorage.setItem('phoneNo', JSON.stringify(9022345678))
// localStorage.setItem('myArr', JSON.stringify(["Pratham", "Berlin", "Manoj"]))
// let phoneNo = JSON.parse(localStorage.getItem('phoneNo'))
// let myArr = JSON.parse(localStorage.getItem('myArr'))
// // localStorage.removeItem('phoneNo')

// // localStorage.clear()
// console.log(phoneNo, myArr);


// MINI Project on Local storage
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

function Stringify(val) {
    return JSON.stringify(val)
}

function Parsify(val) {
    return JSON.parse(val)
}

function checkUserLoggedIn() {
    let isUserLoggedIn = Parsify(localStorage.getItem('isLoggedIn'))
    let user = Parsify(localStorage.getItem('user'))
    if (isUserLoggedIn) {
        h1.innerText = `Welcome ${user.name}!`
        btn.innerText = 'Logout'
    }
}

checkUserLoggedIn()

btn.addEventListener('click', (e) => {
    let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) 

    if (isLoggedIn) {
        h1.innerText = `Please Login to continue!`
        e.target.innerText = 'Login'
        localStorage.clear()
    }
    else {
        let user = { name: "pratham", email: "xyz@gmail.com" }
        h1.innerText = `Welcome ${user.name}!`
        e.target.innerText = 'Logout'
        localStorage.setItem('user', Stringify(user))
        localStorage.setItem('isLoggedIn', Stringify(true))
    }
})
