class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
    } 
    draw() {
        ctx3.fillStyle = "blue";
        ctx3.fillRect(this.x, this.y, this.width, this.height);
    }  
    update() {
        this.x += this.speed * gamespeed;
        // Moving to the right
        if (this.x > canvas.width + this.width) {
            // Reset cars behind the left edge of the canvas
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
            }
        }
        // Speed is less than zero - moving to the left
        else {
            if (this.x < 0 - this.width) {     
                this.x = canvas.width + this.width;     // '+ this.width' will give the cars a small delay before they appear again
            }
        }
    }
}

// Add new obstacle to car array

function initObstacles() {
    // Car lane 1
    for (let i = 0; i < 2; i++) {
        let x = i * 350;    
        carsArray.push(new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, "car"));
    }
    // Carlane 2
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        carsArray.push(new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, "car"));
    }
    // Car lane 3
    for (let i = 0; i < 2; i++) {
        let x = i * 400;  
        carsArray.push(new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2.5, grid, 2, "car"));
    }
    // Logs
    for (let i = 0; i < 2; i++) {
        let x = i * 400;    
        logsArray.push(new Obstacle(x, canvas.height - grid * 5 - 25, grid * 2, grid, -2, "log"));
    }
    // Turtles 
    for (let i = 0; i < 3; i++) {
        let x = i * 200;    
        logsArray.push(new Obstacle(x, canvas.height - grid * 6 - 25, grid, grid, 1, "turtle"));
    }
}

initObstacles();

function handleObstacles() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
    // Car collision
    for (let i = 0; i < carsArray.length; i++) {
        if (collisionDetection(frogger, carsArray[i])) {
            ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x, frogger.y, 50, 50);
            newFrog();
        }
    }
} 