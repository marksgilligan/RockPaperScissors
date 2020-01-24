let playerScore = 0;
let cpuScore = 0;
let draw = 0;

var gameHistory = [];

function playGame(playerMove) {
  let cpuMove = generateComputerMove();
  showComputerMove(cpuMove);

  if (playerMove === cpuMove) {
    showResult("Draw");
    draw += 1;
  } else if (playerMove == "Rock") {
    if (cpuMove == "Paper") {
      showResult("Cpu wins");
      cpuScore += 1;
    } else {
      showResult("Player wins");
    }
    playerScore += 1;
  } else if (playerMove == "Paper") {
    if (cpuMove == "Rock") {
      showResult("Player Wins");
      playerScore += 1;
    } else {
      showResult("Cpu Wins");
      cpuScore += 1;
    }
  } else if (playerMove == "Scissors") {
    if (cpuMove == "Rock") {
      showResult("Cpu Wins");
      cpuScore += 1;
    } else {
      showResult("Player Wins");
      playerScore += 1;
    }
  }
  const wins = document.getElementById("wins");
  wins.innerText = playerScore;
  const losses = document.getElementById("losses");
  losses.innerText = cpuScore;
  const draws = document.getElementById("draws");
  draws.innerText = draw;

  drawHistory();

  let gameChoices = {
    playerMove,
    cpuMove
  };

  gameHistory.push(gameChoices);
}

function drawHistory() {
  var callList = document.getElementById("gameHistory");
  var displayString = "";
  for (var i = "0"; i < gameHistory.length; i++) {
    displayString +=
      "<li>" +
      gameHistory[i].playerMove +
      " vs " +
      gameHistory[i].cpuMove +
      "</li>";
  }
  callList.innerHTML = displayString;
}

document.getElementById("rock").addEventListener("click", playRock);

document.getElementById("paper").addEventListener("click", playPaper);

document.getElementById("scissors").addEventListener("click", playScissors);

document.getElementById("submit").addEventListener("click", getUsername);

function getUsername() {
  //get username value using id.value and store it in a variable: userName
  var userName = document.getElementById("user").value;
  //create if statement checking the value var userName is true or fontVariantAlternates
  if (userName) {
    console.log(true);
    document.getElementById("userChoice").innerText = userName;
    document.getElementById("currentUser").innerText = userName + "!" + " ";
    document.getElementById("user").value = null;
  } else alert("Please Enter Valid Username");
}

function playRock() {
  playGame("Rock");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Rock";
}

function playPaper() {
  playGame("Paper");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Paper";
}

function playScissors() {
  playGame("Scissors");
  const playerChoice = document.getElementById("playerchoice");
  playerChoice.innerText = "Scissors";
}

function generateComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "Rock";
  else if (randomNumber > 0.33 && randomNumber < 0.66) return "Paper";
  return "Scissors";
}

function showComputerMove(move) {
  const displayElement = document.getElementById("computerMove");
  displayElement.innerText = move;
}
function showResult(result) {
  const displayElement = document.getElementById("results");
  displayElement.innerHTML = "<b>" + result + "!" + "</b>";
}
