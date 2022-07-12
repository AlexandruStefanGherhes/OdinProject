
////////////////////////////////////////////
////////ROCK PAPER SCISSORS/////////////////
///////////////////////////////////////////

let playerScore = '';
let computerScore = '';
function computerPlay() {
  const option = ["rock", "paper", "scissors"];
  const random = option[Math.floor(Math.random() * option.length)];
  return random;
}

function play(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection;

  if (player == computer) {
    return "It's a draw";
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  
  ) {
    playerScore++
    return `You win, ${player} beats ${computer}`;
  } else {
    computerScore++
    return `You lost, ${computer} beats ${player}`;
  }
}
// const computer = computerPlay();
 
function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(play("ROck", computerPlay()));
  }
  if(playerScore > computerScore){
    console.log(`You won the game`)
  }else{
    console.log(`You lost the game`)
  }
}

game();


