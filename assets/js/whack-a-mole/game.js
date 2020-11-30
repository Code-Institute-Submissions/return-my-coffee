/* 
The following code for this game was based upon a video guide from the following source:
"https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=2"
*/

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
    }, time);
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
    }, time);
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
    }, time);
}