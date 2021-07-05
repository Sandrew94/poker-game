"use strict";

import randomHand from "./js/components/randomHand.js";
import valueHand from "./js/components/cardValue.js";

import displayCard from "./js/view/displayCard.js";
import injectValue from "./js/view/displayValue.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");
const royalHand = document.querySelector(".main__container-royal");

//Controller

const init = function () {
  //Create an arr of 5 elements with random numbers from 1 to 52
  const randomNum = Array.from(Array(5), (_, i) =>
    Math.floor(Math.random() * 51 + 1)
  );

  //Taken ar array with random numbers, convert their to the card Matrix
  const result = randomHand(randomNum);

  displayCard(result); //Transform the array of hand (number + seed) in card on the screen

  injectValue(valueHand(randomNum).rankDescription);

  valueHand(randomNum);

  ///////////

  const tryRandomHand = valueHand(randomNum).rankDescription;

  if (tryRandomHand === "Royal Flush") {
    console.log("Royal Flush", result);
    return display;
  }
};

btnGenerateCard.addEventListener("click", init);

/////////////
/////////////
/////////////

//TRY TO SIMULATE ROYAL FLUSH HAND'S IN 10000000 HANDS

royalHand.addEventListener("click", () => {
  let i = 0;

  if (confirm("This task is strong, do you want to continue?"))
    while (i <= 10000000) {
      i++;
      init();
    }
});
