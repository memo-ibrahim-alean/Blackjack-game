let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = cards[0] + cards[1];
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  cardsEl.textContent = `Cards : ${cards[0]} , ${cards[1]}`;
}

function newCard() {
  cards[1] = 8;

  sum += cards[1];

  renderGame();
}
