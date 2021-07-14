"use strict";

import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";
import randomNumFunc from "./js/components/randomNumbers.js";

import displayCard from "./js/view/displayCard.js";
import injectValue from "./js/view/displayValue.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");
const royalHand = document.querySelector(".main__container-royal");

//Controller

const init = function (arr) {
  //Taken ar array with random numbers, convert their to the card Matrix
  const result = randomHand(arr);

  displayCard(result); //Transform the array of hand (number + seed) in card on the screen

  injectValue(valueHand(arr));
};

btnGenerateCard.addEventListener("click", () => init(randomNumFunc(5, 51)));

/////////////
/////////////
/////////////

//SIMULATE ROYAL FLUSH HAND'S

royalHand.addEventListener("click", () => {
  const allTypeRoyal = [
    [8, 9, 10, 11, 12],
    [21, 22, 23, 24, 25],
    [34, 35, 36, 37, 38],
    [47, 48, 49, 50, 51],
  ];

  allTypeRoyal.map((_, idx) => {
    const randomVal = Math.floor(Math.random() * 4);

    if (randomVal === idx) return init(Object.values(allTypeRoyal)[idx]);
  });
});
