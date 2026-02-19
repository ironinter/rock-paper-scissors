function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.33) {
        return "Rock";
    } else if (choice < 0.66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: ");
    return choice;
}


function playRound() {
    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice();

    if (humanChoice === 'scissors' && computerChoice === 'Paper' || humanChoice === 'paper' && computerChoice === 'Rock' || humanChoice === 'rock' && computerChoice === 'Scissors') {
        humanScore++;
        result = `${humanChoice} beats ${computerChoice}. You Win!`;
        return result;     
    } else if (humanChoice === computerChoice.toLowerCase()) {
        return "Its a draw."
    } 

    computerScore++;
    result = `${computerChoice} beats ${humanChoice}. You Lose!`;
    return result;
}

// Declare Scores
let humanScore = 0, computerScore = 0;

function playGame() {
    // hChoice = getHumanChoice();
    // cChoice = getComputerChoice();
    
    // Play round 5 times
    for (let i = 0; i < 5; i++) {
        result = playRound();
        console.log(result);
    }

    console.log(`Your Score: ${humanScore} v/s Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("YOU WIN!!!");
    } else if (humanScore === computerScore) {
        console.log("ITS A DRAW.");
    } else {
        console.log("YOU LOSE");
    }

}

playGame();
