[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14041664&assignment_repo_type=AssignmentRepo)
# While loops

## Assignment: Guessing Game
In this assignment, you will create a number guessing game. When the game starts, a random number gets generated and the player must guess it correctly inorder to win.
![Example](Example/Part4.gif)

### Instructions
**Part 1: Generate random number**
1. When the game starts (when user clicks the start button), generate a random number between 1 and 100 and output it to the console.
   - Use the Math module to generate a random number between 1 and 100 and assign it to a vairable called "correctAnswer". (This has already been done for you)
   - Console log the "correctAnswer" variable. 

**Part 2: Accept player's guess**
1. After the random number is generated, prompt the player for their guess and tell them if it is right or wrong.
   - use the [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function to accept the player's guess and assign it to the pre-existing variable called "playerGuess". 
   - Console log the "playerGuess" variable
   - `if` the value of the playerGuess variable is **equal** to the correctAnswer variable, use the [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) function to tell the player "You got it!"
   - `if` the value of the playerGuess variable is **greater than** the correctAnswer variable, use the alert function to tell the player "Too high"
   - `if` the value of the playerGuess variable is **less than** the correctAnswer variable, use the alert function to tell the player  

**Part 3: Game loop**
1. Use a `while-loop` to continually prompt the player for a guess until they guess correctly.
   - Wrap the core logic of the game in a while-loop. the core logic includes prompting the player for a guess and comparing the "playerGuess" and "correctAnswer" variables with if-statements.
     - Configure the loop to continue until the player guesses the correct answer.

**Part 4: Update page**
1. After a player wins, update the page with the winning answer.
    - update the element with the id of "answer" to display the winning answer instead of a question mark
2. After a player wins, update the text on the start button to say "Play again" instead of "Start"

**Stretch: Celebration**
1. If the player gets a correct guess, trigger the celebration animation on the body of the page
    - Use the document object to select the body element and save it to variable a called "bodyHTML"
    - Access the style property on the bodyHTML variable and save it to variable called "bodyStyle"
    - Access the animation property on the bodyStyle variable and assign it a string value of "celebration 1s"


   
Take a look at the Example folder to see what the end result should look like.
