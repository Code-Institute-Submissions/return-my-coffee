/* The following code for this game was based upon
    a video guide from the following source:
    "https://www.youtube.com/watch?v=ZniVgo8U7ek"
 */

const cards = document.querySelectorAll(".memory-card");
const cardBoard = document.querySelector(".memory-game-board");
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const startGameCountdownBoard = document.querySelector(".start-timer h1"); 
const startText = document.querySelector("#startGameText");

var lockBoard = false;
var hasFlippedCard = false;
var firstCard, secondCard;

var progressBar = document.querySelector(".inner-bar");
let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;
let startGameCountdown = 5;
let totalMatches = 0;


cards.forEach((card)=> {
    card.addEventListener("click", flipCard);
});

// Flip Card
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
    } 
};

function checkForMatch() {
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    // Ternary operator
    isMatch ? disableCards() : unflipCards();
    // Increment card matches 
    if (isMatch) {
        totalMatches ++;
    }
    // Call win condition
    checkForWin();
};

function checkForWin() {
    matchAllCards = setInterval(() => {
        if (totalMatches === 8) {
            endGame();
        }
    }, 1000)    // gives time to allow the final card to be flipped before the win condition is called
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard, false);
    secondCard.removeEventListener("click", flipCard, false);
    resetBoard();
};

function unflipCards() {
    lockBoard = true;
    setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
    }, 800);
}

/*  When the user double clicks a card and then gets a failed match, 
    the gameboard needs to reset to allow that same card to be clicked again */
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

/* Shuffle cards on browser refresh
Based upon the following source:
"https://jsfiddle.net/z503fjv9/"
*/

(function shuffle(){
    var cardDeck = Array.from(cardBoard.children);
    var shuffleCards;

    cardDeck.sort(function(a, b) {
        return -1 + Math.random() * 3;
    });

    while (cardBoard.children.length > 0) {
        cardBoard.removeChild(cardBoard.children[0]);
    }
    cardDeck.forEach(function(el) {
        cardBoard.appendChild(el);
    })
})();

// Start Game

(function startGameTimer() {
    startGameCountdownBoard.style.display = "block";
    let gameStartCountdown = setInterval(() => {
        lockBoard = true;
        startGameCountdown -= 1;
        startGameCountdownBoard.textContent = startGameCountdown;
        if (startGameCountdown < 1) {
            startGameCountdown = 1;
            clearInterval(gameStartCountdown);
            startGameCountdownBoard.style.display = "none";
            displayStartGameText();
        }
    }, 1000)
})();

function displayStartGameText() {
    startText.style.display = "block";
    let beginGame = setInterval(() => {
        lockBoard = true;
        startText.style.display = "none";
        clearInterval(beginGame);
        startTimer();
        startGame();
    }, 1000)
}

function startGame() {
    lockBoard = false;
}

// Countdown Timer

function startTimer() {
    let startCountdown = setInterval(() => {
        // Time Left text
        countdown -= 1;
        timeLeft.textContent = countdown;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = "Time's Up!"
            endGame();
        }
    }, 1000);

    // Progress bar timer
    // Based upon the following source: "https://www.coding.academy/blog/how-to-create-a-smooth-animated-progress-bar"
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}

function endGame() {
    lockBoard = true;
    if (totalMatches === 8) {
        alert("You win!")
    }
    else {
        alert("Better luck next time")
    }
}