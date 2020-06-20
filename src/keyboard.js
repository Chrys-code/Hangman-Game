// Variables
const keyboardCreate = document.getElementsByClassName("keyboard-cont")[0];

// Buttons to be created
export const buttons = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "z",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "y",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

// Create button function
export function createKeyboardBtn(btn) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "keyboard-btns");
  newDiv.setAttribute("id", `${btn}`);
  keyboardCreate.appendChild(newDiv);
  newDiv.innerHTML = btn;
}

// Event capturing that returns innerText of pressed btn
export function guessBtn(e) {
  const targetBtn = e.target;
  if (targetBtn.classList != "keyboard-cont") {
    targetBtn.style.opacity = "0.2";
    const letterGuessed = targetBtn.innerText;
    return letterGuessed;
  }
}
