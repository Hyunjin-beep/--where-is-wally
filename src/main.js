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
const game_redo_btn = document.querySelector(".redo");
const game_redo_btn_a = document.querySelector(".redo_a");
const game_nextLevel_btn = document.querySelector(".nextLevel");

let startingTimer;
let leftTime;
let gameFlag = false;

starting_btn.addEventListener("click", () => {
  startTimer();
  startingGame();
});

game_img.addEventListener("click", () => {
  showingMsg("fail");
});

wally_location.addEventListener("click", () => {
  showingMsg("win");
});

game_redo_btn.addEventListener("click", (event) => {
  reStart();
  console.log(gameFlag);
  // console.log(event.target);
  // console.log(event.currentTarget);
});

game_redo_btn_a.addEventListener("click", (event) => {
  reStart();
  console.log(gameFlag);
  // console.log(event.target);
  // console.log(event.currentTarget);
});

game_nextLevel_btn.addEventListener("click", () => {
  location.href = "../next/levelTwo.html";
});

function reStart() {
  gameFlag = true;
  hideMsg();
  startTimer();
}

function hideMsg() {
  game_result.style.display = "none";
  game_msg_fail.style.display = "";
  game_msg_success.style.display = "";
}

function startingGame() {
  timer.style.display = "block";
  starting_btn.style.display = "none";
  stop_btn.style.display = "block";

  game_header.style.width = "250px";
  game_header.style.transform = "translate(-620px,-15px)";

  game_field.style.display = "block";

  gameFlag = true;
}

function finishGame() {
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
  if (leftTime === 0) {
    clearInterval(startingTimer);
    timer.innerHTML = "00:00";
    showingMsg("fail");
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

function showingMsg(result) {
  if (result === "fail") {
    game_result.style.display = "block";
    game_msg_success.style.display = "none";
  } else if (result === "win") {
    game_result.style.display = "block";
    game_msg_fail.style.display = "none";
  } else {
    console.log("not valid result");
  }
  stopTimer();
  gameFlag = false;
}
