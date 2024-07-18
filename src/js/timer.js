const pomodoroSelect = document.querySelector('#pomodoro');
const shortBreakSelect = document.querySelector('#short-break');
const longBreakSelect = document.querySelector('#long-break');
const startButton = document.querySelector('#start');
const timerParagraph = document.querySelector('#counter');

let selectedTimer = "pomodoro";

function changeSelectClasses(timer) {
    if (timer === 'pomodoro') {
        pomodoroSelect.classList.add("active-button");
        shortBreakSelect.classList.remove("active-button");
        longBreakSelect.classList.remove("active-button");
    } else if (timer === 'short-break') {
        pomodoroSelect.classList.remove("active-button");
        shortBreakSelect.classList.add("active-button");
        longBreakSelect.classList.remove("active-button");
    } else if (timer === 'long-break') {
        pomodoroSelect.classList.remove("active-button");
        shortBreakSelect.classList.remove("active-button");
        longBreakSelect.classList.add("active-button");
    }
}

function getTimerValue(timer) {
    const timerValues = {
        'pomodoro': 25 * 60,
        'short-break': 5 * 60,
        'long-break': 15 * 60,
    };
    return timerValues[timer];
}

function changeTimerValue(timer) {
    timerParagraph.textContent = getTimerValue(timer);
}

function selectTimer(timer) {
    selectedTimer = timer;

    changeSelectClasses(timer);
    changeTimerValue(timer);
}
