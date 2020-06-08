// game state
let playerScore = 0;
let computerScore = 0;
let currentRound = 1;
let playerChoice;
let computerChoice;

function computerPlay() {
    computerChoice = Math.floor(Math.random() * 3)

    switch (computerChoice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            break;
    }
}

function playRound(playerChoice) {
    let playerSelection = playerChoice
    let computerSelection = computerPlay()

    if (playerSelection === computerSelection) {
        currentInfo('draw');
        currentScore();
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWin();
        } else if (computerSelection === "scissors") {
            playerWin();
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerWin();
        } else if (computerSelection === "rock") {
            playerWin();
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerWin();
        } else if (computerSelection === "paper") {
            playerWin();
        }
    } else {
        alert("Please choose a valid option");
        playRound();
    }
}        

function currentScore() {
    playerScoreOutput.innerHTML = playerScore;
    computerScoreOutput.innerHTML = computerScore;
    currentRound++;
}

function currentInfo(winner) {
    infoLine1.innerHTML = `Round ${currentRound}`;

    if (winner === 'player') {
        infoLine2.innerHTML = "You won this one!";
    } else if (winner === 'computer') {
        infoLine2.innerHTML = "You lost this one!";
    } else if (winner === 'draw') {
        infoLine2.innerHTML = "It's a draw!";
    }

}

function playerWin() {
    playerScore++;
    currentInfo('player')
    currentScore();
    roundCheck();
}

function computerWin() {
    computerScore++;
    currentInfo('computer');
    currentScore();
    roundCheck();
}

function roundCheck() {
    if (currentRound <= 5) return;

    infoLine1.innerHTML = "GAME OVER!";

    if (playerScore > computerScore) {
        infoLine2.innerHTML = "YOU WON!";
    } else if (computerScore > playerScore) {
        infoLine2.innerHTML = "YOU LOST!";
    } else {
        infoLine2.innerHTML = "It's a draw!";
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 0;

    infoLine1.innerHTML = "";
    infoLine2.innerHTML = "Choose above to play!";
    currentScore();
}

function cardClick(card) {
    if (currentRound > 5) reset();
    playRound(card);
}

const playerRock = document.querySelector('#player-rock-card');
playerRock.addEventListener('click', () => {
    if (currentRound > 5) {
        reset();
        return;
    }
    playRound('rock');
});

const playerPaper = document.querySelector('#player-paper-card');
playerPaper.addEventListener('click', () => {
    if (currentRound > 5) {
        reset();
        return;
    }
    playRound('paper');
});

const playerScissors = document.querySelector('#player-scissors-card');
playerScissors.addEventListener('click', () => {
    if (currentRound > 5) {
        reset();
        return;
    }
    playRound('scissors');
});

const playerScoreOutput = document.querySelector('#player-score-number');
const computerScoreOutput = document.querySelector('#comp-score-number');

const infoLine1 = document.querySelector('#hta-1');
const infoLine2 = document.querySelector('#hta-2');