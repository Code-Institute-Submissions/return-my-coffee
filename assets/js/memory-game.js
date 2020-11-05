const cards = document.querySelectorAll(".memory-card");

// Define variables for checking cards
var lockBoard = false;
var hasFlippedCard = false;
var firstCard, secondCard;

cards.forEach((card)=> {
    card.addEventListener("click", checkCards);
})

function checkCards() {
    if (lockBoard) return;
    this.classList.add("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        hasFlippedCard = false;
        secondCard = this;

        // Do the cards match?
        if (firstCard.dataset.cardname === secondCard.dataset.cardname) {
            // It's a match!
            firstCard.removeEventListener("click", checkCards, false);
            secondCard.removeEventListener("click", checkCards, false);
        }
        else {
            lockBoard = true;
            // It's not a match so flip the cards back
            setTimeout(function() {
                firstCard.classList.remove("flip");
                secondCard.classList.remove("flip");
                lockBoard = false;
            }, 800);
        }
    }
}
