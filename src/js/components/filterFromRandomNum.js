// it filter the deck of randomNumbers and decrease each size every time the player draw 5 cards ( ex starter deck 51 cards - 5 = 46; 46 -5 = 41 ecc...)

const filterFromRandomNum = function (deck, randomNumbers) {
  return deck.filter((val) => !randomNumbers.includes(val));
};

export default filterFromRandomNum;
