function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(num=getRandomInt(3)) {
    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    }

    return "scissors";
}