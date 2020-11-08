const easyBtn = document.querySelector("#easyBtn");
const mediumBtn = document.querySelector("#mediumBtn");
const hardBtn = document.querySelector("#hardBtn");


// Game Difficulty Settings

// Easy
easyBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 60);
    console.log(countdown);
});

// Medium
mediumBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 40);
    console.log(countdown);
});

// Hard
hardBtn.addEventListener("click", function(){
    localStorage.setItem("countdownSpeed", 25);
    console.log(countdown);
});
