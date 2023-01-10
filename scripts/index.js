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
    }
    if (mseconds === 100) {
      seconds++;
      mseconds = 0;
    }
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hour++;
      minutes = O;
    }
  }

  console.log(mseconds, seconds, minutes, hour);
}
//

function start() {
  console.log("start");
  interval = setInterval(incrementTime, 10);
}

function pause() {
  console.log("pause");
  if (setPause === true) {
    setPause = false;
    
  } else {
    setPause = true;
    
  }
}
function stop() {
  mseconds = 0;
  seconds = 0;
  minutes = 0;
  hour = 0;
  clearInterval(interval);
}
