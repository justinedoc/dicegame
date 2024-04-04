'use strict';

const container = document.querySelector(".container");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const namePlayer1 = document.getElementById("name--0");
const namePlayer2 = document.getElementById("name--1");
const scorePlayer1 = document.getElementById("score--0");
const scorePlayer2 = document.getElementById("score--1");
const currentScorePlayer1 = document.getElementById("current--0");
const currentScorePlayer2 = document.getElementById("current--1");
const newGameBtn = document.querySelector(".btn--new");
let dice = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const players = document.querySelector(".player");

currentScorePlayer1.textContent = 0
currentScorePlayer2.textContent = 0
scorePlayer1.textContent = 0
scorePlayer2.textContent = 0


function randomMaths(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function switchUser() {
    const switchPlayer = player1.classList.contains("active") ? true : false;
    switch (switchPlayer) {
        case true:
            player1.classList.remove("active")
            player2.classList.add("active")
            container.classList.add("player2-active");
            break;
        default:
            player2.classList.remove("active")
            player1.classList.add("active")
            container.classList.remove("player2-active");
            container.classList.add("player1-active");
    }
}




let result;
rollDiceBtn.addEventListener('click', diceRoll);

function diceRoll() {
    result = randomMaths(1, 6);

    if (result === 1) {
        dice.src = `img/dice-1.png`;
        switchUser();
        currentScorePlayer1.textContent = 0;
        currentScorePlayer2.textContent = 0;
    } else if (result === 2) {
        dice.src = `img/dice-2.png`
        if (player1.classList.contains("active")) {
            let answer = parseFloat(currentScorePlayer1.textContent) + result;
            currentScorePlayer1.textContent = answer
        } else {
            let answer = parseFloat(currentScorePlayer2.textContent) + result;
            currentScorePlayer2.textContent = answer;
        }

    } else if (result === 3) {
        dice.src = `img/dice-3.png`
        if (player1.classList.contains("active")) {
            let answer = parseFloat(currentScorePlayer1.textContent) + result;
            currentScorePlayer1.textContent = answer
        } else {
            let answer = parseFloat(currentScorePlayer2.textContent) + result;
            currentScorePlayer2.textContent = answer;
        }
    } else if (result === 4) {
        dice.src = `img/dice-4.png`
        if (player1.classList.contains("active")) {
            let answer = parseFloat(currentScorePlayer1.textContent) + result;
            currentScorePlayer1.textContent = answer
        } else {
            let answer = parseFloat(currentScorePlayer2.textContent) + result;
            currentScorePlayer2.textContent = answer;
        }
    } else if (result === 5) {
        dice.src = `img/dice-5.png`
        if (player1.classList.contains("active")) {
            let answer = parseFloat(currentScorePlayer1.textContent) + result;
            currentScorePlayer1.textContent = answer
        } else {
            let answer = parseFloat(currentScorePlayer2.textContent) + result;
            currentScorePlayer2.textContent = answer;
        }
    } else if (result === 6) {
        dice.src = `img/dice-6.png`
        if (player1.classList.contains("active")) {
            let answer = parseFloat(currentScorePlayer1.textContent) + result;
            currentScorePlayer1.textContent = answer
        } else {
            let answer = parseFloat(currentScorePlayer2.textContent) + result;
            currentScorePlayer2.textContent = answer;
        }
    }
}


holdBtn.addEventListener("click", () => {
    if (player1.classList.contains("active")) {
        let totalScore = parseFloat(currentScorePlayer1.textContent) + parseFloat(scorePlayer1.textContent);

        scorePlayer1.textContent = totalScore;
        currentScorePlayer1.textContent = 0;
        showWinner(scorePlayer1.textContent, scorePlayer2.textContent);
        switchUser()
    } else {
        let totalScore = parseFloat(currentScorePlayer2.textContent) + parseFloat(scorePlayer2.textContent);

        scorePlayer2.textContent = totalScore;
        currentScorePlayer2.textContent = 0;
        showWinner(scorePlayer1.textContent, scorePlayer2.textContent);
        switchUser()
    }
})



function showWinner(player1, player2) {
    if (parseFloat(player1) >= 100) {

        container.classList.add("winner-player");

        const winningTheme = document.querySelector(".win-theme-player");
        winningTheme.textContent = `${namePlayer1.textContent} wins  🙌🎉`
        reset();

    } else if (parseFloat(player2) >= 100) {
        document.body.classList.add("winner-player");

        const winningTheme = document.querySelector(".win-theme-player");
        winningTheme.textContent = `${namePlayer2.textContent} wins  🙌🎉`
        reset();
    }
}


function reset() {
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    currentScorePlayer1.textContent = 0;
    currentScorePlayer2.textContent = 0;
    const resetPlayers = player2.classList.contains("active") ? true : false;
    if (resetPlayers === true) {
        player2.classList.remove("active");
        player1.classList.add("active")
    }
}

newGameBtn.addEventListener("click", reset)




