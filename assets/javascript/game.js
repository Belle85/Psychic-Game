//Creates an array that lists out all of the options.
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create variable where the guessed letter will be pushed to.
var letterGuessed =[];
//Create variable to store the number of wins.
var wins = 0;
//Create variable to store the number of losses.
var losses = 0;
//Create variable to limit the number of tries.
var maxTries = 10; 
//Create variable for the computer random guesses.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Function to reset the game to 0.
function reset() {
    maxTries = 10;//Resets the number of tries to 10.
    letterGuessed = [];//Clears the letter already guessed.
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];//Computer makes another letter choice.
    document.getElementById("guessesLeft").innerHTML = maxTries;//Displays the guesses left in the HTML document.
    document.getElementById("guessed").innerHTML = letterGuessed;//Displays the letter guessed in the HTML document. 
}

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
     var userGuess = event.key;

    // Logs in the console what the computer chose for control.
    console.log("Computer guess:" + computerGuess);

    //Pushes what the user guessed.
    letterGuessed.push(userGuess);
   
    //Logs in the console what the user guessed.
    console.log(letterGuessed);

    
    //If the user guesses incorrect.
    if (userGuess != computerGuess) {
        maxTries--;//Reduces the number of tries by 1.
        if (maxTries === 0) { //When there is not more try left.
            losses++//Add one to the losses counter.
            document.getElementById("losses").innerHTML = losses;//Displays the losses in the HTML document.
            alert("GAME OVER! Try again!");//Pop up.
            reset();
        }
        document.getElementById("guessesLeft").innerHTML = maxTries;//Displays the guesses left in the HTML document.
        document.getElementById("guessed").innerHTML = letterGuessed;//Displays the letter guessed in the HTML document.
    }
    if (userGuess == computerGuess) {//If the user guesses correct.
        maxTries--;//Reduces the number of tries by 1.
        wins++;//Increases the number of wins by 1.
        document.getElementById("wins").innerHTML = wins;//Displays the wins in the HTML document.
        alert("You won! Try again!");//Pop up.
        reset();
    }

}

