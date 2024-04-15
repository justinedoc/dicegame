"use strict";
const player0El = document.querySelector(".player0");
const player1El = document.querySelector(".player1");
const namePlayer0 = document.getElementById("name--0");
const namePlayer1 = document.getElementById("name--1");
const scorePlayer0 = document.getElementById("score--0");
const scorePlayer1 = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const newGameBtn = document.querySelector(".btn--new");
const diceEl = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const winningScore = 100;

let scores, currentScore, activePlayer, playing;

const gameStart = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.style.opacity = `0`;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  scorePlayer1.textContent = 0;
  scorePlayer0.textContent = 0;
  namePlayer0.textContent = "player 1";
  namePlayer1.textContent = "player 2";
  player0El.classList.remove("winner-player");
  player1El.classList.remove("winner-player");
  player0El.classList.add("active");
};

gameStart();

// Switching Players
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : 0;

  player0El.classList.toggle("active");
  player1El.classList.toggle("active");
};

// Rolling the dice
rollDiceBtn.addEventListener("click", () => {
  if (playing) {
    const randomNum = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `img/dice-${randomNum}.png`;
    setTimeout(() => {
      diceEl.style.opacity = `1`;
    }, 20);

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holding scores
holdBtn.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
      playing = false;
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("winner-player");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("active");

      document.getElementById(`name--${activePlayer}`).textContent =
        "Winner🏆🥇";
      diceEl.style.opacity = "0";
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener("click", gameStart);

// initial codes;

// currentScorePlayer1.textContent = 0;
// currentScorePlayer2.textContent = 0;
// scorePlayer1.textContent = 0;
// scorePlayer2.textContent = 0;
// let currentPlayer1Name = namePlayer1.textContent;
// let currentPlayer2Name = namePlayer2.textContent;

// function randomMaths(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }

// function switchUser() {
//   const switchPlayer = player1.classList.contains("active") ? true : false;
//   switch (switchPlayer) {
//     case true:
//       player1.classList.remove("active");
//       player2.classList.add("active");
//       container.classList.add("player2-active");
//       break;
//     default:
//       player2.classList.remove("active");
//       player1.classList.add("active");
//       container.classList.remove("player2-active");
//       container.classList.add("player1-active");
//   }
// }

// let result;
// rollDiceBtn.addEventListener("click", diceRoll);

// function diceRoll() {
//   result = randomMaths(1, 6);

//   if (result === 1) {
//     dice.src = `img/dice-1.png`;
//     switchUser();
//     currentScorePlayer1.textContent = 0;
//     currentScorePlayer2.textContent = 0;
//   } else if (result === 2) {
//     dice.src = `img/dice-2.png`;
//     if (player1.classList.contains("active")) {
//       let answer = parseFloat(currentScorePlayer1.textContent) + result;
//       currentScorePlayer1.textContent = answer;
//     } else {
//       let answer = parseFloat(currentScorePlayer2.textContent) + result;
//       currentScorePlayer2.textContent = answer;
//     }
//   } else if (result === 3) {
//     dice.src = `img/dice-3.png`;
//     if (player1.classList.contains("active")) {
//       let answer = parseFloat(currentScorePlayer1.textContent) + result;
//       currentScorePlayer1.textContent = answer;
//     } else {
//       let answer = parseFloat(currentScorePlayer2.textContent) + result;
//       currentScorePlayer2.textContent = answer;
//     }
//   } else if (result === 4) {
//     dice.src = `img/dice-4.png`;
//     if (player1.classList.contains("active")) {
//       let answer = parseFloat(currentScorePlayer1.textContent) + result;
//       currentScorePlayer1.textContent = answer;
//     } else {
//       let answer = parseFloat(currentScorePlayer2.textContent) + result;
//       currentScorePlayer2.textContent = answer;
//     }
//   } else if (result === 5) {
//     dice.src = `img/dice-5.png`;
//     if (player1.classList.contains("active")) {
//       let answer = parseFloat(currentScorePlayer1.textContent) + result;
//       currentScorePlayer1.textContent = answer;
//     } else {
//       let answer = parseFloat(currentScorePlayer2.textContent) + result;
//       currentScorePlayer2.textContent = answer;
//     }
//   } else if (result === 6) {
//     dice.src = `img/dice-6.png`;
//     if (player1.classList.contains("active")) {
//       let answer = parseFloat(currentScorePlayer1.textContent) + result;
//       currentScorePlayer1.textContent = answer;
//     } else {
//       let answer = parseFloat(currentScorePlayer2.textContent) + result;
//       currentScorePlayer2.textContent = answer;
//     }
//   }
// }

// holdBtn.addEventListener("click", () => {
//   if (player1.classList.contains("active")) {
//     let totalScore =
//       parseFloat(currentScorePlayer1.textContent) +
//       parseFloat(scorePlayer1.textContent);

//     scorePlayer1.textContent = totalScore;
//     currentScorePlayer1.textContent = 0;
//     showWinner(scorePlayer1.textContent, scorePlayer2.textContent);
//     switchUser();
//   } else {
//     let totalScore =
//       parseFloat(currentScorePlayer2.textContent) +
//       parseFloat(scorePlayer2.textContent);

//     scorePlayer2.textContent = totalScore;
//     currentScorePlayer2.textContent = 0;
//     showWinner(scorePlayer1.textContent, scorePlayer2.textContent);
//     switchUser();
//   }
// });

// const playerName = () => {
//   !player1.classList.contains("winner-player")
//     ? (namePlayer1.textContent = currentPlayer1Name)
//     : (namePlayer1.textContent = `P1 wins  🙌🎉`);
//   !player2.classList.contains("winner-player")
//     ? (namePlayer2.textContent = currentPlayer2Name)
//     : (namePlayer2.textContent = `P2 wins  🙌🎉`);
// };

// function showWinner(Player1, Player2) {
//   if (parseFloat(Player1) >= 100) {
//     player1.classList.add("winner-player");
//     playerName();
//   } else if (parseFloat(Player2) >= 100) {
//     player2.classList.add("winner-player");
//     playerName();
//   }
// }

// function reset() {
//   scorePlayer1.textContent = 0;
//   scorePlayer2.textContent = 0;
//   currentScorePlayer1.textContent = 0;
//   currentScorePlayer2.textContent = 0;
//   player1.classList.contains("winner-player")
//     ? player1.classList.remove("winner-player")
//     : player2.classList.remove("winner-player");
//   const resetPlayers = player2.classList.contains("active") ? true : false;
//   if (resetPlayers === true) {
//     player2.classList.remove("active");
//     player1.classList.add("active");
//   }

//   playerName();
// }

// newGameBtn.addEventListener("click", reset);
