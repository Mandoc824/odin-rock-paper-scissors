const computerPlay = () => {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomWeapon = Math.trunc(Math.random() * rockPaperScissors.length);
  return rockPaperScissors[randomWeapon];
};
let computerScore = 0;
let playerScore = 0;
const playerScoreP = document.querySelector(".player-score");
const computerScoreP = document.querySelector(".computer-score");

const playerScoreSpan = document.querySelector(".player");
const computerScoreSpan = document.querySelector(".computer");
const results = document.querySelector(".results");

const buttons = document.querySelectorAll(".weapon");

function playRound(playerSelection, computerSelection) {
  const playerSelect = playerSelection.toLowerCase();
  if (playerSelect === "rock") {
    if (computerSelection === "rock") {
      results.textContent = "It's a tie!";
    } else if (computerSelection === "paper") {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      results.textContent = "You Lose! Paper Beats Rock!";
      return endGame();
    } else if (computerSelection === "scissors") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      results.textContent = "You Win! Rock Beats Scissors!";
      return endGame();
    }
  } else if (playerSelect === "paper") {
    if (computerSelection === "paper") {
      results.textContent = "It's a tie!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      results.textContent = "You Lose! Scissors Beats Paper!";
      return endGame();
    } else if (computerSelection === "rock") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      results.textContent = "You Win! Paper Beats Rock!";
      return endGame();
    }
  } else if (playerSelect === "scissors") {
    if (computerSelection === "scissors") {
      results.textContent = "It's a tie!";
    } else if (computerSelection === "rock") {
      computerScore++;
      computerScoreSpan.textContent = computerScore;
      results.textContent = "You Lose! Rock Beats Scissors!";
      return endGame();
    } else if (computerSelection === "paper") {
      playerScore++;
      playerScoreSpan.textContent = playerScore;
      results.textContent = "You Win! Scissors Beats Paper!";
      return endGame();
    }
  } else {
    results.textContent =
      "Please enter a weapon ranging from Rock, Paper, or Scissors";
  }
}

function endGame() {
  if (computerScore === 5 || playerScore === 5) {
    buttons.forEach((button) => (button.disabled = true));
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", (e) => {
      playerScore = 0;
      computerScore = 0;
      computerScoreSpan.textContent = 0;
      playerScoreSpan.textContent = 0;
      buttons.forEach((button) => (button.disabled = false));
      restartButton.remove();
      results.textContent = "Start!";
    });
    const resultsContainer = document.querySelector(".results-container");
    resultsContainer.appendChild(restartButton);
    if (computerScore === 5) {
      if (playerScore > 0) {
        results.textContent =
          "You may have won a few battles but ultimately lost the war :(";
      } else {
        results.textContent = "Damn you got demolished bud. Get Fucked.";
      }
    } else if (playerScore === 5) {
      if (computerScore > 0) {
        results.textContent =
          "You won the war but i bet the computer had you scared for a minute there :)";
      } else {
        results.textContent =
          "Damn you fucked the computer. Good Job bud. Heres a cookie, you deserve it";
      }
    }
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.textContent, computerPlay());
  });
});
