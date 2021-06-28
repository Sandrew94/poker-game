"use strict";

import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";

import displayCard from "./js/view/displayCard.js";
import injectValue from "./js/view/displayValue.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");

//Controller

const init = function () {
  /* 
    Card Matrix
    .  2  3  4  5  6  7  8  9  T  J  Q  K  A
    C 00 01 02 03 04 05 06 07 08 09 10 11 12
    D 13 14 15 16 17 18 19 20 21 22 23 24 25
    H 26 27 28 29 30 31 32 33 34 35 36 37 38
    S 39 40 41 42 43 44 45 46 47 48 49 50 51
    */

  //Create an arr of 5 elements with random numbers from 1 to 52
  const randomNum = Array.from(Array(5), (_, i) =>
    Math.floor(Math.random() * 51 + 1)
  );

  //Taken ar array with random numbers, convert their to the card Matrix
  const result = randomHand(randomNum);

  displayCard(result); //Transform the array of hand (number + seed) in card on the screen

  injectValue(valueHand(randomNum));
};

btnGenerateCard.addEventListener("click", init);
