/* 
The following code for this game was based upon a video guide from the following source:
"https://www.youtube.com/watch?v=ZniVgo8U7ek"
*/

var lockBoard = false;
var hasFlippedCard = false;
var firstCard, secondCard;

let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;
let startGameCountdown = 5;
let totalMatches = 0;

// Flip Card
cards.forEach((card)=> {
    card.addEventListener("click", flipCard);
});

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");
    // First card
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    // Second card
    else {
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
    } 
}

// Check for match
function checkForMatch() {
    let isMatch = firstCard.dataset.cardname === secondCard.dataset.cardname;
    // Ternary operator
    isMatch ? disableCards() : unflipCards();
    // Increment card matches 
    if (isMatch) {
        totalMatches ++;
    }
    checkForWin();
}

// Check for win 
function checkForWin() {
    matchAllCards = setInterval(() => {
        if (totalMatches === 8) {
            endGame();
        }
    }, 1000);    // setInterval gives time to allow the final card to be flipped before the win condition is called
}

// Prevent matched cards from flipping back over
function disableCards() {
    firstCard.removeEventListener("click", flipCard, false);
    secondCard.removeEventListener("click", flipCard, false);
    resetBoard();
}

// Unflip cards that do not match
function unflipCards() {
    lockBoard = true;
    setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        lockBoard = false;
        resetBoard();
    }, 800);
}

// Reset board upon a failed match to allow cards to be clicked again
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Shuffle Cards
/* Based upon the following source: "https://jsfiddle.net/z503fjv9/" */
(function shuffle(){
    if(cardBoard) {
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
            });
        }
})();