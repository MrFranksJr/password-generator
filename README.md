*Oct 17, 2022 - Franky Jr Blondeel*


# Random Password Generator

## Overview

Live version [here](https://safepwgenerator.netlify.app/)

I'm currently refreshing my entire JavaScript knowledge through a course on [Scrimba](https://scrimba.com/allcourses)
The assignment was to make a simple random password generator. It basically focuses on the use of arrays and also for and if loops in JS. Quite a nice assignment to really start to master the logic.

The following were the base requirements of the assignment:
* Create a simple button to generate 2 passwords on the screen
* Create the entire thing 'from scratch', even though we are given a base array with all the characters. I did use this template as a basis.
* Each of the passwords should be 15 characters long
![base requirements](https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/base-requirements.png)
/../../../../github/docs/blob/main/assets/images/electrocat.png
https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/base-requirements.png

The following were the stretch goals of the assignment:
* Ability to customize the pw length
* Add copy-on-click functionality
* Toggling to include or not include certain types of characters.

## Rules of the Game
I'm not going to go too deep into the rules of Blackjack.
How my game works in particular though, is as follows:
* You enter your data when starting a game. You can choose however much money you hve
* You press START GAME in order to kick off
    * Starting a game will draw two random cards
    * Starting a game costs you $100
* You can draw a new card by clicking the New Card... button
* You can completely reset the game by pressing the button below
* When bust, you have the option to start a new game
* When you get Blackjack, you win $400

## Some technicalities
Making a random number generator is not the hardest thing in the world. So that's why I wanted something extra in the game.
### Make it visual
So what I did is that I really wanted to see the cards on the screen. I got some card faces from the [Google Code Archive](https://code.google.com/archive/p/vector-playing-cards/downloads).
Once the cards were downloaded, I got rid of the cards I didn't need, and all named them in a specific way, e.g.:
* king-hearts.png
* 9-spades.png
* ...
In the Javascript, I could then determine the value of the cards, just based of the naming, and count scoring like that.

### Make it Random
Now, at this point the randomization factor really became an interesting thing to tackle. I'm sure there's different ways of doing it, but I solved it like this:
* Made a big array that contained all the filenames of all cards in the deck
* I then shuffle this entire Array when the player presses 'Start Game'
    * I used the [Fisher–Yates_shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle). There's a really interesting visualization/explanation [here](https://bost.ocks.org/mike/shuffle/).
* Once the cards in the array, it's simple:
    * At the start of the game, I pick the first two cards of the Array
    * I remove them from the original array, and store them in an Array cardsOnTable
    * The process is repeated every time the user draws a cards. Basically like in real life.

### Finishing touches
So yeah, the rest is just some details, calculations, etc...
Still some things missing, I might add that in the future. Right now my objective is not to make the perfect app, but to understand and familiarize myself with certain concepts, fast.
Adding a fail state will not necessarily teach me much, rather cost me time. But still, I want to track all my todo's, just like I did with the basketball counter.

## ToDo's
Obviously, the game is far from finished, but it served as a really nice training for me to get back into JavaScript.
Some things I want to add still:
* Currently nothing happens when you have $0. So I want to implement a fail-state in the future.
* You don't get to see the dealer's hand... And that takes away the entire point of the game. You can't really win in this game, unless you exactly hit a Blackjack. And that needs to change.
* One other option I thought of is that you can press an 'end-game' button and that they would get to see the next card in the stack, to see if they would've gone bust.