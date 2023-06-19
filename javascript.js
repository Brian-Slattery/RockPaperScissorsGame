let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomPick = Math.floor(Math.random() * choices.length);
    return choices[randomPick];
}

function getPlayerChoice() {
    let playerprompt;
    while (!choices.includes((playerprompt = prompt("Please pick a rock, paper or scissors").toLowerCase())));
    return playerprompt;
}

function gameRound(playerSelection, computerSelection) {
    switch (playerSelection + "-" + computerSelection) {
        case "rock-scissors":
        case "paper-rock":
        case "scissors-paper":
            playerScore++;
            return `You picked ${playerSelection}, I picked ${computerSelection}. Point for you!`;
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            computerScore++;
            return `You picked ${playerSelection}, I picked ${computerSelection}. Point for me!`;
        default:
            return `You picked ${playerSelection}, I picked ${computerSelection}. It's a tie!`;
    }
}

function showScores() {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}

function game() {
    for (let round = 0; round < 5; round++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(gameRound(playerSelection, computerSelection));
        showScores();
    }
    replay();
}

function replay() {
    let answer;
    while (!["yes", "y", "n", "no"].includes((answer = prompt("Do you want to play again? (yes/no)").toLowerCase()))) {
    }

    if (["yes", "y"].includes(answer)) {
        playerScore = 0;
        computerScore = 0;
        game();
    } else if (["no", "n"].includes(answer)) {
        console.log("Thanks for playing!");
    }
}


game();