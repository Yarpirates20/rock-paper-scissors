let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock").addEventListener('click', function() {
    playRound('rock', computerPlay());
    showScore();
});

const paper = document.getElementById("paper").addEventListener('click', function() {
    playRound('paper', computerPlay());
});

const scissors = document.getElementById("scissors").addEventListener('click', function() {
    playRound('scissors', computerPlay());
});

let results = document.getElementById('results');



function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[Math.floor(Math.random() * 3)];
}





// function userPlay() {
//    let userChoice = prompt('Rock? Paper? Or scissors?');
//    return userChoice.toLowerCase();
// }





function playRound(playerSelection, computerSelection) {

    let winner = '';
    let roundMessage = '';


    if (computerSelection === playerSelection) {
        roundMessage = 'It\'s a draw!'
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        roundMessage = 'You win! Paper beats rock.'
        playerScore++;

    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        roundMessage = 'You win! Scissors beats paper.'
        winner = 'player';
        playerScore++;

    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        roundMessage = 'You win! Rock beats scissors.'
        winner = 'player';
        playerScore++;
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        roundMessage = 'You lose! Paper beats rock.'
        winner = 'computer'
        computerScore++;
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        roundMessage = 'You lose! Rock beats scissors.'
        winner = 'computer'
        computerScore++;

    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        roundMessage = 'You lose! Scissors beats paper.'
        winner = 'computer'
        computerScore++;

    }

    results.textContent = roundMessage;
    return winner;
}


function game() {



    let roundWinner = playRound();

    if (roundWinner === 'player') {
        playerScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }


}

function showScore() {
    if (playerScore === 5) {
        document.getElementById('final-results').textContent = 'You win!';
    } else if (computerScore === 5) {
        document.getElementById('final-results').textContent = 'You lost!';
    } else if (playerScore && computerScore === 5) {
        document.getElementById('final-results').textContent = 'Tie';
    }

    document.getElementById('score').textContent = `${playerScore} - ${computerScore}`;
}