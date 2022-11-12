let firstCard = 4;
let secondCard = 40;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = false;

if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
  isAlive = true;
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackJack = true;
} else {
  console.log("You're out of the game! 😭");
}

console.log(isAlive);
