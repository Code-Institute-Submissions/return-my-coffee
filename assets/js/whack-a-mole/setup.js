// Constant game variables for whack-a-mole
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score span");
const highScoreBoard = document.querySelector(".highscore span");
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const playGame = document.querySelector("#playGame");

// Open Game from game menu
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play");
    }
    else if (settingBtnClicked === true) {
        window.location.replace("load-game-two.html");
    }
}