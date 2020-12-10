/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=2"
*/

// Constant game variables
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score span");
const highScoreBoard = document.querySelector(".highscore span");
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const playGame = document.querySelector("#playGame");

// Varying game variables
let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;
let lastHole;
let timeUp = false;
let score = 0;
let highscore = localStorage.getItem("game1HighScore") || 0;
if (highScoreBoard) {
    highScoreBoard.textContent = highscore;
}

// Open Game from game menu
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play");
    }
    else if (settingBtnClicked === true) {
        window.location.replace("load-game-two.html");
    }
}