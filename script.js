'use strict';

const randNum = randNumBetweenRange(1, 20);
const indicator = document.getElementById('indicator');
const score = document.getElementById('score');
const submitBtn = document.getElementById('submit');

let currentScore = 20;
let highScore = 0;

submitBtn.addEventListener('click', checkGuess);
document.getElementById('again').addEventListener('click', resetAgain);

function randNumBetweenRange(min, max) {
    let randNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    return randNum;
}

function checkGuess() {
    let userInput = Number(document.getElementById('num').value);
    if (userInput == NaN) {
        indicator.textContent = 'Enter a valid number!';
        return 'Enter a valid number';
    }

    if (userInput > randNum) {
        indicator.textContent = 'Too High📈';
        currentScore -= 1;
        score.textContent = currentScore;
    } else if (userInput < randNum) {
        indicator.textContent = 'Too Low📉';
        currentScore -= 1;
        score.textContent = currentScore;
    } else {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.q-mark p span').textContent = randNum;
        indicator.textContent = '🎉Correct Number!';

        if (currentScore > highScore) {
            highScore = currentScore;
            document.getElementById('highscore').textContent = highScore;
        }
    }

    if (currentScore < 1) {
        indicator.textContent = '💥 You lost the game!';
    }
}

function resetAgain() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.q-mark p span').textContent = '?';
    indicator.textContent = 'Start guessing...';
    currentScore = 20;
    score.textContent = currentScore;
}
