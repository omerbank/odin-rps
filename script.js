function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(num=getRandomInt(3)) {
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    }

    return "Scissors";
}

function firstLetterUpper(str) {
    const firstLetter = str[0].toUpperCase();
    const strLowerCase = str.slice(1).toLowerCase();

    return firstLetter + strLowerCase;
}

function playRound(playerSelection, computerSelection) {
    const playerFixed = firstLetterUpper(playerSelection);
    
    if (playerFixed === computerSelection) { 
        return "It's a tie!";
    } else if (playerFixed === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerFixed === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock.";
    } else if (playerFixed === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats paper.";
    }

    return `You lose! ${computerSelection} beats ${playerFixed.toLowerCase()}.`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?: ");
        const computerSelection = getComputerChoice();

        console.log(`The computer chose ${computerSelection.toLowerCase()}.`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result[4] === "w") { 
            playerScore++;
        } else {
            computerScore++;
        }
    }

    if (playerScore === computerScore) {
        console.log("The game has ended in a tie!");
    } else if (playerScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("The computer won the game!");
    }
}

game();