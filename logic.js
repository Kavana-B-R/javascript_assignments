// Get the elements from the HTML
const gameContainer = document.querySelector('.game-container');
const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const choices = document.querySelectorAll('.choice');
const resultElement = document.querySelector('.result');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to generate a random choice for the computer
function getComputerChoice() {
  const choicesArray = ['rock', 'paper', 'scissors'];
  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Player wins!';
  } else {
    return 'Computer wins!';
  }
}

// Add event listeners to the choice buttons
choices.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();

    // Update the result element
    resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${determineWinner(playerChoice, computerChoice)}`;

    // Update the scores
    if (determineWinner(playerChoice, computerChoice) === 'Player wins!') {
      playerScore++;
    } else if (determineWinner(playerChoice, computerChoice) === 'Computer wins!') {
      computerScore++;
    }

    // Update the score elements
    playerScoreElement.textContent = `Player: ${playerScore}`;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
  });
  
});