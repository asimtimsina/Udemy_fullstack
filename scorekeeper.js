// 272. Score Keeper Pt. 1

const p1Button = document.querySelector('#button1')
const p2Button = document.querySelector('#button2')
const resetButton = document.querySelector('#reset')

let p1Score = 0
let p2Score = 0
let winningScore = 5;
let isGameOver = false;

const p1Display = document.querySelector('#score1display')
const p2Display = document.querySelector('#score2display')

p1Button.addEventListener('click', function () {
    if (!isGameOver && p1Score !== winningScore) {
        // p1Display.innerText = ++p1Score
        p1Display.textContent = ++p1Score
    }
    else {
        isGameOver = true
    }

})

p2Button.addEventListener('click', function () {
    if (!isGameOver && p2Score !== winningScore) {
        // p2Display.innerText = ++p2Score
        p2Display.textContent = ++p2Score
    } else {
        isGameOver = true
    }

})