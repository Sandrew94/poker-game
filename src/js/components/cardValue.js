//Calcolate the value hand from card matrix

const valueHand = function (hand) {
  const values = new Array(13).fill(0); // [0,0,0,0,0... x13]
  const suits = new Array(4).fill(0); //[0,0,0,0]

  hand.forEach((card) => {
    suits[Math.floor(card / 13)] += 1;
    values[card % 13] += 1;
  });

  ///////////

  const atLeastDoubleCard = values.filter((count) => count > 2);
  //There is at least one pair

  if (atLeastDoubleCard) {
    if (values.some((count) => count === 4)) return "Quads";
    //Poker
    if (values.filter(Boolean).length === 2) return "Full House"; //Full
    if (values.filter((count) => count === 2).length === 1) return "Pair"; //Coppia
    if (values.filter((count) => count === 2).length === 2) return "Two Pairs"; //Doppia coppia
    if (values.some((count) => count === 3)) return "Trips"; //Tris
  }

  //////////////////////

  const firstCardIndex = values.findIndex((index) => index === 1);

  const flush = suits.some((count) => count === 5); // 5 cards of the same suits
  const straight =
    values
      .slice(firstCardIndex, firstCardIndex + 5)
      .filter((count) => count === 1).length === 5;
  const straighFlush = flush && straight;

  if (straighFlush && firstCardIndex === 8) return "Royal Flush"; //Scala Reale
  if (straighFlush) return "Straight Flush"; //Scala Colore
  if (flush) return "Flush"; //Colore
  if (straight) return "Straight"; //Scala
  if (values.filter((count) => count === 1).length === 5) return "High Card"; // Carta Alta
};

export default valueHand;
