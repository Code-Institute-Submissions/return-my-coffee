/* 
The following code for this game was based upon a video guide from the following source:
"https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=2"
*/

let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;

let lastHole;
let timeUp = false;
let score = 0;

let highscore = localStorage.getItem("game1HighScore") || 0;
highScoreBoard.textContent = highscore;

// Pick random hole
function pickRandomHole() {
    const randomHole = Math.floor(Math.random() * holes.length);
    const hole = holes[randomHole];
    if (hole === lastHole) {
        // If the same hole is selected, pick a different one
        return pickRandomHole(hole);
    }
    lastHole = hole;
    return hole;
}

// Mole pop up
function molePopUp() {
    if (countdown == 60) {
        molePopUpEasy();
    }
    else if (countdown == 40) {
        molePopUpMedium();
    }
    else if (countdown == 25) {
        molePopUpHard();
    }
}

function molePopUpEasy() {
    const hole = pickRandomHole(holes);
    hole.classList.add("up");
    const time = Math.floor(Math.random() * 1300 + 400); 
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) {
            molePopUpEasy();
        }
    }, time)
}

function molePopUpMedium() {
    const hole = pickRandomHole(holes);
    hole.classList.add("up");
    const time = Math.floor(Math.random() * 800 + 400); 
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) {
            molePopUpMedium();
        }
    }, time)
}

function molePopUpHard() {
    const hole = pickRandomHole(holes);
    hole.classList.add("up");
    const time = Math.floor(Math.random() * 650 + 200); 
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) {
            molePopUpHard();
        }
    }, time)
}

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
            countdownBoard.textContent = "Time's Up!"
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