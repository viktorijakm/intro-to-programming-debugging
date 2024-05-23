document.addEventListener("DOMContentLoaded", function () {
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);

 // set for guesses lower than 1 or higher than 99
 if (guess < 1) {
  alert("Please enter a number greater than or equal to 1.");
  return; 
} else if (guess > 99) {
  alert("Please enter a number less than or equal to 99.");
  return; 
}

  attempts++;

  // function collecting and hiding all messages
  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  } else {

  
    if (guess < targetNumber) {
      tooLowMessage.style.display = ''; //Display too low
    } else {
      tooHighMessage.style.display = ''; // corrected to too high
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  

  if (attempts === maxNumberOfAttempts) {
    maxGuessesMessage.style.display = ''; //  max guesses message
    submitButton.disabled = true;
    guessInput.disabled = true;
  }
}

  guessInput.value = '';

  resetButton.style.display = '';
}
// change in the condition of the function (<= messages.length)
function hideAllMessages() {
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    // in the function likely caused by trying to access an element at an index that does not exist.
    messages[elementIndex].style.display = 'none';
  }
}

function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);


  // Reset number of attempts to the original value (5)
  attempts = 0; // Reset attempts counter
  

  // Enable the input and submit button
  submitButton.disabled = false; //corrected typo
  guessInput.disabled = false;

  hideAllMessages();
  resetButton.style.display = 'none';
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();
})