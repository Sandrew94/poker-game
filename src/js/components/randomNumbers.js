//Create an arr of "arrLenght" elements with random numbers in a determinate range
const randomNumFunc = (arrLenght, range) => {
  return Array.from(Array(arrLenght), (_, i) =>
    Math.floor(Math.random() * range + 1)
  );
};

export default randomNumFunc;
