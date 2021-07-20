"use strict";

//Components
import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";
import numberFrom0to52 from "./js/components/numberFrom0to52.js";
import filterFromRandomNum from "./js/components/filterFromRandomNum.js";
import random5CardDeck from "./js/components/random5CardDeck.js";

//Display
import displayCard from "./js/view/displayCard.js";
import displayValue from "./js/view/displayValue.js";
import playerSelector from "./js/view/playerSelector.js";
import generateHtmlContainer from "./js/view/generateHtmlContainer.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");
const royalHand = document.querySelector(".main__container-royal");
const select = document.querySelector(".select");

/////////////////////
////////////////////

//Create a selector
playerSelector();

//Repeat the init functions for each players choosen with the selector
const repeatForPlayer = function (selectorNumber) {
  for (let i = 1; i <= selectorNumber; i++) {
    init(randomDeck());
  }
};

/////////////
/////////////

//Controller

let array = numberFrom0to52();

const randomDeck = function () {
  const randomNum = random5CardDeck(array); //It draw 5 cards of the deck randomly

  array = filterFromRandomNum(array, randomNum); //It remove the 5 cards taken before and decrease the length of the array

  if (array.length <= 2) {
    array = numberFrom0to52();
    console.log("Stir the deck");
  } // When the deck has almost finish the cards it stir the deck

  return randomNum;
};

const init = function (arr) {
  const valueHandString = valueHand(arr); //Taken an array of random numbers from deck (randomDeck()) it returns the value of hands in string

  const valueHandText = displayValue(valueHandString); //Stamp that value on dom

  generateHtmlContainer(arr, valueHandText); // Generate a main container where it dinamically create html card with classes

  const result = randomHand(arr); //convert random numbers in cards with seed and sign

  console.log(result);

  displayCard(result); //Transform the array of hand (number + seed) in cards and display them in the container generated from generateHtmlContainer(arr, valueHandText);
};

btnGenerateCard.addEventListener("click", () => repeatForPlayer(select.value));

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
