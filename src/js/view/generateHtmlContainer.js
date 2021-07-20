//Return html cards
const generateHtmlCards = function (handsArr) {
  const htmlResult = handsArr.map(
    (_, idx) =>
      `<div class="main__hand--display-cards-${idx + 1} animation"></div>`
  );

  return htmlResult.join("");
};

//Generate a container for cards
const generateHtmlContainer = function (arr5Cards, cardValueText) {
  const mainHand = document.querySelector(".main__hand");
  let html = `
    <div class="main__hand">
        <div class="main__hand--display-cards">
        ${generateHtmlCards(arr5Cards)}
        </div>
        ${cardValueText}
      </div>
      `;
  mainHand.insertAdjacentHTML("afterbegin", html);
};

export default generateHtmlContainer;
