// ''document.querySelector(".message").textContent = "I changed it";
"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = secretNumber;
console.log(secretNumber);
let yourScore = 20;
document.querySelector(".number").textContent = "?";

/////
document.querySelector(".check").addEventListener("click", function () {
  const val1 = Number(document.querySelector(".guess").value);
  console.log(val1);
  // No Value
  if (!val1) {
    document.querySelector(".message").textContent = "No number selected!";
  }
  // if value is higher
  else if (val1 > secretNumber) {
    document.querySelector(".message").textContent = "Too high!😕";
    yourScore = yourScore - 1;
    document.querySelector(".score").textContent = yourScore;
  }
  // if value is lower
  else if (val1 < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!😟";
    yourScore = yourScore - 1;
    document.querySelector(".score").textContent = yourScore;
  }
  // when value is right
  else if (val1 === secretNumber) {
    document.querySelector(".message").textContent = "You won!🥳🎉💸";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = secretNumber;
  }
});

// Reset functionality
document.querySelector(".again").addEventListener("click", function () {
  // yourScore = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing:";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = " ";
});

// hide the correct value
