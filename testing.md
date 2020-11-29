# Testing



## Automated Testing

[W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate the project's HTML and CSS files. 

### W3C Markup Validation Service

![Validator screenshot](assets/img/main/html-markup.png)

- The validator found errors in my HTML code relating to the nesting of button and anchor tags.

    - Where relevant, I removed button tags from the HTML and added the `btn class` to anchor elements so that no visual aesethic was changed, meanining the anchor tags could still look like buttons.d

- The validator also flagged a warning relating to section tags in some of the HTML files, stating how every section should contain a header element.

    - I removed and/or replaced the section tags with div tags, where appropriate. 

![Validator screenshot](assets/img/main/html-validation-screenshot.png)

- No other errors were found.


### W3C CSS Validation Service

- Found no errors in my code.

![Validator screenshot](assets/img/main/css-validation.png)

- However, it found some errors with the Bootstrap CDN, but this is something that I cannot rectify.

-----



## Memory Game

### JavaScript Creation and Testing Process

### Memory Game

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


### Frogger

- Once the touchscreen controls were added to Frogger, the following error was presented in the console:

```
[Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952
```

It referred to these two lines of code in `swipe.js`:
- `gameboard.addEventListener("touchstart", startTouch, false);`
- `gameboard.addEventListener("touchmove", moveTouch, false);`

I looked to [this StackOverflow post](https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive) to fix the console error, changing the code to:
```
gameboard.addEventListener("touchstart", startTouch, {passive: true});
gameboard.addEventListener("touchmove", moveTouch, {passive: true});
```


- After that I had the following console error whenever a swipe motion was logged by the application:

```
swipe.js:73 Unable to preventDefault inside passive event listener invocation
```

I removed `e.preventDefault();` from swipe.js to fix the issue.