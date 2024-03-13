let timer;
let minutes = 0;
let seconds = 10;
let isRunning = false;


document.getElementById("startTimerBtn").addEventListener('click', startTimer)
document.getElementById("stopTimerBtn").addEventListener('click', stopTimer)
document.getElementById("resetTimerBtn").addEventListener('click', resetTimer)
const display = document.getElementById("display");

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        stopTimer();
        alert("Pomodoro completo! E' tempo di una pausa di 5 minuti.");
        minutes = 5;
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    display.textContent = padZero(minutes) + ":" + padZero(seconds);
}

function padZero(value) {
    return value < 10 ? '0' + value : value;
}
