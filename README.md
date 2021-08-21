# TITLE: Where is Wally
### URL: https://hyunjin-beep.github.io/--where-is-wally/
# Languages: HTML, CSS, JavaScript


> ## TABLE OF CONTENTS
### 1. About the project

### 2. Why do I start this project?

### 3. Details of project

### 4. Reference


------
## 1. About the project
This project is inspried by the puzzle books "Where is wally?". 
This project has five levels and every time the level goes up, it is diffult to find Wally among lots of people as you know the system of original Wally.
![Screenshot (100)](https://user-images.githubusercontent.com/64330888/130327877-2a535cbd-a835-4228-84d6-3bf32ee72fad.png)


## 2. Why do I start this project?
I started to this project becuase the puzzle was really simple but gave my friends and me good time. 
Also, I always would like to make a game even though it is simple or easy to make it.


## 3. Details of project
This project has three structures. 
  - Header including level, time and two buttons(start and pause)
  - Game Field
  - Success or Fail message

  ---------------------------------------
  
  * Header
  ![Screenshot (102)](https://user-images.githubusercontent.com/64330888/130328698-e829e8fc-d9a2-49f9-973b-10f291fd3e94.png)

  ```
  <div class="game_header">
      <header>
        <button class="game_play"><i class="far fa-play-circle"></i></button>
        <button class="game_stop" style="display: none">
          <i class="fas fa-stop"></i>
        </button>
        <span class="level" style="margin-bottom: 10px">Level 01</span>
        <span class="timer" style="margin-bottom: 10px"></span>
      </header>
    </div>
  ```
  
  When users first load it, it will show only start button and level. After starting the game, the header will moved to side for entire game image while the starting button is replaced by a puase button and the timer is starting to count.
  
  ![Screenshot (100)](https://user-images.githubusercontent.com/64330888/130328614-9e31fb42-9f10-40c0-8cd4-d13b7ae7a2d8.png)
  
  ```
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

    game_field.style.display = "block";

    gameFlag = true;
  }

  function startTimer() {
    leftTime = 12;
    timer.innerHTML = "00:12";
    startingTimer = setInterval(countDown, 1000);
  }
  ```
  
   ---------------------------------------
   
  * Game Field
  ```
  <div class="game_field" style="display: none">
      <img src="plan/img1.jpg" alt="" class="game_img" />
      <div class="wally_location"></div>
  </div>
  ```
  
  Game Field has the wally puzzle and an element of wally's location. A div charging in wally's location is not showing to users but when users find the wally, which means they click the div, it will show success message. On the other hand, when users cannot find wally, which means time is up or clickes somewhere, the fail message will be showed up.
  
  ```
  game_img.addEventListener("click", () => {
    showingMsg("fail");
  });

  wally_location.addEventListener("click", () => {
    showingMsg("win");
  });
  
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
  ```
  
---------------------------------------
   
  * Success or Fail message
  ![Screenshot (105)](https://user-images.githubusercontent.com/64330888/130328737-7d309c30-e563-47a8-af7a-bde91f1c2706.png)
  ![Screenshot (106)](https://user-images.githubusercontent.com/64330888/130328741-cf599b18-d7c0-4e1a-b969-091db5b0ec3d.png)

  ```
  <div class="game_result" style="display: none">
      <div class="game_fail">
        <button class="redo"><i class="fas fa-redo"></i></button>
        <span class="game_fail_message">You Failed</span>
      </div>
      <div class="game_success">
        <div class="game_success_btn">
          <button class="redo_a"><i class="fas fa-redo"></i></button>
          <button class="nextLevel">
            <a href="levelTwo.html"><i class="fas fa-arrow-right"></i></a>
          </button>
        </div>
        <span class="game_success_message">You Found!</span>
      </div>
   </div>
  ```
  As menstioned above, when users find wally, the success message will be popedup. otherwise, the fail message will be showed up.
    
    * Fail Message
      There is a redo button which users can do same level game again.
      
      ```
      game_redo_btn.addEventListener("click", () => {
        reStart();
        console.log(gameFlag);
      });
      
      function reStart() {
        gameFlag = true;
        hideMsg();
        startTimer();
      }
      ```
    
    * Success Message
      There are two buttons, redo and next level. The redo button is worked in same way above.
      If users want to play next level, the nextLevel button will lead them to next page.



## 4. References
STUDY NOTE: https://indecisive-durian-7f7.notion.site/where-is-wally-dev-notes-04b71cdabb59483094cf03a90fad3e09
MDN site: https://developer.mozilla.org/en-US/docs/Web/JavaScript
absolute, relative and others: https://stackoverflow.com/questions/18339549/floating-div-over-an-image

