const textValue = document.querySelector(".main__hand--text");

const injectValue = function (value) {
  textValue.innerHTML = `The value of the hand is  ${value}`;
};

export default injectValue;
