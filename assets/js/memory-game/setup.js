// Game-start modal variables
const openGame = document.querySelector("#startGameBtn");
const easyBtn = document.querySelector("#easyBtn");
const mediumBtn = document.querySelector("#mediumBtn");
const hardBtn = document.querySelector("#hardBtn");
const confirmSetting = document.querySelector(".setting-confirmation span");

// End game - win/lose modal variables
const winGameModal = document.querySelector("#winModal");
const loseGameModal = document.querySelector("#loseModal");
const continueBtn = document.querySelector("#continueBtn");
const replayBtn = document.querySelector("#replayBtn");
const quitBtn = document.querySelector("#quitBtn");

// Constant game variables
const cards = document.querySelectorAll(".memory-card");
const cardBoard = document.querySelector(".memory-game-board");
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const startGameCountdownBoard = document.querySelector(".start-timer h1"); 
const startText = document.querySelector("#startGameText");

/*
The if statements check if the variables are 
not null before adding the event listener.
This fixes a null error within the console.
The following source was used to fix this issue:
"https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null"
*/

//  Open Game

var settingBtnClicked = false;

function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play")
    }
    else if (settingBtnClicked === true) {
        window.location.replace("memory-game.html");
    }
}

// Game Difficulty Settings

function checkForDifficultySetting() {
    if (openGame) {
        openGame.addEventListener("click", findYourCoffee);
    }
}

checkForDifficultySetting();

// Easy
if (easyBtn) {
    easyBtn.addEventListener("click", function(){
        localStorage.setItem("countdownSpeed", 60);
        localStorage.setItem("animateSpeed", 61000);
        confirmSetting.style.display = "block";
        confirmSetting.textContent = "easy";
        settingBtnClicked = true;
    });
}

// Medium
if (mediumBtn) {
    mediumBtn.addEventListener("click", function(){
        localStorage.setItem("countdownSpeed", 40);
        localStorage.setItem("animateSpeed", 41000);
        confirmSetting.style.display = "block";
        confirmSetting.textContent = "medium";
        settingBtnClicked = true;
    });
}

// Hard
if (hardBtn) {
    hardBtn.addEventListener("click", function(){
        localStorage.setItem("countdownSpeed", 25);
        localStorage.setItem("animateSpeed", 26000);
        confirmSetting.style.display = "block";
        confirmSetting.textContent = "hard";
        settingBtnClicked = true;
    });
}
