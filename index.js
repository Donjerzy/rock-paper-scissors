function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const chosen = choices[Math.floor(Math.random() * 3)];
    return chosen;
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let statement = '';
    switch (computerSelection) {
        case 'paper':
            if (player === 'paper') {
                statement = 'A draw you both chose paper'
            } else if (player === 'scissors') {
                statement =  `You win, the computer chose ${computerSelection}`
            } else {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;
        
        case 'scissors':
            if (player === 'scissors') {
                statement = 'A draw you both chose scissors'
            } else if (player === 'rock') {
                statement =  `You win, the computer chose ${computerSelection}`
            } else {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;

        case 'rock':
            if (player === 'rock') {
                statement = 'A draw you both chose rock'
            } else if (player === 'paper') {
                statement =  `You win, the computer chose ${computerSelection}`
            } else {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;
    }
    
    return statement;
}