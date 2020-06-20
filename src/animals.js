// Variables
const guess = document.getElementsByTagName("spam")[0];
export let animalChosen = "";
let wordStat = null;
export const guessedAnimal = [];

// Animals to be guessed
export const animals = [
  "cat",
  "dog",
  "horse",
  "ceetah",
  "pig",
  "fish",
  "rabbit",
  "raccoon",
  "cow",
];

// Get random animal to be guessed
export function randomAnimal(animals) {
  animalChosen = animals[Math.floor(Math.random() * animals.length)];
  console.log(animalChosen);
}

// Write out animal with replaced letters
export function animalToGuess() {
  wordStat = animalChosen
    .split("")
    .map((letter) => (guessedAnimal.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  guess.innerHTML = wordStat;
}
