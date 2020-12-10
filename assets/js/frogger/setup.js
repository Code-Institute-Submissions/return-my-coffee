/**
 * This game is based upon a video guide from the following source:
 * "https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4&t=2686s"
*/

// Begin game
const countdownBoard = document.querySelector(".time-left");
const timeLeft = document.querySelector(".time-left span");
const progressBar = document.querySelector(".inner-bar");
const playGame = document.querySelector("#playGame");

// End game modals
const endGameModal = document.querySelector("#gameFinish");
const totalScoreDiv = document.querySelector("#totalScore");
const zeroScore = document.querySelector("#zeroScore");
const totalCollisionsDiv = document.querySelector("#totalCollisions");
const zeroCollisions = document.querySelector("#noCollisions");
const zeroCollisions2 = document.querySelector("#noCollisions2");
const showNewHighscore = document.querySelector("#beatHighscore");
const showHighscoreDiv = document.querySelector("#showHighscore");

/* Canvas */

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

/* Global game variables */

// Constant game variables
const scoreBoard = document.querySelector(".score span");
const collisionBoard = document.querySelector(".collisions span");
const highScoreBoard = document.querySelector(".highscore span");

// Local storage variables
let countdown = localStorage.getItem("countdownSpeed") || 20;
let animateSpeed = localStorage.getItem("animateSpeed") || 20;
let highscore = localStorage.getItem("game2HighScore") || 0;
highScoreBoard.textContent = highscore;

// Changeable game variables
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

/* Images to load onto the canvas */

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