function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[Math.floor(Math.random() * 3)];
}




function userPlay() {
    let userChoice = prompt('Rock? Paper? Or scissors?');
    return userChoice.toLowerCase();
}





function playRound(playerSelection, computerSelection) {

    let winner = '';
    let roundMessage = '';


    if (computerSelection === playerSelection) {
        roundMessage = 'It\'s a draw!'
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        roundMessage = 'You win! Paper beats rock.'
        winner = 'player'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        roundMessage = 'You win! Scissors beats paper.'
        winner = 'player';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        roundMessage = 'You win! Rock beats scissors.'
        winner = 'player';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        roundMessage = 'You lose! Paper beats rock.'
        winner = 'computer'
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        roundMessage = 'You lose! Rock beats scissors.'
        winner = 'computer'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        roundMessage = 'You lose! Scissors beats paper.'
        winner = 'computer'
    }


    return winner;
}

/* 
const playerSelection = userPlay();
const computerSelection = computerPlay();
let result = playRound(playerSelection, computerSelection);

console.log('Your choice: ', playerSelection);
console.log('Computer\'s choice: ', computerSelection);
console.log('Result is: ', result);
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = '';

    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound(userPlay(), computerPlay());

        if (roundWinner === 'player') {
            playerScore++;
        } else if (roundWinner === 'computer') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        gameWinner = 'Player';
    } else if (computerScore > playerScore) {
        gameWinner = 'Computer';
    } else {
        gameWinner = 'Draw';
    }

    console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

    if (gameWinner === 'Draw') {
        console.log(`No winner -- draw!`);
    } else {
        console.log(`Match winner: ${gameWinner}`);
    }
}

game();