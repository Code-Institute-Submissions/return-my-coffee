/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4&t=2686s"
*/

class Ripple {
    constructor(x, y) {
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    drawRipple() {
        ctx1.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx1.stroke();
        ctx1.closePath();
    }
    updateRipple() {
        if (this.radius < 50) {
            this.radius += 0.5;
            this.x -= 0.03;
            this.y -= 0.03;
        }
        if (this.opacity > 0) {
            this.opacity -= 0.03;
        }
    }
}

function handleRipples() {
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].updateRipple();
        ripplesArray[i].drawRipple();
    }
    if (ripplesArray.length > 20) {
        for (let i = 0; i < 5; i++) {
            ripplesArray.pop();
        }
    }
    if (((keys[37] || keys[38] || keys[39] || keys[40]) || (keys[65] || keys[87] || keys[68] || keys[83])) && frogger.y < 250 && frogger.y > 50) {
        for (let i = 0; i < 20; i++) {
            ripplesArray.unshift(new Ripple(frogger.x, frogger.y));
        }
    }
}