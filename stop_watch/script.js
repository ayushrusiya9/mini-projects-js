let screen = document.querySelector(".timer")

let screenTimer
let seconds = 0
let mins = 0
let hours = 0
let startTimer = ()=>{
    screenTimer = setInterval(()=>{
        screen.innerHTML = `${hours} : ${mins} : ${seconds}`
        if(seconds == 59){
            mins = mins + 1
            seconds = 0
        }
        if(mins == 59){
            hours = hours + 1
            mins = 0
        }
        seconds = seconds + 1
    },1000)
}

let stopTimer = ()=>{
    clearInterval(screenTimer)
}
