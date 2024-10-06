// Fill in for exercises!
/*
Note: The way to collect user input in JavaScript is the `prompt()` function. 
When this is used, the user can type something into the browser console, and that user input is saved as a variable.
```javascript
let age = prompt("Enter your age: "); // When the user enters their age, the input is saved to this variable 'age'
console.log("You are " + age + " years old!");
```
1. Create a function guessNumber(targetNumber) that takes a number as a parameter (targetNumber).
2. Inside the function, use a while loop to ask the user for guesses using prompt().
3. If the guess is too high, print "Too high!". If the guess is too low, print "Too low!". If the guess is correct, print "Correct!" and exit the loop.
4. Keep track of the number of guesses and print it out when the correct number is guessed.
Bonus: Add a feature that limits the number of guesses to 5. If the user doesn’t guess correctly within 5 tries, print "Game over!".
*/

function guessNumber(targetNumber){
    let count = 0
    while (True){
        count ++
        let guess = prompt("Guess a number: ")
        if (Number(guess) > targetNumber){
            console.log("too high!")
        }
        else if (Number(guess) < targetNumber){
            console.log("too low!")
        }
        else if (Number(guess) == targetNumber){
            console.log("Correct!")
            console.log("Your number of guesses was: " + String(count))
            break
        }
        if (count==5){
            console.log("Game over!")
            break
        }
    }
}