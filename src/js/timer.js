document.addEventListener('DOMContentLoaded', () => {
    const pomodoroSelect = document.querySelector('#pomodoro');
    const shortBreakSelect = document.querySelector('#short-break');
    const longBreakSelect = document.querySelector('#long-break');
    const startButton = document.querySelector('#start');
    const timerParagraph = document.querySelector('#counter');

    let selectedTimer = "pomodoro";
    let timerInterval;

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

    function secondsToMinutesSeconds(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        const padSeconds = seconds.toString().padStart(2, "0");
        return `${minutes}:${padSeconds}`;
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
        const timerValueInSeconds = getTimerValue(timer);
        timerParagraph.textContent = secondsToMinutesSeconds(timerValueInSeconds);
    }

    function selectTimer(timer) {
        selectedTimer = timer;

        changeSelectClasses(timer);
        changeTimerValue(timer);
    }

    function startTimer(timer) {
        let seconds = getTimerValue(timer);

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                timerParagraph.textContent = secondsToMinutesSeconds(seconds);
            } else {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    pomodoroSelect.addEventListener('click', () => selectTimer('pomodoro'));
    shortBreakSelect.addEventListener('click', () => selectTimer('short-break'));
    longBreakSelect.addEventListener('click', () => selectTimer('long-break'));

    startButton.addEventListener('click', () => startTimer(selectedTimer));

    changeTimerValue(selectedTimer);
});
