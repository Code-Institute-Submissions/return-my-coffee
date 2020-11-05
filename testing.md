# Testing

## Memory Game

### JavaScript Creation and Testing Process

- To first test if the CSS "flip" class worked as intended, I used `card.classList.toggle("flip")` which allowed me to toggle the flip animation on and off when clicking the card.
    - Once I knew this worked as intended, I replaced the toggle method with the `add` method, as I did not want users to be able to flip the cards back to the default back-face by themselves.
    - The flip animation was then handled in its own function so that it could handle more complex behaviours.

- Once the `checkCards()` function was made, I recieved the following error in the console: `Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 1 present.` 
    - This was caused by two snippets of code exisiting within the function:
```
card.addEventListener("click", function(){
[...]
if (firstCard.dataset.cardname === secondCard.dataset.cardname) {
    // It's a match!
    firstCard.removeEventListener("click");
    secondCard.removeEventListener("click");
}
})
```
To fix the error, I separated the code into two functions, and made the following alterations:
```
cards.forEach((card)=> {
    card.addEventListener("click", checkCards);
})
function checkCards() {
    ....
    if (firstCard.dataset.cardname === secondCard.dataset.cardname) {
        // It's a match!
        firstCard.removeEventListener("click", checkCards, false);
        secondCard.removeEventListener("click", checkCards, false);
    }
}
```
I looked to this [StackOverflow post](https://stackoverflow.com/questions/13474370/behavior-of-removeeventlistener) to help me fix the issue.