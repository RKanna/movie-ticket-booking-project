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

// console.log(seatOne);
//btns

//container
let price;
let seatCount = 0;
let total;
moviePriceElement.addEventListener("change", () => {
  price = moviePriceElement.value;
  total = seatCount * price;
  countEl.innerText = ` ${seatCount} `;
  totalEl.innerText = ` ₹ ${total}`;
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

let countEl = document.getElementById("count");
let totalEl = document.getElementById("total");
let ElementCountNumber;
for (let i = 0; i < seatMain.length; i++) {
  seatMain[i].addEventListener("click", () => {
    // seatMain[i].classList.add("for-selected-seat2");
    seatMain[i].classList.toggle("for-selected-seat2");
    let ElementCountNumber = i;

    // console.log(ElementCountNumber);

    let seatCount = document.querySelectorAll(
      ".seat.for-selected-seat2"
    ).length;
    console.log(seatCount);
    countEl.innerText = ` ${seatCount} `;
    total = price * seatCount;
    totalEl.innerText = ` ₹ ${total}`;
  });
}
// if (seatMain[i].classList.toggle === true) {
//   countEl.innerText = `${ElementCountNumber}`;
// }

const init = function () {
  price = moviePriceElement.value;
  console.log(price);
  seatCount = 0;
  total = seatCount * price;
  countEl.innerText = ` ${seatCount} `;
  totalEl.innerText = ` ₹ ${total}`;
};
init();
const seatMainExcept = document.querySelectorAll(
  "#seat-2,#seat-3,#seat-5,#seat-6,#seat-7,#seat10,#seat11:not(.seat)"
);
seatMainExcept.forEach((element) => {
  element.classList.add("for-occupied-seat");
});
seatMainExcept.forEach((element) => {
  element.style.pointerEvents = "none";
});
// console.log(seatMainExcept);
//for selecting all buttons at once

//creating function
// const init = function () {
//   modelContainer.classList.add("hidden");
// };
// init();

//adding function for close and open

//loop for querySelectorAll
