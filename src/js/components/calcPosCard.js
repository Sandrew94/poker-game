//Every 150 px there is one card

const calcPosCard = (index) => {
    return -150 * (index + 1) + "px";
  };


  export default calcPosCard;