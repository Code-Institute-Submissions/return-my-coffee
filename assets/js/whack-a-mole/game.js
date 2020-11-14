/* 
The following code for this game was based upon a video guide from the following source:
"https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=2"
*/

let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;

let lastHole;
let timeUp = false;
let timeLimit = 2000;
let score = 0;

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

// Mole pop-up 
function molePopUp() {
    // random time between 400 and 1700 milliseconds
    const time = Math.floor(Math.random() * 1300 + 400); 
    const hole = pickRandomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        hole.classList.remove("up");
        if (!timeUp) {
            molePopUp();
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
            countdownBoard.textContent = "Time's Up!"
        }
    }, 1000);
    
    progressBar.animate({
        width: "0%"
    }, animateSpeed)
}