// Open Game from game menu
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play")
    }
    else if (settingBtnClicked === true) {
        window.location.replace("frogger.html");
    }
}

// Begin game variables
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const playGame = document.querySelector("#playGame");


// Canvas 

const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

// Global game variables

const gameboard = document.querySelector(".frogger-board");
const scoreBoard = document.querySelector(".score span");
const collisionBoard = document.querySelector(".collisions span");

let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;

const grid = 80;
let keys = [];
let score= 0;
let collisionCount = 0;
let frame = 0;
let gamespeed = 1;
let safe = false;

const dustArray = [];
const maxDust = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

// Images

const background_lvl2 = new Image();
background_lvl2.src = "./assets/img/frogger/background_lvl2.png";

const grass = new Image();
grass.src = "./assets/img/frogger/grass.png";

const frogSprite = new Image();
frogSprite.src = "./assets/img/frogger/spritesheet.png";

const crash = new Image();
crash.src = "./assets/img/frogger/crash.png";

const splash = new Image();
splash.src = "./assets/img/frogger/splash.png";

const turtle = new Image();
turtle.src = "./assets/img/frogger/turtles.png";

const log = new Image();
log.src = "./assets/img/frogger/log.png";

const car = new Image();
car.src = "./assets/img/frogger/cars.png";
let numberOfCars = 3;