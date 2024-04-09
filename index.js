function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const chosen = choices[Math.floor(Math.random() * 3)];
    return chosen;
}