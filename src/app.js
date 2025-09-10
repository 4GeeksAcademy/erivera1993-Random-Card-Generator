const suits = [
  { key: "heart", symbol: "♥", color: "red" },
  { key: "spade", symbol: "♠", color: "black" },
  { key: "club", symbol: "♣", color: "black" },
  { key: "diamond", symbol: "♦", color: "red" }
];

const values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderCard() {
  const cardEl = document.getElementById("card");
  const suitTop = document.getElementById("suitTop");
  const suitBottom = document.getElementById("suitBottom");
  const valueCenter = document.getElementById("valueCenter");

  const suit = rand(suits);
  const value = rand(values);

  cardEl.classList.remove("red", "black");
  suitTop.classList.remove("red", "black");
  suitBottom.classList.remove("red", "black");
  valueCenter.classList.remove("red", "black");

  cardEl.classList.add(suit.color);
  suitTop.classList.add(suit.color);
  suitBottom.classList.add(suit.color);
  valueCenter.classList.add(suit.color);

  suitTop.textContent = suit.symbol;
  suitBottom.textContent = suit.symbol;
  valueCenter.textContent = value;
}

window.onload = () => {
  renderCard(); // generate a random card on every refresh
};
