const computerPlay = () => {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomWeapon = Math.trunc(Math.random() * rockPaperScissors.length);
  return rockPaperScissors[randomWeapon];
};

function game() {
  let computerScore = 0;
  let playerScore = 0;
  function playRound(playerSelection, computerSelection) {
    const playerSelect = playerSelection.toLowerCase();
    if (playerSelect === "rock") {
      if (computerSelection === "rock") {
        return "It's a tie!";
      } else if (computerSelection === "paper") {
        computerScore++;
        return "You Lose! Paper Beats Rock!";
      } else if (computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock Beats Scissors!";
      }
    } else if (playerSelect === "paper") {
      if (computerSelection === "paper") {
        return "It's a tie!";
      } else if (computerSelection === "scissors") {
        computerScore++;
        return "You Lose! Scissors Beats Paper!";
      } else if (computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper Beats Rock!";
      }
    } else if (playerSelect === "scissors") {
      if (computerSelection === "scissors") {
        return "It's a tie!";
      } else if (computerSelection === "rock") {
        computerScore++;
        return "You Lose! Rock Beats Scissors!";
      } else if (computerSelection === "paper") {
        playerScore++;
        return "You Win! Scissors Beats Paper!";
      }
    } else {
      return "Please enter a weapon ranging from Rock, Paper, or Scissors";
    }
  }
  return function () {
    while (computerScore < 5 && playerScore < 5) {
      const playerWeapon = prompt("Throw your weapon!");
      console.log(playRound(playerWeapon, computerPlay()));
    }

    if (computerScore === 5) {
      return alert(
        `You may have won a few battles, but you ultimately lost the war :(. The computer wins. You: ${playerScore}; Computer: ${computerScore}`
      );
    } else {
      return alert(
        `You have Won! Wow, you beat a computer, congrats :). You: ${playerScore}; Computer: ${computerScore}`
      );
    }
  };
}

const gameStarter = game();

gameStarter();
