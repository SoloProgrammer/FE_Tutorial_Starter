let inpt = document.querySelector('.inpt')
let numBtns = document.querySelectorAll('.numBtn')
let actionBtns = document.querySelectorAll('.actionBtn')
let calculateBtn = document.querySelector('.calculateBtn')
let clrBtn = document.querySelector('.clrBtn')

let num1 = "", num2 = "", operationType;

const updateInptValue = (newVal) => inpt.value += newVal

numBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let buttonValue = e.target.innerText
        if (num1 && operationType) num2 += buttonValue
        else num1 += buttonValue
        updateInptValue(buttonValue)
    })
})

actionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let buttonValue = e.target.innerText
        if (num1 && num2 && operationType) return

        if (!operationType) updateInptValue(buttonValue)
        else {
            let inptValue = inpt.value
            let inptLen = inptValue.length
            let subStrInpt = inptValue.substring(0, inptLen - 1)
            inpt.value = subStrInpt
            updateInptValue(buttonValue)
        }
        operationType = buttonValue
    })
})

calculateBtn.addEventListener('click', () => {
    if (!num1 || !num2 || !operationType) return

    // Type Conversion
    num1 = parseInt(num1)
    num2 = parseInt(num2)

    let result;
    switch (operationType) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "/":
            result = num1 / num2
            break;
        case "x":
            result = num1 * num2
            break;
        default:
            break;
    }
    inpt.value = result
})

// Logic to clear calculator

clrBtn.addEventListener('click', () => {
    inpt.value = ""
    num1 = "", num2 = "", operationType = null
})