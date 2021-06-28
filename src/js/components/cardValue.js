//Calcolate the value hand from card matrix

const valueHand = function (hand) {
  const values = new Array(13).fill(0);
  const suits = new Array(4).fill(0);

  hand.forEach((card) => {
    suits[Math.floor(card / 13)] += 1;
    values[card % 13] += 1;
  });

  const firstCardIndex = values.findIndex((index) => index === 1);

  const ranks = {
    royal_flush: false,
    straight_flush: false,
    quads: values.some((count) => count === 4),
    full_house: values.filter(Boolean).length === 2,
    flush: suits.some((count) => count === 5),
    straight:
      values
        .slice(firstCardIndex, firstCardIndex + 5)
        .filter((count) => count === 1).length === 5,
    trips: values.some((count) => count === 3),
    two_pairs: values.filter((count) => count === 2).length === 2,
    pair: values.filter((count) => count === 2).length === 1,
    high_card: true,
  };

  ranks.straight_flush = ranks.flush && ranks.straight;

  ranks.royal_flush = ranks.straight_flush && firstCardIndex === 8;

  let rankDescription = "";

  Object.keys(ranks).every((key) => {
    rankDescription = key;
    return !ranks[key];
  });

  rankDescription = rankDescription
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return rankDescription;
};

export default valueHand;
