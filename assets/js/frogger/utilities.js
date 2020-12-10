/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4&t=2686s"
*/

/* Start game */

playGame.addEventListener("click", startGame);

function startGame() {
    let modal = document.querySelector(".custom-modal");
    modal.style.display = "none";
    // Reset game variables
    score= 0;
    collisionCount = 0;
    frame = 0;
    safe = false;
    // Start animation and key-input event listeners
    logKeys();
    animate();

    // Start game countdown timer
    let startCountdown = setInterval(() => {
        countdown -= 1;
        timeLeft.textContent = countdown;
        if (countdown <= 0) {
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = "Time's Up!";
            checkHighScore();
            endGame();
        }
    }, 1000);
    // Progress bar timer
    progressBar.animate({
        width: "0%"
    }, animateSpeed);
}

// Call on JS classes and functions to draw everything to canvas 
function animate() {
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx4.clearRect(0, 0, canvas.width, canvas.height);
    ctx5.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    handleDust();
    handleRipples();
    frogger.draw();
    frogger.update();
    handleObstacles();
    frame++;
    requestAnimationFrame(animate);
}

// Key input
function logKeys() {
    window.addEventListener("keydown", function(e) {
        keys = [];
        keys[e.keyCode] = true;
        if ((keys[37] || keys[38] || keys[39] || keys[40]) || (keys[65] || keys[87] || keys[68] || keys[83])) {
            frogger.jump();
        }
    });
    
    window.addEventListener("keyup", function(e) {
        delete keys[e.keyCode];
        frogger.moving = false;
        frogger.frameX = 0;
    });
}

// Increment score
function addScore() {
    score ++;
    scoreBoard.textContent = score;
    // Add new frogger
    frogger.x = canvas.width/2 - frogger.width/2;  
    frogger.y = canvas.height - frogger.height - 40;
}

// Check high score
function checkHighScore() {
    highscore = score - collisionCount;
    if (highscore > 0 && highscore > localStorage.getItem("game2HighScore")) {
        localStorage.setItem("game2HighScore", highscore);
        highScoreBoard.textContent = highscore;
    }
}

// Collision detection
function collisionDetection(first, second) {
    return !(first.x > second.x + second.width || first.x + first.width < second.x ||
            first.y > second.y + second.height || first.y + first.height < second.y);
}

// Spawn new frog
function newFrog() {
    collisionCount++;
    collisionBoard.textContent = collisionCount;
    // Add new frogger
    frogger.x = canvas.width/2 - frogger.width/2;  
    frogger.y = canvas.height - frogger.height - 40;
}

// End game
function endGame() {
    endGameModal.style.display = "block";
    updateModal();
}

// Log results in modal
function updateModal() {
    // If score is greater than or equal to 0
    if (score === 0) {
        zeroScore.style.display = "block";
    }
    // If score is greater than 0 
    else {
        let totalScore = document.querySelector("#totalScore span");
        totalScore.textContent = score;
        totalScoreDiv.style.display = "block";
    }
    // If collision count is 0 and score is greater than 0
    if (collisionCount === 0 && score > 0) {
        zeroCollisions.style.display = "block";
    }
    // If collision count and score is 0
    else if (collisionCount === 0 && score === 0) {
        zeroCollisions2.style.display = "block";
    }
    // If collsion count is more than 0
    else {
        let totalCollisions = document.querySelector("#totalCollisions span");
        totalCollisionsDiv.style.display = "block";
        totalCollisions.textContent = collisionCount;
    }
    // If high score is 0 or less than the current high score
    if (highscore === 0 || highscore < localStorage.getItem("game2HighScore")) {
        let showHighscore = document.querySelector("#showHighscore span");
        showHighscoreDiv.style.display = "block";
        if (localStorage.getItem("game2HighScore") === null) {
            showHighscore.textContent = 0;
        }
        else {
            showHighscore.textContent = localStorage.getItem("game2HighScore");
        }
    }
    // If high score has been beaten
    else {
        let newHighscore = document.querySelector("#beatHighscore span");
        showNewHighscore.style.display = "block";
        newHighscore.textContent = highscore;
    }
}