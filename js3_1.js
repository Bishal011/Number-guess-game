// generate the result
let gameResult = document.getElementById("gameResult");
// input by the user
let userInput = document.getElementById("userInput");
// generate a random number
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {

    // access the user entered value (as the user input is a string so convert to integer)
    let guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    // compare user guess with random number 
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    
    else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
  }
  else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";
  }
  
  else {
        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";
  }
}