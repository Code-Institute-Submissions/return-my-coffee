function animate() {
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.drawImage(background_lvl2, 0, 0, canvas.width, canvas.height);
    ctx4.drawImage(grass, 0, 0, canvas.width, canvas.height);
    frogger.draw();
    frogger.update();
    handleObstacles();
    requestAnimationFrame(animate);
}

animate(); 

// Key input

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
})

function addScore() {
    score ++;
    scoreBoard.textContent = score;
    // Add new frogger
    frogger.x = canvas.width/2 - frogger.width/2;  
    frogger.y = canvas.height - frogger.height - 50;
}