"use strict";

//Components
import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";
import randomUniqueNum from "./js/components/randomNumNoRep.js";
import filterFromRandomNum from "./js/components/filterFromRandomNum.js";
import random5CardDeck from "./js/components/random5CardDeck.js";

//Display
import displayCard from "./js/view/displayCard.js";
import injectValue from "./js/view/displayValue.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");
const royalHand = document.querySelector(".main__container-royal");

/////////////////////
////////////////////

//Controller

let array = randomUniqueNum();

const randomDeck = function () {
  const randomNum = random5CardDeck(array); //It draw 5 cards of the deck randomly

  array = filterFromRandomNum(array, randomNum); //It remove the 5 cards taken before and decrease the length of the array

  if (array.length <= 2) {
    array = randomUniqueNum();
    console.log("Stir the deck");
  } // When the deck has almost finish the cards it stir the deck

  return randomNum;
};

const init = function (arr) {
  //Taken an array with random numbers, convert their to the Card Matrix
  //   .  2  3  4  5  6  7  8  9  T  J  Q  K  A
  //   C 00 01 02 03 04 05 06 07 08 09 10 11 12
  //   D 13 14 15 16 17 18 19 20 21 22 23 24 25
  //   H 26 27 28 29 30 31 32 33 34 35 36 37 38
  //   S 39 40 41 42 43 44 45 46 47 48 49 50 51

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
