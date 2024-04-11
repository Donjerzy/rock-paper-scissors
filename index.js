let computerScore = 0;
let playerScore = 0;
let total = 0;
let gameOver = false;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const computerScoreDisplay = document.querySelector(".cpu-score")
const playerScoreDisplay = document.querySelector(".user-score")
const gameAlert = document.querySelector('.alert');
const title = document.querySelector('.title');
const scoreSection = document.querySelector('.score');
const buttonSection = document.querySelector('.action-buttons');


computerScoreDisplay.textContent = `${computerScore}`
playerScoreDisplay.textContent = `${playerScore}`



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

function gameLogic(result) {    
        if (result.startsWith('You win')) {
            playerScore += 1;
            total += 1;
            playerScoreDisplay.textContent = `${playerScore}`
            gameAlert.textContent = `${result}`;
            gameAlert.setAttribute('style', "background-color: green; color: white;")
        } else if (result.startsWith('You lose')) {
            computerScore +=1;
            total += 1;
            computerScoreDisplay.textContent = `${computerScore}`
            gameAlert.textContent = `${result}`;
            gameAlert.setAttribute('style', "background-color: red; color: white;")
        } else {
            gameAlert.textContent = `${result}`;
            gameAlert.setAttribute('style', "background-color: yellow; color: black;")
        }
    return;   
}


function gameOverFun () { 
    gameOver = true;
    if(playerScore > computerScore) {
        gameAlert.textContent = "";
        gameAlert.style.backgroundColor = 'green'; 
        title.setAttribute('style', 'text-align: center; color:green;');
        title.textContent = "You won";
        scoreSection.innerHTML = `<div style="width:fit-content; margin-left:auto; margin-right:auto;"><p>You: ${playerScore} - ${computerScore} :The Computer</p></div>`;
        buttonSection.innerHTML = `<p style="width:fit-content; margin-left:auto; margin-right:auto;">Refresh to play again!</p>`
    } else {
        gameAlert.textContent = "";
        gameAlert.style.backgroundColor = 'red'; 
        title.setAttribute('style', 'text-align: center; color:red;');
        title.textContent = "You Lost";
        scoreSection.innerHTML = `<div style="width:fit-content; margin-left:auto; margin-right:auto;"><p>You: ${playerScore} - ${computerScore} :The Computer</p></div>`;
        buttonSection.innerHTML = `<p style="width:fit-content; margin-left:auto; margin-right:auto;">Refresh to play again!</p>`
    } 
    return;
}

rock.addEventListener('click', ()=> {
    if(!gameOver) {
        const pcChoice = getComputerChoice();
        gameLogic(playRound('rock', pcChoice));
        if (total === 5) {
            gameOverFun();
        }
    }
});

paper.addEventListener('click', ()=> {
    if(!gameOver) {
        const pcChoice = getComputerChoice();
        gameLogic(playRound('paper', pcChoice));
        if (total === 5) {
            gameOverFun();
        }
    }  
});

scissors.addEventListener('click', ()=> {
    if(!gameOver) {
        const pcChoice = getComputerChoice();
        gameLogic(playRound('scissors', pcChoice));
        if (total === 5) {
            gameOverFun();
        }
    }
});