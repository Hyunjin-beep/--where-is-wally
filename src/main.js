"use strict";

const starting_btn = document.querySelector(".game_play");
const timer = document.querySelector(".timer");
const stop_btn = document.querySelector(".game_stop");
const game_header = document.querySelector(".game_header");
let startingTimer;
let leftTime;
let gameFlag = false;

starting_btn.addEventListener("click", () => {
  startTimer();
  startingGame();
});

function startingGame() {
  timer.style.display = "block";
  starting_btn.style.display = "none";
  stop_btn.style.display = "block";

  game_header.style.width = "250px";
  game_header.style.transform = "translate(-620px,-15px)";

  gameFlag = true;
}

function finishGame() {
  timer.style.display = "none";
  starting_btn.style.display = "block";
  stop_btn.style.display = "none";
}

function startTimer() {
  leftTime = 12;
  timer.innerHTML = "00:12";
  startingTimer = setInterval(countDown, 1000);
}

function countDown() {
  if (leftTime === -1) {
    clearInterval(startingTimer);
    timer.innerHTML = "00:00";
    finishGame();
  } else {
    timer.innerHTML = `00:${leftTime < 10 ? `0${leftTime}` : leftTime}`;
    leftTime--;
  }
}
