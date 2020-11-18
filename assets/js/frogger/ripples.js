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
            this.opacity -= 0.01;  // decrease by small amount so the ripples slowly disappear
        }
    }
}