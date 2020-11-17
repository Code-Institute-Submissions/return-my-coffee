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

// Game Difficulty Settings

var settingBtnClicked = false;

function checkForDifficultySetting() {
    if (openGame) {
        openGame.addEventListener("click", function() {
            findYourCoffee();
        });
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