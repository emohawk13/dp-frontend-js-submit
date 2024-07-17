const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultsDisplay = document.getElementById("resultsDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
const totalScoreDisplay = document.getElementById("totalScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let totalGamesPlayed = 0;

function rpsPlay(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Its a tie!";
  } else {
    switch (playerChoice) {
      case "Rock":
        result = computerChoice === "Scissors" ? "You Win!" : "You Lose :(";
        break;
      case "Paper":
        result = computerChoice === "Rock" ? "You Win!" : "You Lose :(";
        break;
      case "Scissors":
        result = computerChoice === "Paper" ? "You Win!" : "You Lose :(";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultsDisplay.textContent = `Result: ${result}`;
  totalGamesPlayed++;
  totalScoreDisplay.textContent = totalGamesPlayed;
  resultsDisplay.classList.remove(
    "result-win-color",
    "result-tie-color",
    "result-lose-color"
  );
  switch (result) {
    case "You Win!":
      resultsDisplay.classList.add("result-win-color");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "Its a tie!":
      resultsDisplay.classList.add("result-tie-color");
      tieScore++;
      tieScoreDisplay.textContent = tieScore;
      break;
    case "You Lose :(":
      resultsDisplay.classList.add("result-lose-color");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
