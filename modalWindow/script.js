"use strict";

const showModal1 = document.querySelectorAll(".show-modal");
const modalHidden = document.querySelector(".modal");
const overlayHidden = document.querySelector(".overlay");
console.log(showModal1);

for (let i = 0; i < showModal1.length; i++)
  showModal1[i].addEventListener("click", function () {
    console.log("button clicked");
    modalHidden.classList.remove("hidden");
    overlayHidden.classList.remove("hidden");
  });

document.querySelector(".close-modal").addEventListener("click", function () {
  modalHidden.classList.add("hidden");
  overlayHidden.classList.add("hidden");
});

overlayHidden.addEventListener("click", function () {
  modalHidden.classList.add("hidden");
  overlayHidden.classList.add("hidden");
});
