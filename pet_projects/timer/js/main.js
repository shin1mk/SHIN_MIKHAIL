// timer field поля
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')


// buttons 
const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')


//listeners
startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

//pause button 
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

//stop button
stopButton.addEventListener('click', () => {
    clearInterval(interval)
    clearFields()
})


function clearFields() {
    hour = 00
    minute = 00
    second = 00
    millisecond = 00
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondElement.textContent = '00'
    millisecondElement.textContent = '00'
}

//var 
let hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00,
    interval 

function  startTimer() {
    millisecond++

    //milliseconds
    if(millisecond < 9) {
        millisecondElement.innerText = '0' + millisecond
    }
    if(millisecond > 9) {
        millisecondElement.innerText = millisecond
    }
    if(millisecond > 99) {
        second++
        secondElement.innerText = '0' + second
        millisecond = 0
        millisecondElement.innerText = '0' + millisecond
    }

    //seconds
    if(second < 9) {
        secondElement.innerText = '0' + second
    }
    if(second > 9) {
        secondElement.innerText = second
    }
    if(second > 59) {
        minute++
        minuteElement.innerText = '0' + minute
        second = 0
        secondElement.innerText = '0' + second
    }

    //minutes
    if(minute > 9) {
        minuteElement.innerText = minute
    }

    //hours
    if(hour > 9) {
        minuteElement.innerText = hour
    }
}
