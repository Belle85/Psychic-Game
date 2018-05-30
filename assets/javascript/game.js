//Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create variable where the guessed letter will be pushed to.
var letterGuessed =[];
//Create variable to store the number of wins.
var wins = 0;
//Create variable to store the number of losses.
var losses = 0;
//Create variable to keep track of the guesses.
var totalGuesses = 0;
//Create variable to limit the number of tries.
var maxTries = 15; 
//Create variable for the computer random guesses.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
     var userGuess = event.key;

    // Logs in the console what the computer chose for control.
    console.log("Computer guess:" + computerGuess);

    //Pushes what the user guessed
    letterGuessed.push(userGuess);
   
    //Logs in the console what the user guessed.
    console.log(letterGuessed);

    //If the user guesses wrong
    if (userGuess != computerGuess) {
        maxTries--;
        if (maxTries === 0) {
            losses++
            document.getElementById("losses").innerHTML = losses;
            alert("GAME OVER! Try again!");
        }
        totalGuesses++;
        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("guessed").innerHTML = letterGuessed;
    }
    if (userGuess == computerGuess) {
        maxTries--;
        totalGuesses++;
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("You won! Try again!");
    }
}

