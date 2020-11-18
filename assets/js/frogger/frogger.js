class Frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        this.width = this.spriteWidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        // Up
        if (keys[38] || keys[87]) {     
            if (this.moving === false) { 
                this.y -= grid;             // frog will jump up 80 pixels
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            }
        }
        // Down
        if (keys[40] || keys[83]) {
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += grid;
                this.moving = true;
                this.frameY = 3;
            }
        }
        // Left
        if (keys[37] || keys[65]) {
            if (this.moving === false && this.x > this.width) {
                this.x -= grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 2;
            }
        }
        // Right
        if (keys[39] || keys[68]) {
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += grid;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 1;
            }
        }
        if (this.y < 0) {   // when the frog moves past the top edge of the canvas
            addScore();
        }
    }
    draw() {
        ctx3.fillStyle = "green";
        ctx3.fillRect(this.x, this.y, this.width, this.height);
        ctx3.drawImage(frogSprite, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, this.x - 25 , this.y - 25, this.width * 2, this.height * 2);
    }
    jump() {
        if (this.moving === false) {
            this.frameX = 1;
        }
        else {
            this.frameX = 0;
        }
    }
}

const frogger = new Frogger(); 