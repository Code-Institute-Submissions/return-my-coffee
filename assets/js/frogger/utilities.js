// Start game

playGame.addEventListener("click", startGame);

function startGame() {
    let modal = document.querySelector(".start-game-modal");
    modal.style.display = "none";
    // Reset game variables
    score= 0;
    collisionCount = 0;
    frame = 0;
    safe = false;
    // Start animation and key-input event listeners
    logKeys();
    animate();

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
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}


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
    })
    
    window.addEventListener("keyup", function(e) {
        delete keys[e.keyCode];
        frogger.moving = false;
        frogger.frameX = 0;
    })
}

function addScore() {
    score ++;
    scoreBoard.textContent = score;
    // Add new frogger
    frogger.x = canvas.width/2 - frogger.width/2;  
    frogger.y = canvas.height - frogger.height - 40;
}

function checkHighScore() {
    if (score > localStorage.getItem("game2HighScore")) {
        localStorage.setItem("game2HighScore", score);
        highscore = score - collisionCount;
        highScoreBoard.textContent = highscore;
    }
}

function collisionDetection(first, second) {
    return !(first.x > second.x + second.width || first.x + first.width < second.x ||
            first.y > second.y + second.height || first.y + first.height < second.y)
}

function newFrog() {
    collisionCount++;
    collisionBoard.textContent = collisionCount;
    // Add new frogger
    frogger.x = canvas.width/2 - frogger.width/2;  
    frogger.y = canvas.height - frogger.height - 40;
}

function endGame() {
    endGameModal.style.display = "block";
}