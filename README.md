*Oct 17, 2022 - Franky Jr Blondeel*


# Random Password Generator


## Overview

**Live version [here](https://safepwgenerator.netlify.app/)**

I'm currently refreshing my entire JavaScript knowledge through a course on [Scrimba](https://scrimba.com/allcourses)
The assignment was to make a simple random password generator. It basically focuses on the use of arrays and also for and if loops in JS. Quite a nice assignment to really start to master the logic.

The following were the base requirements of the assignment:
* Create a simple button to generate 2 passwords on the screen
* Create the entire thing 'from scratch', even though we are given a base array with all the characters. I did use this template as a basis. Also the design template was given. As my focus is mainly coding, and I thought the design was quite nice, I decided to follow this.
* Each of the passwords should be 15 characters long
![base requirements](https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/base-requirements.png)

The following were the stretch goals of the assignment:
* Ability to customize the pw length
* Add copy-on-click functionality
* Toggling to include or not include certain types of characters
![Stretch goals](https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/stretch-goals.png)


## Development

I took a step by step approach, making sure my logic all worked with the base requirements of this assignment.
Other than that, I looked for inspiration around me. I used to use LastPass and now use NordPass and looked there for more inspiration.

I really liked NordPass' approach and design. I wanted to build something similar.
![NordPass password generator](https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/nordpass.png)
I really like the design of that app and decided to try and create some similar looking buttons, or at least check what is possible in CSS.
On top of that, I think the slider is quite cool. I already know that it would've been quite easy to just have a text field somewhere where the user could enter the length of a password. But the slider is cooler. That led into some extra research being don on how to implement and also style that.

The design and feature-set I ended up with looks like this:
![FRBL PW generator](https://github.com/MrFranksJr/MrFranksJr/blob/main/assets/password-generator/frbl-pw-generator.png)

### Some details on the code
As per usual, I tried to create the most efficient way of doing this (without overdoing it either ;)
But basically, there's two main functions:
* collectArrays()
* generatePasswords()
The original array that was given by @perborgen was split up in 4 different arrays (capitals, numbers, special characters, regular small caps characters)

**collectArrays()** is called every time the user changes something on the page or when they click the button the screen. The function is basically a giant if statement, running through the different possible options the user can select. Whether or not too include capitals, symbols, etc...
Based on the selected options, a match is found and the appropriate arrays are merged (mergedArray), using the Spread syntax I found online. Seemed like the most appropriate.
The function also reads the length the user has set for the password and passes both parameters (the resulting array + the length of the pw) to the generatePasswords() function.

**generatePasswords()** is then called, creating two variables for both passwords. I also read the .length of the new array mergedArray, because I need that for the Math.random formula.
Both passwords are simultaneously generated within the same for-loop, and passed into the two variables.

I then push the results into the div on the page.

Lastly, I added functionality for click-to-copy. Quite simple to do it turned out, I also added like a small tool tip that turns up when hovering over the password. Also, the user gets feedback when they clicked to copy.


## Conclusion

Honestly, I again enjoyed this assignment so much. The assignment itself maybe is not anything special. But it did make me even more comfortable with some of the base concepts and syntaxes in Javascript.
The stretch goals trigger me to look beyond what is asked. To check what's out there and find inspiration. 
On top of that, the process of thinking about the problem and diving into it. Developing a different way of thinking, as a programmer. It really feels awesome to notice the progress there and being able to move quicker and more accurate.
Thanks to @perborgen and @scrimba for this journey!