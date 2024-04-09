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
            } else if (player === 'rock') {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;
        
        case 'scissors':
            if (player === 'scissors') {
                statement = 'A draw you both chose scissors'
            } else if (player === 'rock') {
                statement =  `You win, the computer chose ${computerSelection}`
            } else if (player === 'paper') {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;

        case 'rock':
            if (player === 'rock') {
                statement = 'A draw you both chose rock'
            } else if (player === 'paper') {
                statement =  `You win, the computer chose ${computerSelection}`
            } else if (player === 'scissors') {
                statement =  `You lose, the computer chose ${computerSelection}`
            }
            break;

        default:
            statement = `What did you pick again?!`
            break;
    }
    
    return statement;
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    while ((playerScore + computerScore) < 5) {
        const playerChoice = prompt('Rock, Paper, Scissors, Shoot!');
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(result);
        if (result.startsWith('You win')) {
            playerScore += 1;
        } else if (result.startsWith('You lose')) {
            computerScore +=1;
        }
        console.log(`You: ${playerScore} - The computer: ${computerScore} `)
    }

    if(playerScore > computerScore) {
        console.log(`You win ${playerScore} - ${computerScore}`);
    } else {
        console.log(`You lose ${playerScore} - ${computerScore}`);
    }

    return;
}

playGame();