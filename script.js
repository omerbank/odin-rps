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