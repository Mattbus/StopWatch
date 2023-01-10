"use strict";

const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const stopButton = document.querySelector("#stop");
let hourElement = document.querySelector("#hour");
let minutesElement = document.querySelector("#minutes");
let secondsElement = document.querySelector("#seconds");
let msecondsElement = document.querySelector("#mseconds");

startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stop);

let setPause = false;
let interval;
let mseconds = 0;
let seconds = 0;
let minutes = 0;
let hour = 0;

function incrementTime() {
  if (setPause === true) {
  } else {
    if (mseconds <= 99) {
      mseconds++;
      msecondsElement.innerText = mseconds;
    }
    if (mseconds === 100) {
      seconds++;
      mseconds = 0;
      secondsElement.innerText = seconds;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
      minutesElement.innerText = minutes;
    }
    if (minutes === 60) {
      hour++;
      minutes = O;
      hourElement.innerText = hour;
    }
    console.log("increment");
  }
}
//

function start() {
  interval = setInterval(incrementTime, 10);
}

function pause() {
  console.log("pause");
  if (setPause === true) {
    setPause = false;
  } else {
    setPause = true;
  }
  console.log(setPause);
}
function stop() {
  console.log("stop");
  mseconds = 0;
  seconds = 0;
  minutes = 0;
  hour = 0;
  clearInterval(interval);
}
