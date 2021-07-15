"use strict";

import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";
import randomUniqueNum from "./js/components/randomNumNoRep.js";

import displayCard from "./js/view/displayCard.js";
import injectValue from "./js/view/displayValue.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");
const royalHand = document.querySelector(".main__container-royal");

//Controller

const random5CardDeck = function (deckArr) {
  const randomNumbers = deckArr
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  return randomNumbers;
};

const filterFromRandomNum = function (deck, randomNumbers) {
  return deck.filter((val) => !randomNumbers.includes(val));
};

let array = randomUniqueNum();

const randomDeck = function () {
  const randomNum = random5CardDeck(array);

  array = filterFromRandomNum(array, randomNum);

  if (array.length <= 2) array = randomUniqueNum(); // Rimescola il mazzo

  return randomNum;
};

const init = function (arr) {
  //Taken ar array with random numbers, convert their to the card Matrix
  const result = randomHand(arr);

  displayCard(result); //Transform the array of hand (number + seed) in card on the screen

  //inject value
  injectValue(valueHand(arr));
};

btnGenerateCard.addEventListener("click", () => init(randomDeck()));

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
