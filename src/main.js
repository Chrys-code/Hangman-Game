import { createKeyboardBtn, buttons, guessBtn } from "./keyboard.js";

import {
  randomAnimal,
  animals,
  animalToGuess,
  guessedAnimal,
  animalChosen,
} from "./animals.js";

// Variables
const mistakes = document.getElementsByTagName("spam")[1];
const keyboard = document.getElementsByClassName("keyboard-cont")[0];
const resetBtn = document.getElementsByTagName("button")[0];
let maxWrongAns = 6;
let wrongAns = 0;

//Event Listeners
window.addEventListener("DOMContentLoaded", render);
keyboard.addEventListener("click", game);
resetBtn.addEventListener("click", reset);

//Funcions
// Main function
function game(e) {
  const guess = guessBtn(e);

  if (guessedAnimal) {
    guessedAnimal.push(guess);
  }

  animalToGuess();
  gameOver(guess);
}

// Render keyboard, animal to be guessed
function render() {
  buttons.forEach(createKeyboardBtn);
  randomAnimal(animals);
  animalToGuess();
}

// GameOver
function gameOver(guess) {
  if (!animalChosen.includes(guess)) {
    wrongAns++;
    mistakes.innerText = wrongAns;
  }

  if (wrongAns > maxWrongAns) {
    if (confirm("You lost. Press OK to restart")) {
      window.location = "/";
    }
    return;
  }
}

// Reset
function reset() {
  window.location = "/";
}
