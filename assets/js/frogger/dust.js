/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4&t=2686s"
*/

class Dust {
    constructor(x, y) {
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        // Positive numbers will make the ust go up
        // Minus numbers will makes the particles go down
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw() {
        ctx3.fillStyle = `rgba(150, 150, 150, ${this.opacity})`;
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.closePath();
    }
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1) {
            this.opacity -= 0.9;
        }
        if (this.radius > 0.15) {
            this.radius -= 0.14;
        }
    }
}

function handleDust() {
    for (let i = 0; i < dustArray.length; i++) {
        dustArray[i].update();
        dustArray[i].draw();
    }
    if (dustArray.length > maxDust) {
        // If we have more than 300 dust particles remove 30 - for performance
        for (let i = 0; i < 30; i++) {
            dustArray.pop();
        }
    }
    if (((keys[37] || keys[38] || keys[39] || keys[40]) || (keys[65] || keys[87] || keys[68] || keys[83])) && frogger.y > 250 && dustArray.length < maxDust + 10) {
        for (let i = 0; i < 10; i++) {
            dustArray.unshift(new Dust(frogger.x, frogger.y));
        }
    }
} 