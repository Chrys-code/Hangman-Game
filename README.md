# Hangman-Game
Own implementation of hangmane game using only JS

Some methods that is used in this project:
 - The game first generates the keyboard from an array via forEach() method.
 - Chose an animal name out of an animal array with Math.random(Math.floor()) method that is stored in a new variable.
 - The new varible(animalChosen) using split() method to get every character of the animal name that is displayed as a new array using map(),
in which a statement displays every character as " _ " instead until guessed letter index is more than 0. (As the passed in letter
into the other array(guessedAnimal) will have the index of -1 in this(animalChosen) array, it will display the letter if the initial array (chosen animal passed in the variable)
includes the guessed letter)

How The Game Works Itself:
- Generate keyboard.
- Initial render for animal to be guessed using " _ " instead of characters.
- Then the game first of all using event capturing to get the value of the pressed button.
- Pressed button is pushed to guessedAnimal array and happens that is written previously.
- As the letter is displayed now in the animalChosen array, it is updated with an onclick event when a user pushes a button.
- At the end a gameOver function run that is a mistake counter that will popup an alertwindow upon the number of mistakes reach 6(maxWrongAns).
