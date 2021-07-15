//Numbers from 0 to 51 without repetitions

const randomUniqueNum = () => {
  return Array.from(Array(52), (_, i) => i);
};

export default randomUniqueNum;
