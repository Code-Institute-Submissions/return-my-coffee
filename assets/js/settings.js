const openGame = document.querySelector("#startGameBtn");

const easyBtn = document.querySelector("#easyBtn");
const mediumBtn = document.querySelector("#mediumBtn");
const hardBtn = document.querySelector("#hardBtn");
const confirmSetting = document.querySelector(".setting-confirmation span");

//  Open Game

openGame.addEventListener("click", function() {
    window.location.replace("memory-game.html");
});


// Game Difficulty Settings

// Easy
easyBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 60);
    localStorage.setItem("animateSpeed", 61000);
    confirmSetting.style.display = "block";
    confirmSetting.textContent = "easy";
});

// Medium
mediumBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 40);
    localStorage.setItem("animateSpeed", 41000);
    confirmSetting.style.display = "block";
    confirmSetting.textContent = "medium";
});

// Hard
hardBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 25);
    localStorage.setItem("animateSpeed", 26000);
    confirmSetting.style.display = "block";
    confirmSetting.textContent = "hard";
});
