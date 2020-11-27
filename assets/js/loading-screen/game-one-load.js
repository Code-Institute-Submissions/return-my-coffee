function loadingScreen() {
    setTimeout(() => {
        window.location.replace("memory-game.html");
    }, 2500);
    console.log("loading");
}

loadingScreen();