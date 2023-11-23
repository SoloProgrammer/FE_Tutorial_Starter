let startBtn = document.querySelector('.start')
let restartBtn = document.querySelector('.restart')
let countDiv = document.querySelector('.count')

let count = 0;
var timer;

function startInterval(){
    timer = setInterval(() => {
        count += 1
        countDiv.innerText = count
    }, 1000);
}

startBtn.addEventListener('click',(e)=>{
    let buttonVal = e.target.innerText
    if(buttonVal === 'Start'){
        // step 1
        startInterval()
        e.target.innerText = 'Pause'
    }
    else if(buttonVal === 'Pause'){
        // Step 2
        e.target.innerText = 'Resume'
        clearInterval(timer)
    }
    else if(buttonVal === 'Resume'){
        // Step 3
        e.target.innerText = 'Pause'
        startInterval()
    }


})