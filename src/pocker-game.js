//Create a method that randomize a number from 0 to 51 (max number of cards)
//Create a function that display a pocker hand with suits from random number in console
//Take the hand and put in a function that analize the value of the hand
//Create a simple UI where if i click a button it will be return 10 random hands with it's value

/////

"use strict";

//////////////////////////////////////
/////////////////////////////////////

//CREATE A RANDOM HAND

const randomArrNum = Array.from(Array(5), (_, i) =>
  Math.floor(Math.random() * 51 + 1)
);

console.log(randomArrNum);

/* 
Card Matrix
.  2  3  4  5  6  7  8  9  T  J  Q  K  A
C 00 01 02 03 04 05 06 07 08 09 10 11 12
D 13 14 15 16 17 18 19 20 21 22 23 24 25
H 26 27 28 29 30 31 32 33 34 35 36 37 38
S 39 40 41 42 43 44 45 46 47 48 49 50 51

*/

const handDisplay = (hand) => {
  const values = "23456789TJQKA";
  const suits = [`♣︎`, `♦︎`, `♥︎`, `♠︎`];
  return hand
    .map((el) => {
      return `${values[el % values.length]}${
        suits[Math.floor(el / values.length)]
      }`;
    })
    .join(" ");
};

console.log(handDisplay(randomArrNum));
