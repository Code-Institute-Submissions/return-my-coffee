// Begin start-game countdown
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

// Show start-game text after countdown
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

// Unlock the board to start the game
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
    /* Based upon the following source: "https://www.coding.academy/blog/how-to-create-a-smooth-animated-progress-bar" */
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}

// End game 
function endGame() {
    lockBoard = true;
    // Check for win
    if (totalMatches === 8) {
        winGameModal.style.display = "block";
        continueBtn.addEventListener("click", function(){
            console.log("Prepare next game")
        });
    }
    // Check for loss
    else {
        loseGameModal.style.display = "block";
        replayBtn.addEventListener("click", function(){
            window.location.reload();
        });
        quitBtn.addEventListener("click", function(){
            window.location.replace("index.html");
        })
    }
}