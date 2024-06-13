const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const userChoiceSpan = document.getElementById('user-choice');
const computerChoiceSpan = document.getElementById('computer-choice');
const winnerSpan = document.getElementById('winner');
const gameHistoryTbody = document.getElementById('game-history');
let userScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    updateScores(winner);
    updateResults(userChoice, computerChoice, winner);
    addToGameHistory(userChoice, computerChoice, winner);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function updateScores(winner) {
    if (winner === 'user') {
        userScore++;
        userScoreSpan.textContent = userScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }
}

function updateResults(userChoice, computerChoice, winner) {
    userChoiceSpan.textContent = capitalizeFirstLetter(userChoice);
    computerChoiceSpan.textContent = capitalizeFirstLetter(computerChoice);
    if (winner === 'user') {
        winnerSpan.textContent = 'You win!';
        winnerSpan.style.color = '#4CAF50';
    } else if (winner === 'computer') {
        winnerSpan.textContent = 'Computer wins!';
        winnerSpan.style.color = '#d9534f';
    } else {
        winnerSpan.textContent = "It's a draw!";
        winnerSpan.style.color = '#333';
    }
}

function addToGameHistory(userChoice, computerChoice, winner) {
    const row = document.createElement('tr');
    const userChoiceCell = document.createElement('td');
    const computerChoiceCell = document.createElement('td');
    const winnerCell = document.createElement('td');

    userChoiceCell.textContent = capitalizeFirstLetter(userChoice);
    computerChoiceCell.textContent = capitalizeFirstLetter(computerChoice);
    winnerCell.textContent = winner === 'user' ? 'You' : winner === 'computer' ? 'Computer' : 'Draw';

    row.appendChild(userChoiceCell);
    row.appendChild(computerChoiceCell);
    row.appendChild(winnerCell);
    gameHistoryTbody.appendChild(row);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
