import handDisplay from "../components/randomHand.js";

//Elements
const btnGenerateCard = document.querySelector(".main__container-button");

const firstCard = document.querySelector(".main__hand--display-cards-1");
const secondCard = document.querySelector(".main__hand--display-cards-2");
const thirdCard = document.querySelector(".main__hand--display-cards-3");
const quarterCard = document.querySelector(".main__hand--display-cards-4");
const fiveCard = document.querySelector(".main__hand--display-cards-5");

//Default card

const defaultCard = function () {};

btnGenerateCard.addEventListener("click", () => {
  const cardValues = {
    "A♥︎": 1,
    "2♥︎": 2,
    "3♥︎": 3,
    "4♥︎": 4,
    "5♥︎": 5,
    "6♥︎": 6,
    "7♥︎": 7,
    "8♥︎": 8,
    "9♥︎": 9,
    "T♥︎": 10,
    "J♥︎": 11,
    "Q♥︎": 12,
    "K♥︎": 13,
    "A♦︎": 14,
    "2♦︎": 15,
    "3♦︎": 16,
    "4♦︎": 17,
    "5♦︎": 18,
    "6♦︎": 19,
    "7♦︎": 20,
    "8♦︎": 21,
    "9♦︎": 22,
    "T♦︎": 23,
    "J♦︎": 24,
    "Q♦︎": 25,
    "K♦︎": 26,
    "A♣︎": 27,
    "2♣︎": 28,
    "3♣︎": 29,
    "4♣︎": 30,
    "5♣︎": 31,
    "6♣︎": 32,
    "7♣︎": 33,
    "8♣︎": 34,
    "9♣︎": 35,
    "T♣︎": 36,
    "J♣︎": 37,
    "Q♣︎": 38,
    "K♣︎": 39,
    "A♠︎": 40,
    "2♠︎": 41,
    "3♠︎": 42,
    "4♠︎": 43,
    "5♠︎": 44,
    "6♠︎": 45,
    "7♠︎": 46,
    "8♠︎": 47,
    "9♠︎": 48,
    "T♠︎": 49,
    "J♠︎": 50,
    "Q♠︎": 51,
    "K♠︎": 52,
  };

  Object.keys(cardValues).findIndex((el, idx) => {
    if (el == handDisplay[0]) {
      firstCard.style.backgroundPosition = -150 * (idx + 1) + "px";
    }
    if (el == handDisplay[1]) {
      secondCard.style.backgroundPosition = -150 * (idx + 1) + "px";
    }
    if (el == handDisplay[2]) {
      thirdCard.style.backgroundPosition = -150 * (idx + 1) + "px";
    }
    if (el == handDisplay[3]) {
      quarterCard.style.backgroundPosition = -150 * (idx + 1) + "px";
    }
    if (el == handDisplay[4]) {
      fiveCard.style.backgroundPosition = -150 * (idx + 1) + "px";
    }
  });
});
