# Quizzically
## Introduction

Welcome to Quizzically, a general knowledge quiz with three degrees of difficulty: **easy, medium and hard**. This quiz is suitable for anyone above the age of 5, and is an interactive website that allows the user to select the correct answer out of **4 multiple choices**. 

![Screen Responsiveness](docs/wireframes/responsiveness-screen.jpg "Screen Responsiveness")
---
## Table of Contents

- [Quizzically](#quizzically)
  * [Table of Contents](#table-of-contents)
  * [UX (user experience)](#ux--user-experience-)
    + [Goals](#goals)
    + [User's Stories](#user-s-stories)
    + [Site Owner's Goals](#site-owner-s-goals)
    + [Expectation](#expectation)
    + [Requirements](#requirements)
  * [Design](#design)
    + [Icon](#icon)
    + [Font](#font)
    + [Colour Scheme](#colour-scheme)
    + [Breakpoints](#breakpoints)
    + [Wireframes](#wireframes)
  * [Features](#features)
    + [Header](#header)
    + [Home Screen](#home-screen)
    + [Difficulty Buttons](#difficulty-buttons)
    + [Footer](#footer)
    + [Quiz screen](#quiz-screen)
    + [HUD](#hud)
    + [Question and Answers](#question-and-answers)
    + [Quiz Buttons](#quiz-buttons)
    + [Summary screen](#summary-screen)
    + [Icons](#icons)
  * [Bug Fixes](#bug-fixes)
  * [Unfixable bug](#unfixable-bug)
  * [Potential Future Additions](#potential-future-additions)
  * [Technologies used](#technologies-used)
    + [Languages](#languages)
    + [Libraries](#libraries)
    + [Tools](#tools)
  * [Testing](#testing)
    + [W3C CSS validator](#w3c-css-validator)
    + [W3C HTML validator](#w3c-html-validator)
    + [Jshint validation](#jshint-validation)
    + [Lighthouse testing](#lighthouse-testing)
  * [Concluding statements](#concluding-statements)
  * [Deployments](#deployments)
  * [Credits](#credits)
  * [Inspirations](#inspirations)

## UX (user experience)

### Goals
* Aesthetic website.
* Interactive quiz.
* 3 levels of difficulty in questions.
* Valuable and accurate content.
* Scores to be presented. 

### User's Stories
* As a user, I want to be able to pick my required level of difficulty. 
* As a user, I want to be able to be able to see tally of correct answers.
* As a user, I want to be able to be able to see if my answer is incorrect when submitted. 
* As a user, I want to be able to reset my quiz and pick different degrees of difficulty.
* As a user, I want to be able to retry a quiz and not having the exact same questions again.

### Site Owner's Goals
* I want to be able to provide challenge user's with the questions. 
* I want to entice the user to visit and stay on the page.
* I want to provide a playful and enjoyable experience for the user. 
* I want to offer the user an interactive way to select the answer. 

### Expectation
* I expect visibility of a tally of correct answers. 
* I expect multiple choice answers to be presented to the user, one of which is correct.
* I expect the end game button to function correctly to get to the end screen prior to finishing the questions.
* I expect contrasting elements to stand out when compared to the background. 
* I expect when the logo is clicked, the page is refreshed. 

### Requirements
* The quiz must present questions according to the difficulty level selected.
* The quiz must tally the score of correct answers. 
* The page must be easy to read.
* The quiz must be interactive and have effects when answers are hovered over.
* All transitions of the page must be consistent throughout.

---
## Design

### Icon
There will two types of icons used for this webpage: 
* [Favicon](https://favicon.io/ "Favicon") will be used as a website identifier, this identifier will be visible on the tab and if the website is bookmarked. A favicon is important as it will give the brand recognition and therefore will make the page more identifiable. 
* [FontAwesome](https://fontawesome.com/ "Font Awesome") will be used for the three categories of difficulty. Furthermore, universal icons will be used meaning the overall user experience will be improved. 

### Font
[Google Fonts](https://fonts.google.com/ "Google Fonts") was used to identify which font would best suit a quiz show. I decided to use the **Rubik** font as it's clear, modern and simplistic. This font will be used for all elements.

### Colour Scheme
The below colour scheme was generated using [Coolor](https://coolors.co/ "Coolers"). Mild and calming colours are used in this quiz as it provides a welcoming feel for the user. Furthermore Complimentary colours are used throughout to marry all the colours together. 

![Colour Scheme](docs/screenshots/ColourScheme.png "Colour Scheme")

| Colour  | Description |
| ------  | --- |
| #463F3A | This colour will be used for the header bar |
| #8A817C | This colour will be used for the all buttons |
| #040303 | This colour will be used for the text within the quiz. |
| #E0AFA0 | This colour will be used for the answer box. |
| #F4F3EE | This colour will be used for the background and as contrasting text. |
| #256125 | This colour will be used to indicate that the user has answered the question correctly. |
| #d31717 | This colour will be used to indicate that the user has answered the quesiton incorrectly. |


### Breakpoints
No particular breakpoints will be used in the media queries however, the website is responsive to a minimum of **320px**. 


### Wireframes
Three wireframes shown below are examples of what the content of the page will look like when displayed on **large** and **small** screens. The page will be designed in order to be responsive to all sizes and therefore the large screen and medium screen will exhibit the same presentation with proportional scale. Both wireframes were created using 

[Mockplus RP](https://www.mockplus.com/mockplus-rp "Mockplus RP").

[Large/Medium Screen](docs/wireframes/large-screen.jpg "Large/Medium Screen")

[Small Screen](docs/wireframes/small-screen.jpg "Small Screen")

---
## Features

### Header
* The header is a simple logo with contrasting colours to the rest of the page to make it stand out. Darker colours are used for the background to engage the user in the website and shows a clear distrinction as to what the website is about. 
* The quizzically logo is also designed to return the user to the home screen as this is the most common practise amonst most modern websites and therefore will be intuitive for the user.
* This header is consistent throughout the quiz for a better user experience. 

![Header](docs/screenshots/header.jpg "Header") 

### Home Screen
The following image is a screenshot of the home screen in desktop view with a hover effect. 
* The overall theme is clearly visible as being in the brown and neutral shades.
* The home screen is responsive when loaded in small, large or medium screen sizes. 

![Home screen desktop view](docs/screenshots/home-screen-desktop.jpg "Home screen desktop view")

The following image is a screenshot of the home screen in mobile view.

![Home screen mobile view](docs/screenshots/home-screen-mobile.jpg "Home screen mobile view")

### Difficulty Buttons
* Another feature involved in the home screen are 3 buttons with **easy, medium and hard** settings. This means that the user can pick the difficulty they require and the quiz screen will be started accordingly.
* These buttons have a hover effect as well as a transform effect to feedback to the user that the button has been clicked. 

![Difficulty Buttons](docs/screenshots/difficulty.jpg "Difficulty Buttons")

### Footer
* The footer is present to give the user a finishing touch to the website and as the same theme is followed, it allows for a natural end to the page.
* The copy right information of the quiz is presented here and is consistent throughout the quiz.

![Footer](docs/screenshots/footer.jpg "Footer")

### Quiz screen
The following image is a screenshot of the quiz screen in desktop view.
* The theme of the website is followed in the quiz screen for consistency. 

![Quiz screen desktop view](docs/screenshots/game-screen-desktop.jpg "Quiz screen desktop view")

The following image is a screenshot of the quiz screen in mobile view.

![Quiz screen mobile view](docs/screenshots/game-screen-mobile.jpg "Quiz screen mobile view")

### HUD
* A heads up display presents the question progress, difficulty of questions and score tracker. This enables the user to have constant visibility and a competitive spirit is created.
* The HUD is in a dark font colour to make it stand out of the page.

![HUD](docs/screenshots/headsupdisplay.jpg "HUD")

### Question and Answers
* The questions are displayed in a dark font colour to stand out from the background so that the readability of the question is improved.
* All questions are fetched by using an API and is based on difficulty selected by the user.
* The answers are presented in a box with a pink tone, this easily distinguishes the answers to the rest of the quiz screen.
* For user response, when an answer is clicked, if the answer is correct then the answer box is coloured in green with white font for legibility. 
* When the answer is incorrect the answer box is coloured in red with white font also for improved legibility.

![Question and Answers](docs/screenshots/questionsandanswers.jpg "Questions and Answers")

The following image is a screenshot of the quiz when a correct answer is selected. 
![Quiz screen correct answer](docs/screenshots/game-screen-correct.jpg "Quiz screen correct answer")

The following image is a screenshot of the quiz when an incorrect answer is selected.
![Quiz screen incorrect answer](docs/screenshots/game-screen-incorrect.jpg "Quiz screen incorrect answer") 

### Quiz Buttons
* Finally the last feature of the quiz screen is a button for the home screen and a button to end the game. The home screen button will allow the user to go back to the home page, the end game button will allow the user to go to the summary screen prior to finishing the game. This enables the user to interact with the quiz effectively.  
* A hover effect is added to both buttons to increase the the user experience of the quiz.

![Quiz Buttons](docs/screenshots/homeandendbtn.jpg "Quiz Buttons")

### Summary screen
* The following image is a screenshot of the summary screen in desktop view with a hover effect on the buttons. 
* The features present on this screen are results presented according to the score obtained by the user. The responses are displayed below. 

![Summary screen desktop view](docs/screenshots/summary-screen-desktop.jpg "Summary screen desktop view")

* The following image are screenshots of the summary screen in mobile view as well as with the responsive feedback from the score obtained. 
* The first image (left) is when a low score < 3 is achieved 
* The second image (middle) is when a medium score of < 7 is achieved. 
* Finally any score achieved above 7 is presented as shown below (right).

![Summary screen mobile and responses](docs/screenshots/summary-screen-dispaly.jpg "Summary screen mobile and responses")

### Icons
The last feature in the quiz is the icons at the end in the summary screen. 
* Social media buttons are also presented with the home page button. 
* The social media icons enable the user to follow the relevant social media websites and potentially share their score. 
* The home page allows the user to restart the quiz with either a different difficulty or try to beat their own previous score. 

![Icons](docs/screenshots/socialmedia.jpg "Icons")

## Bug Fixes
| Bug detected | Action |
|--|--|
| When testing using a mobile device, the hover colour of answers clicked remained active | Hover effects and properties were added to media query. |
| Outer parts of the box when clicked doesn't register as a click to the answer | Upon investigation it was discovered that it was due to the transform effect added, this was changed to make it still feel like a button is being clicked but make sure even if the outer most elements are chosen, the click is still registered.  |
| Difficulty buttons not appearing in the **Rubik** font | Font family was additionally added to the difficulty button css. |

## Unfixable bug
* When testing the quiz, it was noted that the action of clicking answers were not being registered. This bug occurred **twice** and was not observed again. The script.js file was reviewed multiple times and the root cause of this bug could not be identified. 

## Potential Future Additions
* With more resource and time, I would like to add a feature whereby when the incorrect answer is selected, the correct answer is also shown.
* With more resource and time, I would like to add more category specific questions to the quiz.
* With more resource and time, I would like to add an interface whereby scores can be stored and shared with others
---
## Technologies used
### Languages
* HTML
* CSS
* JavaScript
### Libraries
* [Fontawesome](https://fontawesome.com/ "Font Awesome")
* [Google Fonts](https://fonts.google.com/ "Google Fonts")
### Tools
* [Coolers](https://coolors.co/ "Coolors")
* [Mockplus RP](https://www.mockplus.com/mockplus-rp "Mockplus RP")
* [Git](https://git-scm.com/ "Git")
* [GitHub](https://github.com/ "GitHub")
* [GitPod](https://www.gitpod.io/ "GitPod")

---
## Testing
| Testing |Outcome | Pass or Fail |
|--|--|--|
| Initiating game by clicking **Easy** button | Easy quiz game started. | Pass |
| Initiating game by clicking **Medium** button | Medium quiz game started. | Pass |
| Initiating game by clicking **Hard** button | Hard quiz game started. | Pass |
| Hover over all **difficulty** buttons | Hover colour change observed | Pass |
| In developer mode, **change screen sizes** while in **home page** | Home page is responsive and legible | Pass |
| Clicking **home** button on all **questions** in each difficulty | Home page loaded. | Pass |
| Clicking **Quizzically! logo** on every **question** in each difficulty | Home page loaded. | Pass |
| Clicking **end game** button on all **questions** in each difficulty. | Summary screen displayed | Pass |
| Hovering **over home** and **end game** buttons | White coloured hover observed | Pass |
| Upon progressing through the quiz, check the **HUD** response | HUD in all difficulties were responsive. | Pass |
| Hover over all **answer boxes** | Hover colour change observed | Pass |
| Click any **incorrect** answer in each question across all difficulties | Answer box colour changed to red. | Pass |
| Click any **correct** answer in each question across all difficulties | Answer box colour changed to green. | Pass |
| Click answers **multiple times** prior to new question being loaded | No response | Pass |
| In developer mode, **change screen sizes** while in **game screen** for all questions and difficulties | Game screen is responsive and legible | Pass |
| Complete **all questions** in the quiz | Summary screen is loaded | Pass |
| Score from a range of **0 to 10** in the game | Summary screen score is the number of questions answered correctly. | Pass |
| Complete the quiz and obtain a result of **< 3** | Feedback of quiz is appropriate | Pass |
| Complete the quiz and obtain a result of **< 7** | Feedback of quiz is appropriate | Pass |
| Complete the quiz and obtain a result of **> 7** | Feedback of quiz is appropriate | Pass |
| Hover over all social media icons | White hover colour observed | Pass |
| Click each social media icon | New tab opened with the correct website | Pass |
| Clicking **home** button on the **summary** screen | Home page loaded. | Pass |
| Clicking **Quizzically! logo** on the **summary** screen | Home page loaded. | Pass |
| In developer mode, **change screen sizes** while in **summary screen** | Summary screen is responsive and legible | Pass |
| Click **any** button in the quiz | animation of size transform observed | Pass |
| **Hover** over all buttons in the quiz | Mouse tranformed to a pointer | Pass |

### W3C CSS validator

![CSS validation testing](docs/screenshots/css-testing.png "CSS Validation testing")

### W3C HTML validator

![HTML validation testing](docs/screenshots/html-testing.jpg "HTML validation testing")

### Jshint validation

![JavaScript validation testing](docs/screenshots/js-testing.jpg "JavaScript validation testing")

### Lighthouse testing

Desktop lighthouse Testing

![Desktop lighthouse testing](docs/screenshots/lighthouse-desktop.jpg "Desktop lighthouse testing")

Mobile lighthouse Testing

![Mobile lighthouse testing](docs/screenshots/lighthouse-mobile.jpg "Mobile lighthouse testing")

As seen above, all testing has successfully passed all requirements and validation with no errors dispalyed. 

## Concluding statements
All user experience aspects described at the start of this readme has been met. The quiz is interactive, responsive and easy on the eye. The user is left to want more after finishing their first game with either a harder difficulty or to beat their own score. As the developer, I found that even **easy** is pretty difficult for me, all it means is that I need to brush up on my general knowledge. 

## Deployments
Post completion of coding, the project was added, committed and pushed to github. The github repository was made live completing the following steps:

* Click on the **project repository**.

* Then click on the **settings** section.

* Then select **pages** under the code and automation section in the side navigation bar.

* Change the source to **deplay from a brand**.

* Select the branch `Main/ (root)` and press **save**.

* The website is live on the following link: `https://YOURUSERNAME.github.io/YOURPROJECTNAME/`

* Any future changes can be completed by **adding**, **committing** and **pushing** updates to github.
---
## Credits
* [Simen Daehlin](https://www.linkedin.com/in/simendaehlin/ "Simen Daehlin") - Assistance throughout the project
* [James Q Quick](https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&ab_channel=JamesQQuick "James Q Quick") - used as guidance into how to build a quiz.
* [Ania Kub??w](https://www.youtube.com/watch?v=zgHim4ZDpZY&t=1908s&ab_channel=CodewithAniaKub%C3%B3w "Ania Kub??w") - used as a guide to learn how to fetch API.
* [Geek Probin](https://www.youtube.com/watch?v=-cX5jnQgqSM&t=418s&ab_channel=GeekProbin "Geek Probin") - used as a guide to understand how to check if answers were correct.
---
## Inspirations
* [JavaScript Quiz](https://javascriptquiz.com/ "JavaScript Quiz")
* [Lovatts puzzles](https://lovattspuzzles.com/online-puzzles-competitions/ultimate-online-trivia-quiz/ "JavaScript Quiz")