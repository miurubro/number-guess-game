let y = Math.floor(Math.random() * 10 + 1);
let guessCount = 0;
const maxGuesses = 3;

document.getElementById("submitguess").onclick = function () {
  let x = parseInt(document.getElementById("guessField").value);
  guessCount++;

  const resultMessage = document.getElementById("resultMessage");
  const chanceCount = document.getElementById("chanceCount");

  let chancesLeft = maxGuesses - guessCount;
  chanceCount.textContent = "Chances left: " + chancesLeft;

  if (guessCount <= maxGuesses) {
    if (x === y) {
      resultMessage.textContent =
        "CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " +
        guessCount +
        " GUESSES!";
    } else if (x > y) {
      resultMessage.textContent = "SORRY!! TRY A SMALLER NUMBER";
    } else {
      resultMessage.textContent = "SORRY!! TRY A GREATER NUMBER";
    }

    if (guessCount === maxGuesses) {
      resultMessage.textContent +=
        " GAME OVER! The correct number was " + y + ".";
      document.getElementById("submitguess").disabled = true;
    }
  }
};
