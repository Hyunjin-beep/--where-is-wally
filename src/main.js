"use strict";

const starting_btn = document.querySelector(".game_play");
const timer = document.querySelector(".timer");
const stop_btn = document.querySelector(".game_stop");
const game_header = document.querySelector(".game_header");
const wally_location = document.querySelector(".wally_location");
const game_field = document.querySelector(".game_field");
const game_img = document.querySelector(".game_img");
const game_result = document.querySelector(".game_result");
const game_msg_fail = document.querySelector(".game_fail");
const game_msg_success = document.querySelector(".game_success");

let startingTimer;
let leftTime;
let gameFlag = false;

starting_btn.addEventListener("click", () => {
  gameFlag = true;
  if (gameFlag === true) {
    startTimer();
    startingGame();
  } else {
    game_img.addEventListener("click", function (event) {
      event.preventDefault();
    });
  }
});

game_img.addEventListener("click", () => {
  showingMsg("fail");
});

wally_location.addEventListener("click", () => {
  showingMsg("win");
});

function successGame() {
  game_result.style.display = "block";
  game_msg_fail.style.display = "none";
  game_msg_success.style.display = "block";
  game_msg_success.style.paddingBottom = "20px";

  stopTimer();
  gameFlag = false;
}

function failingGame() {
  game_result.style.display = "block";
  stopTimer();
  gameFlag = false;
}

function showingMsg(result) {
  if (result === "fail") {
    game_result.style.display = "block";
  } else if (result === "win") {
    game_result.style.display = "block";
    game_msg_fail.style.display = "none";
    game_msg_success.style.display = "block";
    game_msg_success.style.paddingBottom = "20px";
  } else {
    console.log("not valid result");
  }
  stopTimer();
  gameFlag = false;
}

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
  gameFlag = false;
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

function stopTimer() {
  clearInterval(startingTimer);
  timer.innerHTML = `00:${leftTime < 10 ? `0${leftTime}` : leftTime}`;
}
