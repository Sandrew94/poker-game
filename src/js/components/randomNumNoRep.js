//Numbers from 0 to 51 without repetitions

const randomUniqueNum = () => {
  let empty = [];
  for (let i = 0; i < 52; i++) {
    empty.push(i);
  }
  return empty;
};

export default randomUniqueNum;
