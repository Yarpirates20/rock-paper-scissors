function computerPlay() {
    let computerChoice = ['rock', 'paper', 'scissors']
    return computerChoice[Math.floor(Math.random() * 3)];
}




function userPlay() {
    let userChoice = prompt('Rock? Paper? Or scissors?');
    return userChoice.toLowerCase();
}





function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection) {
        return 'It\'s a draw!'
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beats rock.'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beats paper.'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats scissors.'
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        return 'You lose! Paper beats rock.'
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        return 'You lose! Rock beats scissors.'
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        return 'You lose! Scissors beats paper.'
    }
}

const playerSelection = userPlay();
const computerSelection = computerPlay();
let result = playRound(playerSelection, computerSelection);

console.log('Your choice: ', playerSelection);
console.log('Computer\'s choice: ', computerSelection);
console.log('Result is: ', result);