// this draw 5 random numbers (cards) of the deck

const random5CardDeck = function (deckArr) {
  const randomNumbers = deckArr
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  return randomNumbers;
};

export default random5CardDeck;
