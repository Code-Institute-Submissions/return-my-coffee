// Start game 

startGameBtn.addEventListener("click", startGame);

function startGame() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    molePopUp();

    // Stop mole pop up when timer is finished
    setTimeout(() => {
        timeUp = true;
    }, countdown * 1000)

    let startCountdown = setInterval(() => {
        countdown -= 1;
        timeLeft.textContent = countdown;
        if (countdown < 0) {
            countdown = 0;
            clearInterval(startCountdown);
            checkHighScore();
            countdownBoard.textContent = "Time's Up!";
            endGame();
        }
    }, 1000);
    
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}

// Count player score

moles.forEach(mole => mole.addEventListener("click", whackMole));

function whackMole(e) {
    score ++;

    // change mole image when hit
    this.style.backgroundImage = "url('assets/img/whack-a-mole/angrymole.png')";
    // disable clicks once a mole has been hit
    this.style.pointerEvents = "none"; 

    // Set value of timeoutSpeed
    var timeoutSpeed = 800;
    if (countdown == 60) {
        timeoutSpeed = 800;
    }
    if (countdown == 40) {
        timeoutSpeed = 800;
    }
    else if (countdown == 25) {
        timeoutSpeed = 600;
    }

    // Set image back to default after being hit
    setTimeout(() => {
        this.style.backgroundImage = "url('assets/img/whack-a-mole/mole.png')";
        this.style.pointerEvents = "all"; 
    }, timeoutSpeed)

    scoreBoard.textContent = score;
}

// Check high score

function checkHighScore() {
    if (score > localStorage.getItem("game1HighScore")) {
        localStorage.setItem("game1HighScore", score);
        highscore = score;
        highScoreBoard.textContent = highscore;
    }
}

// End game 

function endGame() {
    // Win
    if (score === 25 || score > 25) {
        winGameModal.style.display = "block";
        continueBtn.addEventListener("click", function(){
            console.log("Prepare game 3");
        });
    }
    // Lose
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