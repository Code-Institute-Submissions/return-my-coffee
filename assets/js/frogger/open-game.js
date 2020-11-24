// Open Game from game menu
function findYourCoffee() {
    if (settingBtnClicked === false) {
        alert("Please pick a setting before you play")
    }
    else if (settingBtnClicked === true) {
        window.location.replace("frogger.html");
    }
}