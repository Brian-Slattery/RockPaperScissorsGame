document.addEventListener('DOMContentLoaded', () => {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;

    const choices = ["rock", "paper", "scissors"];
    const buttons = document.getElementById('buttons');
    const playScore = document.getElementById("playScore");
    const comScore = document.getElementById("comScore");
    const roundRecap = document.getElementById("roundRecap");
    const roundNum = document.getElementById("num");
    const finalScore = document.getElementById("Results");
    const restart = document.getElementById("endGamePrompt")

    function getComputerChoice() {
        let randomPick = Math.floor(Math.random() * choices.length);
        return choices[randomPick];
    }

    function gameRound(playerSelection, computerSelection) {
        switch (playerSelection + "-" + computerSelection) {
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                playerScore++;
                playScore.textContent = playerScore;
                roundRecap.textContent = `You picked ${playerSelection}, I picked ${computerSelection}. Point for you!`
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                computerScore++;
                comScore.textContent = computerScore;
                roundRecap.textContent = `You picked ${playerSelection}, I picked ${computerSelection}. Point for me!`
                break;
            default:
                roundRecap.textContent = `You picked ${playerSelection}, I picked ${computerSelection}. Null Round!`
                break;
        }

        round++;
        roundNum.textContent = round;

        if (round >= 5) {
            buttons.removeEventListener('click', playGameRound);
            if (playerScore > computerScore){
                finalScore.textContent = "you win!";
            }
            else if (computerScore > playerScore){
                finalScore.textContent = "I win!";
            }
            else {
                finalScore.textContent ="we tied!";
            }
        }
    }

    function playGameRound(event) {
        const clickedElement = event.target;
        const playerChoice = clickedElement.id;
        
        if (choices.includes(playerChoice)) {
            const computerChoice = getComputerChoice();
            gameRound(playerChoice, computerChoice);
        }
    }

    buttons.addEventListener('click', playGameRound);

    document.getElementById('endGamePrompt').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});