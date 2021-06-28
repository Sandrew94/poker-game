const randomHand = (hand) => {
  const values = "23456789TJQKA";
  const suits = [`♣︎`, `♦︎`, `♥︎`, `♠︎`];
  return hand.map((el) => {
    return `${values[el % values.length]}${
      suits[Math.floor(el / values.length)]
    }`;
  });
  //.join(" ");
};

export default randomHand;
