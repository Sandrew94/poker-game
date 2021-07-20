const textValue = document.querySelector(".main__hand--text");

const displayValue = function (value) {
  return (textValue.innerHTML = `<span class="main__hand--text">The value of the player hand is ${value} </span>`);
};

export default displayValue;
