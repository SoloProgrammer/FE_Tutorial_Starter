let Box = document.getElementById('Box1')
let Div = document.getElementById('Div')
let inner = document.getElementById('innerDiv')

// ----------------How to change styles----------------

// Box.style.background = "red"
// Box.style.transform = 'rotate(45deg)'

// ----------------How to change InnerText/Html----------------

// Box.innerHTML = ""
// console.log(Box.innerHTML)
// Box.innerHTML += '<span>This is span added using JS</span>'

// removing/ appending and creating an html elm
// Div.removeChild(inner)

let createdDiv = document.createElement('div')
let createdSpan = document.createElement('span')
let createdPara = document.createElement('p')

createdDiv.appendChild(createdSpan)
createdDiv.appendChild(createdPara)

createdDiv.classList.add('box')

createdDiv.setAttribute('id', 'CreatedDiv1')

let body = document.getElementsByTagName('body')[0]

body.appendChild(createdDiv)
console.log("Body", body);
createdSpan.innerText = "This is created span"
createdPara.innerText = "This is created para"

// createElement
// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

let boxsBYClassName = document.getElementsByClassName('box')
console.log("boxsBYClassName", boxsBYClassName)

let boxByQuery = document.querySelector('.box')
console.log(boxByQuery)

let boxsByQueryAll = document.querySelectorAll('.box')
console.log(boxsByQueryAll)

boxsByQueryAll.forEach(box => {
    console.log("box", box);
});



