let inpt = document.querySelector('input')

let numberBtns = document.querySelectorAll('.numberBtn')
let actionBtns = document.querySelectorAll('.actionBtn')
let calculateBtn = document.querySelector('.calculateBtn')
let errorText = document.querySelector('.error')

let num1 = "", num2 = "", operationType;

inpt.addEventListener('input', (e) => {
    let val = e.target.value;
    if (operationType) {
        operationType = !val.includes(operationType) ? null : operationType
    }
})

numberBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        inpt.value += e.target.innerText
        if (num1 && operationType) num2 += e.target.innerText
        else num1 += e.target.innerText
    })
})

actionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (!operationType && num1) {
            inpt.value += e.target.innerText
            operationType = e.target.innerText
        }
        else if (!num2) {
            inpt.value = inpt.value.substring(0, inpt.value.length - 1)
            inpt.value += e.target.innerText
            operationType = e.target.innerText
        }
    })
})

calculateBtn.addEventListener('click', () => {
    if (!num1 || !num2 || !operationType) return

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operationType) {
        case "+":
            inpt.value = num1 + num2
            break;
        case "-":
            inpt.value = num1 - num2
            break;
        default:
            errorText.classList.remove('hide')

    }
})