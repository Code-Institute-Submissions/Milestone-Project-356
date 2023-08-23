# Welcome to Travel Hub: Test your global savvy with our Travel-Themed Quiz!

## What is Travel Hub?

Travel Hub is more than just a website; it's a virtual destination where you can embark on a quest to test and expand your knowledge about various travel-related topics. Whether you're a globetrotting adventurer or someone dreaming of your next getaway, Travel Hub offers an immersive and educational experience that allows you to explore the world from the comfort of your own screen.

## Project Goals

The purpose behind this project was to open the mind of the user about Travel, testing their knowledge and allowing them to learn along the way whilst being able to have a challenge.

## Travel Hub Site Goals

To inspire all indviduals and give them an unforgettable travel/quiz insight and experience.

## User Goals

The website is aimed at those interested in quizzes and travel. (More information here).[User Stories](#user-stories)

* Avid quizzer looking for a new quiz.
* Avid traveller looking for a fun interactive way to broaden their knowledge and gain travel inspiration.
* Someone completely new to the world of travel and quizzes.

## Research

I conducted alot of online research regarding what other quizzes offer and how user friendly they are. This included color schemes, layout and features. I made notes of what worked well and what didn't work so well.

[Sporcle](https://www.sporcle.com/) | [Fun Trivia](https://www.funtrivia.com/quizzes/) | [BuzzFeed Quizzes](https://www.buzzfeed.com/uk/quizzes)

### Key Takeaways

* Create a clean and concise quiz.
* Website should get straight to the point.
* The colors used should promote happiness with a sense of travel.
* Interactivety is key.
* Keep good contrast so the quiz is easily readable.
* Make everything accesible and easy to navigate.
* Explain what the website is with a concise landing page.

## User Stories

User Story 1: As a keen traveller I want to:
* Unearth captivating facts and insights about travel.
* Immerse myself in a varied subjects about travel.
* Have an engaging experience whilst travelling to new destinations.

User Story 2: As an avid quizzer I want to:
* Challenge myself with a variety of travel-related questions.
* Learn interesting trivia and fun facts about different cultures, landmarks, and travel destinations.
* Enjoy an interactive and visually appealing quiz interface that keeps me engaged and entertained.

User Story 3: As a newcomer to both travel and quizzes, I want to:
* Discover the wonders of travel by learning basic and intriguing facts about different places.
* Experience an easy-to-understand and beginner-friendly approach to exploring the world through quizzes.
* Engage with a user-friendly and visually supportive quiz platform that helps me gradually develop my knowledge about various travel-related topics.

# Features

## Hero Text and Quote

* This appears on the home page.
* It is in large black text to stand out to the user.
* Underneath this is a quote explaining to the user what the site is and in a fun and engaging format.
* The Hero text and Quote is fully responsive from a mobile phone all the way to the largest computer!

## Quiz Modal and Quiz Rules button

* In the centre of the home page underneath the Hero text and Quote sits the "View Quiz Rules" button.
* The button sits in the centre of the page as a black button to provide contrast against the background for ease of visibility.
* The button is fully responsive with the button text stacking and staying within the button when being viewed on mobiles to large computer screens.
* It has been displayed in a button to prompt the user to click it allowing them to see the rules within the modal.
* This modal contains all the rules you need to know before embarking on the Travel Hub quiz!
* The modal sits above all the home page content and can be exited by clicking outside of the modal or the close icon in the top right of the modal.
* I made the background of the modal white with the text being black to allow the user to easily read the rules of the quiz.
* The modal is fully responsive and it contains the start quiz button which follows the same styling and the Quiz Rules button for continuity.
* Once the user has read and understood the rules, the quiz will start immediately and the one minute timer will begin.

## Main Quiz

* The quiz is at the heart of the Travel Hub. The quiz is fully interactive containing many features within.

### Quiz Features

* Home button to return home and leave the quiz to access more features:
* Countdown timer: This timer begins as soon as the user selects "Start Quiz!". It's a race against the clock to answer all 15 questions before the timer hits zero. If this happens the quiz ends and the user will be displayed will their final score.
* Question counter: So the user can focus solely on the quiz a question counter has been added to increment from 1 - 15 everytime a question is answered.
* Questions: The quiz contains 15 questions which are randomized everytime the user starts the quiz! These include a variety of challenging questions.
* Answers: Here we have the choices, choose carefully as once you submit there is no going back. The user has the choice of four potential answers.
* Next button: This button can only be selected once an answer has been chosen. 
* Final score and play again button: Once the timer ends or the user has answered all the questions they will be displayed with a final screen which shows their score out of 15 and the option to play again!

## Future Features

Some additional features I would like to add in the future are as follows:
* Maze game.
* Tile matching game.
As the website is set up as a Hub. The landing page acts as an area for future games to be added. 

# Design and structure

## Structure

The site is simple and made up of a landing page and the quiz page.

* Landing Page - This includes a short and snappy header telling the user what the page is. Along with a button to explain the quiz further.
* Quiz Page - This includes the main quiz. Everything is centered in a responsive container. This page also houses the play again feature and return home feature once the quiz has concluded.

### Colors

* After my online research I wanted to make a clean and concise quiz. I chose to use a bright yellow as the main color for my quiz website to promote happiness and creativity. 
* My second color choice was black and this is a big contrast to yellow and it allows the user to clearly see questions and rules regarding the main part of the site which is the quiz. 
* Finally to contrast the black I used white so the user can clearly see where they need to click to navigate onto the quiz and through the questions.

### Fonts 

I imported [Google Fonts](https://fonts.google.com/) using the [Montserrat](https://fonts.google.com/specimen/Montserrat) font. I used this for the whole site for continuity and how easy it is to read.

### Languages Used

[HTML](https://www.w3schools.com/html/html_intro.asp), [CSS](https://www.w3schools.com/Css/) and [Javacript](https://www.w3schools.com/Js/) were used to create this project. Information from w3schools is provided via the links.

### Tools

* [Git](https://git-scm.com/)
Used for version control via GitPod by using the terminal to Git and Push to GitHub.
* [GitHub](https://github.com/)
Used to store the project code after being created in GitPod / Git.
* [Gitpod](https://www.gitpod.io/)
Used to create, edit & preview the project's code.
* [Google Fonts](https://fonts.google.com/)
Used to select & import the fonts to the project.

# Testing 

## HTML Validation

[HTML Validator](https://validator.w3.org/) The HTML pages were run through a HTML Validator.
<details><summary>Landing Page</summary><img src=""></details>
<details><summary>Quiz Page</summary><img src=""></details>

### Errors

Errors I encountered were recitified and noted in commit messages. Issue I had were:
* Using a br element within an ol element. This threw an error stating a br element cannot be a child of ol element.
* Secondly as I did not need anything in my h2 element for the questions. As this was being filled using Javascript. The Validator threw an error saying the value was empty. 
* Thirdly I made the error having my script src for my JS files outside of my body element, thus showing an error.

### Fixes

* The first issue was fixed by removing the br element from my ol and using CSS styling to add padding-bottom to my list items.
* Secondly I fixed the issue by adding quotation marks just to add something in there as mentioned Javascript was being used to add the questions.
* I fixed the third issue by adding my script src inside the body element at the bottom after all other HTML code.

## CSS Validation

[CSS Validator](https://jigsaw.w3.org/css-validator/) The CSS page was run through a CSS Validator.
<details><summary>Stylesheet</summary><img src=""></details>

### Errors

I ran into no errors within my CSS file as I made sure to write quality code using:
* Consistent naming convention
* Organising the code into the order of the page flow.
* Using concise and appropriate comments to outline what the code is doing and to what.
Making sure I followed the above meant I did not need to fix any issues.

## JS Validation

[JS Validator](https://jshint.com/) The JS pages was run through a JS Validator.
<details><summary>modal.js</summary><img src=""></details>
<details><summary>questions.js</summary><img src=""></details>
<details><summary>quiz.js</summary><img src=""></details>

### Errors

I ran into no issues with my modal.js file. Issues that did occur were:
* Had an issue with my quiz.js file where the timerInterval variable was undefined.
* Seecondly had an issue with the quizData variable being undefined in both quiz and questions.js.

### Fixes

* The first issue was fixed by creating a let variable containing timerInterval.
* The second issue remains as the two files are both over 100 lines of code I wanted to keep them seperate for readability. The quiz runs smoothly with no issues and calls upon the quizData faultlessly.
The validator returned no issues with my code other than an undefined variable.

## Responsiveness

The site was tested on the following devices:
* Asus Vivobook Book Pro 16"
* Samsung S23 Ultra
* Samsung S20
* Acer Chromebook 14"
* Google Deveoloper tools. Utilizing all dimensions including the responsive option.