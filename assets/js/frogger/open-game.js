// Open Game from game settings menu
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play");
    }
    else if (settingBtnClicked === true) {
        window.location.replace("load-game-three.html");
    }
}