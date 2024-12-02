let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapCount = 1;

// Start button click event
document.getElementById("start-btn").addEventListener("click", function() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        this.textContent = "Pause";
    } else {
        clearInterval(timer);
        this.textContent = "Resume";
    }
    isRunning = !isRunning;
});

// Reset button click event
document.getElementById("reset-btn").addEventListener("click", function() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time-display").textContent = "00:00:00";
    document.getElementById("start-btn").textContent = "Start";
    lapCount = 1;
    document.getElementById("lap-list").innerHTML = "";
});

// Lap button click event
document.getElementById("lap-btn").addEventListener("click", function() {
    if (isRunning) {
        const lapTime = formatTime(hours, minutes, seconds);
        const lapItem = document.createElement("li");
        lapItem.textContent = "Lap " + lapCount + ": " + lapTime;
        document.getElementById("lap-list").appendChild(lapItem);
        lapCount++;
    }
});

// Update time on the display
function updateTime() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById("time-display").textContent = formatTime(hours, minutes, seconds);
}

// Format time into HH:MM:SS
function formatTime(hours, minutes, seconds) {
    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}
