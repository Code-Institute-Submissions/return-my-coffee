/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=ZniVgo8U7ek"
*/

// Constant game variables
const cards = document.querySelectorAll(".memory-card");
const cardBoard = document.querySelector(".memory-game-board");
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const playGame = document.querySelector("#playGame");

/*
* The if statements check whether the variables are null before adding the event listener.
* This fixes a null error within the console.
* Based upon the following source: "https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null"
*/

//  Open Game
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play");
    }
    else if (settingBtnClicked === true) {
        window.location.replace("load-game-one.html");
    }
}
