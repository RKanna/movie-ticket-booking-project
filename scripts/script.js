"use strict";

//getting and assigning input and output variables
let seatOne = document.querySelectorAll(".seat1:not(#seat-one,#seat-three)");
seatOne.forEach((element) => {
  element.classList.add("for-selected-seat");
});
let seatTwo = document.querySelectorAll(".seat1:not(#seat-one,#seat-two)");
seatTwo.forEach((element) => {
  element.classList.add("for-occupied-seat");
});
let moviePriceElement = document.getElementById("movie-price");

console.log(seatOne);
//btns

//container
let price;
moviePriceElement.addEventListener("change", () => {
  price = moviePriceElement.value;
  console.log(price);
});

let seatMain = document.querySelectorAll(".seat");

// seatMain.forEach((element) => {
//   element.addEventListener("click", () => {
//     seatMain.forEach((element) => {
//       element.classList.add("for-selected-seat");
//     });
//   });
// });

let countEl = document.getElementsByClassName("count");
let totalEl = document.getElementsByClassName("total");
let ElementCountNumber;
for (let i = 0; i < seatMain.length; i++) {
  seatMain[i].addEventListener("click", () => {
    // seatMain[i].classList.add("for-selected-seat2");
    seatMain[i].classList.toggle("for-selected-seat2");
    let ElementCountNumber = i;

    console.log(ElementCountNumber);
  });
}
// if (seatMain[i].classList.toggle === true) {
//   countEl.innerText = `${ElementCountNumber}`;
// }
const seatMainExcept = document.querySelectorAll(
  "#seat-2,#seat-3,#seat-5,#seat-6,#seat-7,#seat10,#seat11:not(.seat)"
);
seatMainExcept.forEach((element) => {
  element.classList.add("for-occupied-seat");
});
seatMainExcept.forEach((element) => {
  element.style.pointerEvents = "none";
});
console.log(seatMainExcept);
//for selecting all buttons at once

//creating function
// const init = function () {
//   modelContainer.classList.add("hidden");
// };
// init();

//adding function for close and open

//loop for querySelectorAll
