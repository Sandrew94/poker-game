//Create a player selector
const playerSelector = function () {
  const select = document.querySelector(".select");

  const players = ["1", "2", "3", "4"];

  players.map((player) => {
    let html = `
      <option value="${player}">${player}</option>`;

    select.insertAdjacentHTML("afterbegin", html);
  });
};

export default playerSelector;
