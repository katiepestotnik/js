# JavaScript Objects Lab: Guess The Number Game

<br>
<br>
<br>

## Intro

This lab will provide you with practice working with JavaScript objects, plus some additional practice working with arrays.

This lab builds upon the `game` object that was started in the Intro to JS Objects lesson.

<br>
<br>
<br>

### Lab Setup

For this lesson, create a directory called `"javascript-objects-lab"`. Inside it, create a file called `objects-lab.js`.



#### Starter Object provided below



   ```javascript
   const game = {
     title: "Guess the Number!",
     biggestNum: 100,
     smallestNum: 1,
     secretNum: null,
     play: function () {
       this.secretNum =
         Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) +
         this.smallestNum
     },
   }
   ```




<br>
<br>
<br>

## Features

- Allow the player to continually be prompted to enter their guess of what the secret number is until they guess correctly

- If the player has an incorrect guess, display an alert message that informs the player:

  - Whether their guess is too high, or too low, and...
  - A list of all the previously guessed numbers (without showing the square brackets of an array)

- If the player has guessed the secret number:
  - Display an alert message that congrats the player and informs them of how many guesses they took
  - End the game play

<br>
<br>
<br>

## Tasks

Completing the following tasks will result in a working _Guess the Number_ game:

1. Add a `prevGuesses` property to the `game` object initialized to an empty array

2. Add a `getGuess` method to `game` that prompts the player to enter a guess with a message formatted as: _Enter a guess between [smallestNum] and [biggestNum]:_. Hint - use a template literal for the prompt message

3. Ensure that the `getGuess` method returns a value that is:

   - Is a _number_, not a _string_
   - Is between `smallestNum` and `biggestNum`, inclusive
   - Hints:
     - This is a great use case for a `while` loop
     - `parseInt` returns `NaN` if the string cannot be parsed into a number

4. From within the `play` method, invoke the `getGuess` method and add the new guess to the `prevGuesses` array

5. Add a `render` method to `game` that `play` will call after a guess has been made that alerts:

   - If the secret has been guessed:<br>
     ```shell
     Congrats! You guessed the number in [x] guesses!
     ```
   - Otherwise:<br>
     ```shell
     Your guess is too [high|low]
     Previous guesses: x, x, x, x
     ```
   - Hints:
     - `render` won't be able to access any of `play`'s local variables, e.g., `guess`, so be sure pass `render` any arguments as needed
     - Template literals not only have interpolation, they honor whitespace - including line breaks!
     - The list of previous guesses can be generated using the array `join` method

6. The `play` method should end (`return`) when the guess matches `secretNum`

<br>
<br>
<br>

## Bonus

- When `play` is run, immediately prompt the player to enter the smallest and biggest numbers instead of having them pre-set