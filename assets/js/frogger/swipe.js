const gameboard = document.querySelector(".frogger-board");

/*
** The following code was based upon this source:
    "https://stackoverflow.com/questions/53192433/how-to-detect-swipe-in-javascript"

    Which was taken from here:
    "https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm"

    ** Original Author: Kirupa Chinnathambi
*/

gameboard.addEventListener("touchstart", startTouch, false);
gameboard.addEventListener("touchmove", moveTouch, false);

// Swipe Up / Down / Left / Right
var initialX = null;
var initialY = null;

function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
}

function moveTouch(e) {
    if (initialX === null) {
        return;
    }

    if (initialY === null) {
        return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    frogger.moving = false;
        frogger.frameX = 0;
    
    // Swipe horizontally
    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Swipe left
        if (diffX > 0) {
        frogger.moveLeft();
        console.log("swiped left");
        } 
        // Swipe right
        else {
        frogger.moveRight();
        console.log("swiped right");
        }  
    } 
    // Swipe vertically
    else {
        // Swipe up
        if (diffY > 0) {
        frogger.moveUp();
        console.log("swiped up");
        } 
        // Swipe down
        else {
        frogger.moveDown();
        console.log("swiped down");
        }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
}