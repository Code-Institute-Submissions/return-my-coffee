# Return myCoffee

[View live project here](https://ellenst264.github.io/return-my-coffee/)

This web-application is a fun, interactive game that combines popular mini-games together into one immersive experience. In Return myCoffee users must complete each mini-game in order to retrieve a cup of coffee that has been stolen from them!

![Mockup image](assets/img/main/smartmockups.jpg)

-----

## Contents 

- [Project Purpose](#project-purpose)

- [User Experience (UX)](#user-experience-ux)

    - [User Stories](#user-stories)

- [Design](#design)
        
    - [Typography](#typography)

    - [Colour Scheme](#colour-scheme)

- [Implemented Features](#implemented-features)

  - [Homepage](#homepage)

  - [Navigation Bar](#navigation-bar)

  - [Homepage Content](#homepage-content)

  - [Game settings menu](#game-settings-menu)

  - [Loading Screen](#loading-screen)

  - [Win Game Modal (Memory Card Game and Whack-A-Mole)](#win-game-modal-memory-card-game-and-whack-a-mole)

  - [Lose Game Modal (Memory Card Game and Whack-A-Mole)](#lose-game-modal-memory-card-game-and-whack-a-mole)

  - [Memory Game](#memory-game)

  - [Whack-A-Mole](#whack-a-mole)

  - [Frogger](#frogger)

  - [Frogger - End Game Modal](#frogger---end-game-modal)

  - [Final End Game Modal](#final-end-game-modal)

- [Features Left to Implement](#features-left-to-implement)

- [Areas of Improvement](#areas-of-improvement)

- [Accessibility](#accessibility)

- [Technologies Used](#technologies-used)

  - [Languages](#languages)

  - [Frameworks, Libraries and Programs](#frameworks-libraries-and-programs)

- [Testing](#testing)

- [Deployment](#deployment)

- [Further Notes](#further-notes)

- [Credits](#credits)

  - [Code](#code)

  - [Content](#content)

  - [Inspiration](#inspiration)

  - [Acknowledgements](#acknowledgements)

  -----

## Project Purpose 

Return myCoffee is aimed at a target audience of all ages, who want to play a fun and simple browser game on their computer or on their tablet or mobile device. The aim of the application is to provide a fun and easy experience for users. It gives users a new way of playing popular mini-games by linking each game in a fun narrative, which allows the audience to immerse themselves into the game in an interactive, intuitive way.

### Project Goals

The most significant goal of this project is to ensure that the game is entertaining and easy to play. No downloads are necessary to play the game and it can be enjoyed on any device, making it easily accessible. This project strives to offer something new by presenting familiar mini-games to users in an unqiue and immersive way.

### Project Owner Goals

The primary goal is to create something unique - presenting a browser game that is responsive and enjoyable. I also want this application to further enhance my porfolio, which is why it is important that a means of contact is provided for users who wish to reach out to me regarding my work. 

### Target Audience 

The target audience is open to anyone who is fond of playing quick fun mini-games such as the *memory card game*, *whack-a-mole* and *frogger*. There are subtle references to coding that an astute eye may pick up on - the most obvious one can be found in the game title. 

-----

## User Experience (UX)

### User Stories

### First Time Visitor Goals

- As a first time visitor I want to immediately understand the purpose of the application.

- As a first time visitor I want to play an interactive browser based game that is easy to use, fun and intuitive.

- I want the game to have a challenge in terms of a timelimit or a score I need to beat.

- I want to be able to change the difficulty of the game.

- I want to be able to play the game on any device.

- I want the game instructions to be clear.

- I want the game's user interface to be pleasant.


### Returning Vistor Goals

- As a returning visitor I want to try and beat my high score, which means I expect a local storage system which will save my score.

- As I have played the game before, I now seek a bigger challenge, so I want to be able to change the difficulty of the game.

-----

## Design 

### Typography 

I have imported the following fonts from the [Google Fonts](https://fonts.google.com/) library to use in my project:

- [Source Code pro](https://fonts.google.com/specimen/Source+Code+Pro?query=code)

- [Nanum Gothic Coding](https://fonts.google.com/specimen/Nanum+Gothic?query=nan)

- [Inconsolata](https://fonts.google.com/specimen/Inconsolata?query=incon)

- [Roboto](https://fonts.google.com/specimen/Roboto)

- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=robot)

Source Code Pro, Nanum Gothic Coding, Inconsolata and Roboto Mono have Monospace as a fallback font in case the fonts fail. 

Roboto has a fallback font of Sans Serif incase it fails to import.

All of the fonts have a similar style, but their subtle differences help add visual variety to the project to make it more interesting. I chose this style to stress the project's purpose. The fonts can easily be associated with arcade games, older RPG games and/or text-based games. Examples of this are displayed below:

| Example 1 | Example 2 | Example 3 |
| --------- | --------- | --------- |
| ![Game font example screenshot 1](assets/img/main/font-example1.png) | ![Game font example screenshot 2](assets/img/main/font-example2.png) | ![Game font example screenshot 3](assets/img/main/font-example3.png) |


It was important to ensure that I chose a typography style that was clear, readable and consistent. I believe each page achieves this and promotes the project theme effectively.

Each page uses the following fonts:

- Hompage 
    - Source Code Pro
    - Nanum Gothic Coding
    - Inconsolata
    - Roboto Mono

- Memory Game 
    - Source Code Pro

- Whack-A-Mole
    - Roboto 

- Frogger
    - Roboto

- Roboto was used for the game user interface in Whack-A-Mole and Frogger.

  - Roboto is more readble than the other fonts when against a visually packed background. When the screen size becomes smaller, it is increasingly easier to read than the former fonts. This is why Roboto was used for both Whack-A-Mole and Frogger - to ensure that users could see the user interface clearly. 


### Colour Scheme

In the initial design phase I opted to try out a 'coffee' colour scheme for the Homepage, which can be seen [here](assets/wireframes/homepage-old.png). However when the time came to write the code and I had the design properly laid out on the browser, the design choice didn't seem right. So I went back to the surface plane and redesigned the layout and colour scheme entirely.

|  |  |
| --------- | --------- |
| ![Color pyschology](assets/img/main/color-psychology1.png) | ![Color pyschology](assets/img/main/color-psychology2.png) |

I wanted the project to be vibrant, colourful and eye-catching, and it was imperative for the design to envoke a positive emotional response from the user.

The primary colour scheme for the **Homepage** is blue, green and yellow. 

- Blue is trustworthy and peaceful colour. It is a friendly colour, which makes the application more approachable and incites relaxtion. This ties in nicely with the application's purpose as people often play games to unwind.

- Green is a calming, reassuring colour. It is heavily associated with nature which links with the project's visual imagery in regards to the background images that are used. It is also associated with moving forward, like green in a traffic light, which can incite users to play the game.

- Yellow is a cheerful, optimistic colour, which is associated with the outdoors. Like green, this alludes to the project's visual theme. Yellow can also link to the colour of coffee!

- Blue green and yellow all combine nicely to create the atmosphere of being outdoors. This is where I would like to imagine that the game narrative is set, which is implied with textual content, background images and colours.

-----

### Wireframes 

I prepared all my wireframes in [Adobe XD](https://www.adobe.com/uk/products/xd.html). Adobe XD allowed me to experiment with the appliation's design before creating any of the code and helped with the construction of the surface plane. After writing the code, however, some design choices were altered, and I even went back to Adobe XD to recreate the design for the homepage. All of these design stages can be accessed below.

Each page has a wireframe for both desktop and mobile devices. I did not include a tablet wireframe in the design phase because there is no stark differences between tablet and desktop (for larger tablet devices) or tablet and mobile for smaller tablet devices. Additionally, many laptops also have touchscreen functionality, making the similarity even greater.

The only difference between tablet and desktop is the collapsible navbar with the hamburger icon. This alteration is represented in the mobile wireframe.

- [Homepage - old](assets/wireframes/homepage-old.png) 
- [Homepage - new](assets/wireframes/homepage1.png) and [this](assets/wireframes/homepage2.png)
- [Game setting menu](assets/wireframes/game-settings.png)
- [Memory game](assets/wireframes/memory-game.png)
- [Whack-A-Mole](assets/wireframes/whack-a-mole.png)
- [Frogger](assets/wireframes/frogger.png)
- [End game modal](assets/wireframes/end-modal.png)


-----

## Implemented Features

- Reponsive UX design that is user friendly and easy to navigate and use.


### Homepage 


#### Navigation Bar 

- Fixed Navigation Bar 

  - Built using Bootstrap framework to ensure responsive UX design across a wide range of devices.

  - Allows users to easily navigate through the site.

  - Allows users to navigate to any part of the site no matter where they are at that given moment.

  - Improves user experience for mobile users by preventing the need to scroll to the top of the top of the screen, which may become a nuisance for small touchscreen devices.

- Hamburger menu for mobile devices 

  - Also built using Bootstrap framework.

  - Limits the amount of real estate used on mobile devices.

  - Conforms to web-design conventions, meeting the expectations of the user.

- Navlinks hover effect

  - A slight hover effect for the navbar links provide feedback to user input.

- Play Now button
  
  - The play now button within the navigation menu allows users to start the game at any moment, no matter where they are on the homepage.


#### Homepage Content

- Smooth scroll effect

  - Removes the abrupt choppiness of default scrolling.

  - Correlates nicely the parrallax effect of the homepage.

- Hero image

  - A vibrant, eye-catching hero image (animated gif) to encourage a positive emotional repsonse from the user when they first enter the page.

  - The art design can be associated with many older arcade and RPG styled games, and thus correlates well the project's purpose.

  - The design makes the application *look like* a game.

- Parrallax scrolling effect

  - Improves the visual aesthetic of the site.

  - Adds user interactivity to the homepage.

  - Stresses the project's visual design.

- Play now button

  - Navigates users to the game. 

  - Located where the **hero image** is, in the **navbar** and also in the **about section** of the homepage.

- Contact form

  - Fulfills a site owner's goal.

  - Allows users to contact the site owner easily, reducing the amount of steps they would need to take if they wanted to make contact.

  - Follows typical web-design conventions by being located at the bottom of the page (where a footer would be if the homepage had need for one)

  - Adds a personal touch to the site and makes the tonality more friendly and approachable, which could encourage users to visit the site again.

  - Implements EmailJS to add real-world functionality. When a user inputs their message within the contact form the site owner (me) will recieve an email containing the user's message. 

  - Users will be notified via an alert box once the email is sent, confirming that their message was sent successfully.

  - The form input fields will reset once the data has been sent.


### Game settings menu

- Game narrative 

  - Adds a story to the game application to link each game together in a seamless and fun way.

- Difficulty buttons
  
  - Allows the users to choose a difficulty setting for each game.

  - Gives users greater control in regards to how *they want to* play the game.

  - Allows users to have more of a challenge if and when they choose to play the game again.

  - Feedback is given underneath the buttons to confirm which difficulty setting has been chosen. 

- Help button and Help page

  - Allows users to read the game rules via a different page.

  - Takes up less real estate on the page.

  - Reduces cognitive overload by limiting the amount of information that is shown to the user.

  - Many users may not want to even read the game instructions and/or may already know how to the play the game.

- Return to Homepage

  - Allows users to quit the game and return to the homepage by clicking the 'Return to Homepage' button

- Animated gif

  - Adds visual variety to each game settings menu.

  - Makes each menu more visually stimulating.


### Loading Screen

- A fake loading screen is added before each game to give users time to process what they have to do before the game starts.

- The fake loading screen helps the project conform to a lot of game conventions. A loading screen would almost always be present before starting a game. 

- Provides feedback to the user by 'pretending' that their input is being processed before the game loads. In reality, this information is processed in milliseconds, but this time can reassure users that their input is being processed successfully. 

- Removes any suddeness which prepares them to play the game.


### Win Game Modal (Memory Card Game and Whack-A-Mole)

- Provides feedback to the user by telling them that they have won that particular mini-game.

- Allows users to easily move onto the next game.

- Users recieve a positive emotional response and a 'dopamine hit' which will promote a good user experience and encourage users to replay the game because the effects of dopamine are addictive. More information about dopamine can be found [here](https://uxdesign.cc/ux-dopamine-and-motivation-9c63cabf25c7)


### Lose Game Modal (Memory Card Game and Whack-A-Mole)

- Provides feedback to the user by telling them that they have not met the requirements to move onto the next game.

- 'Better Luck Next Game' is more positive than 'You Lose', which will enourage users to try again and discourage any negative responses which could stop users from playing the game.

  - Doesn't punish users for 'losing'.

- Provides the option for users to quit the game, with 'Return to Homepage'.

  - Gives users greater control over their actions.


### Memory Game

- 8 Card pairs (12 cards in total)

  - A large enough number to be a challenge yet small enough to not be too difficult or fustrating for the user.

  - Each card is coffee themed which correlates to the game's overall theme.

  - The 'odd one out' is the **mole card** which is the "clue" that was referenced in the game setting menu. This provides a stable link with the next game - whack-a-mole.

- Background image 

  - The background image is the **hero image** used in the Homepage, which ensures that a consistent theme runs throughout the project.

  - Makes the games more visually pleasing.

- Game board - desk

  - Added a card-game desk (or a green background for smaller mobile devices) to simulate the cards being spread out across the desk.

  - On larger screens, an animated coffee cup is on the desk to keep the game's visual theme flowing throughout.

- Card flip animation

  - Follows the conventions of card games, simulating the real action of flipping a card.

  - Gives users time to process the front-face of the card.

- Start Button modal

  - Allows users to play the game once they're ready. Clicking the button would start the game timer and allow users to interact with the game board to play the game.

  - The button has a pulsing animation to incite users to click it and also confirm to users that it is indeed clickable.

  - The button is bright and vibrant to make it stand out.

- Game timer - Numbered Timer

  - Provides a clear indication to how much time is left.

- Game timer - Progress Bar

  - Provides a visual timer which is easier to keep track of.

  - Due limitations within the code, this is only available on larger screens. However, I would like to add this feature to smaller screens in future developments.


### Whack-A-Mole

- 6 holes for the moles to pop up out from.

  - A large enough number to be a challenge yet small enough to not be too difficult or fustrating the user.

  - The number of holes is a near perfect amount to ensure responsive UX design on a wide range of devices.

- Mole pop animation

  - The mole pops up from the hole at different speeds depending on what difficulty setting was chosen by the user.

- Whack Mole Feedback

  - When whacked (clicked by the user) the mole image will change to a mole with an angry face.

  - This gives the user appropriate feedback so that they know that their input was recognised by the game.

  - The score also increments by one to provide feedback for user input.

- Score Count

  - Every time the user successfully whacks a mole, the score increments by one.

- High Score

  - A high score value is stored in the browser's local storage sytem to encourage users to replay the game.

- Start Button modal

  - Allows users to play the game once they're ready. Clicking the button would start the game timer and allow users to interact with the game board to play the game.

  - The button has a pulsing animation to incite users to click it and also confirm to users that it is indeed clickable.

  - The button is bright and vibrant to make it stand out.

- Game timer - Numbered Timer

  - Provides a clear indication to how much timer is left.

- Game timer - Progress Bar

  - Provides a visual timer which is easier to keep track of.

  - Due limitations within the code, this is only available on larger screens. However, I would like to add this feature to smaller screens in future developments


### Frogger

- Frogger includes animated obstacles which the user must avoid by moving the frog to reach the top of the canvas.

  - Users must *avoid* the moving cars.

  - Users must *use* the logs and turtles to avoid falling into the water.

  - Collision detection has been added to game to create the effect of the frog being hit by a car and/or falling into the water.

- The frog is an animated spritesheet, which users can move across the canvas with their keyboard or with swipe motions on touchscreen devices.

  - The frog animation is only activated when the input is registered via keyboard due to limitations with the code. I would like to improve on this in the future so that the animations works as desired on **all** devices, not only desktop.

- Animated Coffee Gif on game canvas - Desktop only

  - Adds visual variety to the game.

  - Provides a visual correlation to the coffee theme.

  - Promotes a positive emotional response as the gif appears happy and fun.

  - Makes Frogger more relaxed in comparison to the Memory Card game and Whack-A-Mole. In Frogger, users do not have win or lose conditions like in the previous games.

- Collision Count 

  - Every time a frog is hit by a car obstacle or falls into the water the collision count is incremented by 1.
  
  - The collision count is represented with a gravestone icon (to represent every frog that is lost) to make the user interface more visually interesting and reduce cognitive overload caused by having too much text on the screen.

- Score Count

  - Every time the user successfully reaches their frog to the top edge of the canvas the score count increments by 1.

  - The score count is represented with a set of hearts (to represent every frog saved) which makes the user interface more visually interesting and prevents cognitive overload by reducing the amount of text on the screen.

- High Score

  - A high score value is stored in the browser's local storage sytem to encourage users to replay the game.

- Start Button modal

  - Allows users to play the game once they're ready. Clicking the button would start the game timer and allow users to interact with the game board to play the game.

  - The button has a pulsing animation to incite users to click it and also confirm to users that it is indeed clickable.

  - The button is bright and vibrant to make it stand out.

- Game timer - Numbered Timer

  - Provides a clear indication to how much timer is left.

- Game timer - Progress Bar

  - Provides a visual timer which is easier to keep track of.

  - Due limitations within the code, this is only available on larger screens. However, I would like to add this feature to smaller screens in future developments


### Frogger - End Game Modal

- Logs score count

  - Tells users how many frogs they saved.

  - If less than zero, the modal will say: `"You didn't save any!"`

  - If the the score **and** collision count is zero, the modal will say: `"But you also didn't lose any of them!`

- Logs collision count

  - Tells the users how many frogs they didn't save.

  - The tone is gentle so to **not** cause a negative response from the user. The modal will say: `"only [collision score] of them didn't make it"`

  - If the collision count is less than zero the modal will say: `"And you didn't lose any of them!"`

  - If the score count is zero **and** and the collision count is zero, the modal will say: `"But you also didn't lose any of them!"`

- Logs highscore 

  - If a user did not beat the highscore the modal will say `"can you beat it next time?"` after stating the current highscore, which can encourage users to replay the game.

  - If a user beats the highscore the modal will say: `"And wow! You beat the highscore. It is now: [highscore]"`

- Arrow button to continue

  - Using an arrow icon rather than text reduces the amount of text on the screen (preventing cognitive overload) and makes for a better user experience.


### Final End Game Modal

- Envokes a positive user response by celebrating their success.

- Tempts the user to replay the game with `"How about you play the game again to beat your highscore? Who knows, perhaps the coffee will be hot this time?"`

- Dancing Coffee Gif

  - Helps produce a positive emotional response from the user and reinforces a friendly UX design. 

  - The animated gif emphaises the coffee theme running throughout the game.

  - It celebrates that the user has completed the game.

- Play Again button

  - Allows users to easily play again without needing to revisit the Homepage

- Return to Hompage 

  - Allows users to easily return to the Homepage.

  - After playing the game users may want to know more about the game's design, or may want to contact the site owner.

  -----


## Features Left to Implement

- Add the progress bar timer to smaller screens to improve on the responsive UX design.

- Improve on the frogger spritesheet animation so that it works the same for both keyboard input and touchscreen input. 


-----


## Areas of Improvement

- Improvement could be made to the hover effects for the navbar links in the homepage, as they are quite basic and are not very visually stimulating.

- Another improvement would be to find a better way to tell the users how to play Frogger, as it's controls are the most complex, without breaking the story narrative.

- If I had more time and experience I could have made the games more original and expanded on the tutorials even further.


-----


## Accessibility

- All images imported via img tags in the HTML files have been given meaningful, clear and descriptive alt attributes to conform to accessibility guidelines. 

- Most of the font size is relatively large in order to cater for audiences who have difficulties with their vision.

- Good colour contrast has been used throughout the project to ensure that all the content is readable.


-----


## Technologies Used

### Languages 

- HTML (5)
- CSS (3)
- Javascript

### Frameworks, Libraries and Programs 

- [Bootstrap 4.4.1](https://getbootstrap.com/)
  - Bootstrap was used to aid with responsiveness of the homepage and formed a foundation for styling the website.
  
- [Google Fonts](https://fonts.google.com/)
  - Google fonts was used to add visual variety to the typography and help maintain a visual theme.

- [Font Awesome 5.14](https://fontawesome.com/)
  - Font Awesome was used sparingly for adding icons or image cues to the project to employ a good UX design.

- [Bootbox JS 5.5.2](http://bootboxjs.com/)
  - Bootbox builds upon Bootstrap. It was used to style the alert box which is trigged when the contact form is submitted on the homepage.
  
- [Adobe XD](https://www.adobe.com/uk/products/xd.html)
  - Adobe XD was used to create the wireframes during the design process.
  
- [Visual Studio Code](https://code.visualstudio.com/)
  - Visual Studio Code was the software used to write the code. 
  
- [Git](https://git-scm.com/)
  - Git was used for version control by utilising the PowerShell terminal in Visual Studio Code to commit to Git and push to GitHub.
  
- [GitHub](https://github.com/)
  - GitHub is used to store the project's code after being pushed to Git. It acts as a cloud-based service to store the project’s assets and code, which means we need not rely on saving locally alone. 

- [Smartmockups - Free Product Mockup Generator](https://smartmockups.com/)
  - Smartmocks is a web-application that allows you to create free mockup images. I used it in this readme file to present a mockup image of the project.

- [Responsively App](https://responsively.app/)
  - Responsively App is DevTool software that allows you to see an instant preview of all target screens for your website in a single window, side-by-side. It was used to check the responsiveness of my site. Screenshots of this was used in the [Testing User Stories](testing.md#testing-user-stories) section of the `testing.md` file.

- [PicResize - Crop, Resize, Edit images online](https://picresize.com/)
  - PicResize is a web-application that allows you to resize images and alter their width/height and pixel size. I used PicResize to resize a variety of images in the project, such as the navbar brand, memory-game cards and mole images.

- [Asana](https://app.asana.com/0/home/1192103038725952)
  - Asana is a web and mobile application designed to help you organise, track and manage your projects. It was used to organise my project and schedule each task efficiently.

- [Autoprefixer CSS Online](https://autoprefixer.github.io/)
  - Autoprefixer is a PostCSS plugin which parses your CSS and adds vendor prefixes. It was used to prefix my main CSS file to ensure greater compatibility on a wide range of devices and browsers. 

- [Ezgif.com](https://ezgif.com/webp-to-png)
  - Ezgif is an online gif editor and image editor. It was used to edit some of the gif images that have been used throught the project.

- [Krita](https://krita.org/en/)
  - Krita is a free art software which can be downloaded on your desktop. I used Krita to make the memory-card images and the mole art in the settings menu modal.

- [Paint 3D](https://www.microsoft.com/en-gb/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab)
  - Paint 3D is a free photo editing program which is pre-installed on Windows 10. I used Paint 3D to make minor adjustments to images and remove whitespace with the cropping tool so that they were easier to minipulate with CSS.

- [ScreenToGif](https://www.screentogif.com/)
  -ScreenToGif is a user friendly screen, webcam and sketchboard recorder with an integrated editor. It was used to capture screen recording of sections of the project.

- [EmailJS](https://www.emailjs.com/)
  - EmailJS was used to add real world functionality to the contact form on the homepage. EmailJS notifies my via email when a form has been submitted.

-----

## Testing

Testing documentation can be found in a separate [testing.md](testing.md) file.


-----

## Deployment 

The website was developed using [Visual Studio Code](https://code.visualstudio.com/), while [Git](https://git-scm.com/) was used for version control - to push commits to GitHub, which hosts the repository. I deployed the website to GitHub Pages using the following steps:

### GitHub Pages 

1. Open **GitHub** in your browser and **sign in** to your GitHub account.
2. Locate the project's GitHub **repository**.
3. At the top of the project's repository (not the top of the screen) select the **'Setting'** button from the menu.
4. On the Settings, scroll down the default page until you locate the **'GitHub Pages'** section (near the bottom of the page). 
5. Under **'Source'**, click the **dropdown-menu** called 'None' and in **'select branch' choose 'master'**.)
6. Click **Save** to confirm your selection. The page will automatically refresh.
7. Scroll back down to 'GitHub Pages' and you will see a link to your deployed site.
8. You're done!

### Make a Local Clone

1. **Sign in** to your **GitHub** and locate the project's GitHub **repository**.
2. Under the repository name, click the **green 'Clone' button**.
3. To clone the repository using **HTTPS**, make sure the **HTTPS** is clicked (it will be underlined in orange) and **copy the link** provided.
4. Open **Git Bash**
5. Change your current working directory to the location where you want the cloned directory to be.
6. In the **terminal** type `git clone` and **paste the URL** you copied in step 3.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
7. Press **Enter** - your local clone is created.
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

-----

## Further Notes

- In older commit messages there is a spelling mistake in the message: **"Refractor code"** 
  - It should be `Refactor code`
  - Addressing this issue using the terminal command `git rebase -i HEAD~[number]` would imply that all the commit messages were made in one day (commit messages made between Dec 2 and Dec 10 were all moved to Dec 10 after using this command to fix the first instance of this mistake), therefore, I have chosen to leave this as there are too many commit messages to sift through.

- Return myCoffee is most optimal when played on desktop or laptop devices. Nevertheless, the game is highly reponsive and can be played on a wide range of devices easily.

-----

## Credits

### Code

- [Bootstrap 4](https://getbootstrap.com/) was used for the Homepage and Game Setting Modals. It has been used to construct the following features:
  - Mobile responsiveness through use of its grid system.
  - Responsive navbar
  - Design foundation for some buttons
  - Jumbotron in the Homepage

- [Bootbox JS](http://bootboxjs.com/) was used to style the alert box which is trigged when the contact form is submitted on the homepage. Code provided on the Bootbox documentation pages, found [here](http://bootboxjs.com/documentation.html#bb-options), was referenced to style the alert box further.

- [EmailJS](https://www.emailjs.com/) was used to add real world functionality to the contact form on the homepage. When a user submits the form, EmailJS sends the content to me via email.

- [W3Schools](https://www.w3schools.com/) was used as guidance when creating my own modals that were not influenced by Bootstrap.

- The jumbotron background image on the homepage was based upon [this source](https://coder-coder.com/background-image-opacity/")

- The parrallax scrolling effect used on the hompage was based upon [this source](https://www.digitalocean.com/community/tutorials/css-pure-css-parallax)

- Code for the Memory Game (HTML, CSS and JavaScript) was based upon [this YouTube tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek) by FreeCodeCamp.org

- Code for the Whack-A-Mole game (HTML, CSS and JavaScript) was based upon [this YouTube tutorial](https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=3) by Franks Laboratory.

- Code for the Frogger game (HTML, CSS and JavaScript) was based upon [this YouTube tutorial](https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4) by Franks Laboratory.

- The code used to shuffle the cards in the Memory Game was based upon [this code snipppet](https://jsfiddle.net/z503fjv9/)

- The code used to add touchscreen swipe controls to Frogger was written by Kirupa Chinnathambi and can be accessed [here](https://stackoverflow.com/questions/53192433/how-to-detect-swipe-in-javascript) or [here](https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm)

- To fix null errors in the console, I looked to [this Stack Overflow post](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null)

- To animate the progress bar timer, I looked to [this source](https://www.coding.academy/blog/how-to-create-a-smooth-animated-progress-bar)

- The pulsing animation for the 'Start Game' button before all games was based upon [this Codepen source](https://codepen.io/seansean11/pen/dhwzj)

- The code to make the animated clock in each game was taken from [this Codepen source](https://codepen.io/MyXoToD/pen/psLen)


### Content

- All content was written by the developer.

- However, please note that the games would not exist without the tutorial guides from the following channels:

  - [Franks Laboratory](https://www.youtube.com/channel/UCEqc149iR-ALYkGM6TG-7vQ) - [this](https://www.youtube.com/watch?v=RTb8icFiSfk&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=3) and [this](https://www.youtube.com/watch?v=GXvNEwu9cgM&list=PLYElE_rzEw_sowQGjRdvwh9eAEt62d_Eu&index=4) video were used for the project.

  - [FreeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) - [this](https://www.youtube.com/watch?v=ZniVgo8U7ek) video was used for the project.

- The majority of the web-application's media content (gifs and images) were **not** created by the developer.


### Media 

- A variety of coffee-themed gifs were taken from [here](https://giphy.com/stickers/g0HiibIiGp2oWQjMy5) and were created by the talented Dave Gamez.

- The keyboard icon images used in the help page for Frogger, were taken from [this GitHub page](https://github.com/q2apro/keyboard-keys-speedflips)

- The background images and spritesheets used in the Frogger game were taken from [Franks Laboratory's](https://www.youtube.com/channel/UCEqc149iR-ALYkGM6TG-7vQ) website, [found here](http://frankslaboratory.co.uk/frogger-game-with-vanilla-javascript/)

- The remaining gifs and images were taken from Google, apart from the memory game cards, which I made myself.


### Acknowledgements

- [CodeInstitute](https://codeinstitute.net/) for the course material, knowledge and inspiration.

- [W3Schools](https://www.w3schools.com/) for its high quality guides.

- [StackOverflow](https://stackoverflow.com/) for the perpetual source of help and inspiration.

- [Slack Community](https://slack.com/intl/en-gb/) for all the help, advice and inspiration.

- [Bootstrap](https://getbootstrap.com/) for the CSS and JQuery framework.

- [EmailJS](https://www.emailjs.com/) for adding real world functionality to the contact form.

- [Bootbox JS](http://bootboxjs.com/) for building on Bootstrap to create a nice design for the alert box.

- [FreeCodeCamp.org](https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ) for the great tutorial on how to make your own memory game.

- [Franks Laboratory](https://www.youtube.com/channel/UCEqc149iR-ALYkGM6TG-7vQ) for the amazing, high-quality tutorial videos which were used for the Whack-A-Mole game and Frogger. 

- [Franks Laboratory](https://www.youtube.com/channel/UCEqc149iR-ALYkGM6TG-7vQ) for the media content used in the Frogger game (spritesheets and background images), which he has made accessible to the public.

- I also want to thank my mentor, Can Sucullu, for his help and valuable suggestions throughout this project.

- Finally, I want to thank friends and family members for their continual support and feedback. 
