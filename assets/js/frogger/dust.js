class Dust {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        // Positive numbers will make the particles go up
        // Minus numbers will makes the particles go down
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw() {
        ctx3.fillStyle = "rgba(150, 150, 150, 1)";
        ctx3.beginPath();
        ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3.fill();
        ctx3.closePath();
    }
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
    }
}