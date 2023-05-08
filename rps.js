let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rockbtn');
rockButton.addEventListener('click', () => playRound('rock'));

const paperButton = document.querySelector('.paperbtn');
paperButton.addEventListener('click', () => playRound('paper'));

const scissorButton = document.querySelector('.scissorbtn');
scissorButton.addEventListener('click', () => playRound('scissor'));

function playRound(playerChoice) {
  const choices = ['rock', 'paper', 'scissor'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let winner;
  if (playerChoice === computerChoice) {
    winner = 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper')
  ) {
    winner = 'player';
  } else {
    winner = 'computer';
  }

  if (winner === 'player') {
    playerScore++;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('game').textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    document.querySelector('.info img').setAttribute('src', `${playerChoice}.jpg`);
    document.querySelectorAll('.info img')[1].setAttribute('src', `${computerChoice}.jpg`);
  } else if (winner === 'computer') {
    computerScore++;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('game').textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    document.querySelectorAll('.info img')[1].setAttribute('src', `${computerChoice}.jpg`);
    document.querySelector('.info img').setAttribute('src', `${playerChoice}.jpg`);
  } else {
    document.getElementById('game').textContent = `It's a tie! You both chose ${playerChoice}.`;
    document.querySelector('.info img').setAttribute('src', `${playerChoice}.jpg`);
    document.querySelectorAll('.info img')[1].setAttribute('src', `${computerChoice}.jpg`);
  }
}
