/* The following code for this game was based upon
    a video guide from the following source:
    "https://www.youtube.com/watch?v=ZniVgo8U7ek"
 */

const cards = document.querySelectorAll(".memory-card");

var lockBoard = false;
var hasFlippedCard = false;
var firstCard, secondCard;

cards.forEach((card)=> {
    card.addEventListener("click", flipCard);
});

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
};

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
