const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

const newStart = document.getElementById('123');
const newPause = document.getElementById('234');
const newRestart = document.getElementById('345');

const secDisplay = document.getElementById('seconds');
const minDisplay = document.getElementById('minutes');
const hoursDisplay = document.getElementById('hours');

let secsCounter = 0;
let minCounter = 0;
let hourCounter = 0;

let intervalID, intervalID_1
let flag = false;

// InCase
function makeTwoDigits (number) {
    if (number < 10) {
        return "0" + number;
    } return number;
}
// Handles Timer Display * ADD After every eventlistener!
function updateDisplay () {
    if ( secsCounter >= 60) {
        secsCounter = 0;
        minCounter++ ;
    } else if (minCounter >= 60) {
        minCounter = 0;
        hourCounter++ ;
    }

    secDisplay.innerText = makeTwoDigits(secsCounter);
    minDisplay.innerText = makeTwoDigits(minCounter);
    hoursDisplay.innerText = makeTwoDigits(hourCounter);
}


startButton.addEventListener("click", function () {
    intervalID = setInterval(function () {
        secsCounter ++; 
        updateDisplay()}
    , 1000)
});

pauseButton.addEventListener("click", function () {
    clearInterval(intervalID);
    updateDisplay()
    flag = false;
});

resetButton.addEventListener("click", function () {
    secsCounter = 0;
    minCounter = 0;
    hourCounter= 0;

    clearInterval(intervalID)

    updateDisplay();
    flag = false;
})



newStart.addEventListener('click', function () {
    /* Start Timer */
    intervalID = setInterval(function () {
        secsCounter ++; 
        updateDisplay()}
    , 1000)

    /* Hide Start Buttton */

    newStart.style.display = "none";
    newPause.style.display = "inline-flex";

})

newPause.addEventListener('click', function () {
    /* Pause Timer */
    clearInterval(intervalID);
    updateDisplay()

    newStart.style.display = "block";
    newPause.style.display = "none";
})

newRestart.addEventListener('click', function () {
    secsCounter = 0;
    minCounter = 0;
    hourCounter= 0;

    clearInterval(intervalID)

    newStart.style.display = "block";
    newPause.style.display = "none";

    updateDisplay();
})