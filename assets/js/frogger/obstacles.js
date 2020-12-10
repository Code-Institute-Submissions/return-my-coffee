/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4&t=2686s"
*/

class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 30);
        this.carType = Math.floor(Math.random() * numberOfCars);
    } 
    // Draw to canvas
    draw() {
        if (this.type === "turtle") {
            if (frame % this.randomise === 0) {
                if (this.frameX >= 1) {
                this.frameX = 0;
                } 
                else {
                    this.frameX++;
                }
            }
            ctx1.drawImage(turtle, this.frameX * 70, this.frameY * 70, 70, 70, this.x, this.y, this.width, this.height);
        }
        else if (this.type === "log") {
            ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        }
        else {
            ctx2.drawImage(car,this.frameX * this.width, this.carType * this.height, grid * 2, grid, this.x, this.y, this.width, this.height);
        }
    }  
    // Add animation
    update() {
        this.x += this.speed * gamespeed;
        // Moving to the right
        if (this.speed > 0) {
            // Reset cars behind the left edge of the canvas
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.carType = (Math.floor(Math.random() * numberOfCars)); 
            }
        }
        // Speed is less than zero - moving to the left
        else {
            if (this.x < 0 - this.width) { 
                this.frameX = 1; 
                this.x = canvas.width + this.width;     // '+ this.width' will give the cars a small delay before they appear again
                this.carType = (Math.floor(Math.random() * numberOfCars));
            }
        }
    }
}

/* Add obstacles to cars, logs and turtles array */

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

/* Draw obstacles to canvas */
/* Add collision detection to obstacles */

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
            ctx4.drawImage(crash, 0, 0, 100, 100, frogger.x, frogger.y, 50, 50);
            newFrog();
        }
    }
    // Log and turtle collision
    if (frogger.y < 250 && frogger.y > 100) {
        safe = false;
        for (let i = 0; i < logsArray.length; i++) {
            if (collisionDetection(frogger, logsArray[i])) {
                frogger.x += logsArray[i].speed;    // allows frogger to ride on logs and turtles
                safe = true;
            }
        }
        // Fall in water collision detection
        if (!safe) {
            for (let i = 0; i < 30; i++) {
                ripplesArray.unshift(new Ripple(frogger.x, frogger.y));
            }
            ctx4.drawImage(splash, 0, 0, 100, 100, frogger.x, frogger.y, 50, 50);
            newFrog();
        }
    }
} 