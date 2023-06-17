// // 272. Score Keeper Pt. 1

// const p1Button = document.querySelector('#button1')
// const p2Button = document.querySelector('#button2')
// const resetButton = document.querySelector('#reset')

// let p1Score = 0
// let p2Score = 0
// let winningScore = 3;
// let isGameOver = false;

// const p1Display = document.querySelector('#score1display')
// const p2Display = document.querySelector('#score2display')

// p1Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         if (p1Score !== winningScore) {
//             // p1Display.innerText = ++p1Score
//             p1Display.textContent = ++p1Score
//         }

//         else {
//             isGameOver = true
//             p1Display.classList.add('winner')
//             p2Display.classList.add('loser')
//         }
//     }

// })

// p2Button.addEventListener('click', function () {
//     if (!isGameOver) {
//         if (p2Score !== winningScore) {
//             // p1Display.innerText = ++p1Score
//             p2Display.textContent = ++p2Score
//         }

//         else {
//             isGameOver = true
//             p2Display.classList.add('winner')
//             p1Display.classList.add('loser')
//         }
//     }
// })

// // 273. Score Keeper Pt. 2

// let resetFunc = () => {
//     isGameOver = false
//     p1Score = 0
//     p2Score = 0
//     p1Display.textContent = 0
//     p2Display.textContent = 0

//     p1Display.classList.remove('winner')
//     p2Display.classList.remove('winner')
//     p1Display.classList.remove('loser')
//     p2Display.classList.remove('loser')
// }

// resetButton.addEventListener('click', resetFunc)

// const winningScoreSelect = document.querySelector('#playto')

// winningScoreSelect.addEventListener('change', () => {
//     winningScore = parseInt(winningScoreSelect.value)
//     resetFunc()
// })



// // 275. Score Keeper Pt. 4 Refactoring

const p1 = {
    button: document.querySelector('#button1'),
    score: 0,
    display: document.querySelector('#score1display')

}

const p2 = {
    button: document.querySelector('#button2'),
    score: 0,
    display: document.querySelector('#score2display')

}

const resetButton = document.querySelector('#reset')
let winningScore = 3;
let isGameOver = false;

let updateStatus = (player, opponent) => {
    if (!isGameOver) {
        player.score++
        if (player.score === winningScore) {
            isGameOver = true
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            p1.button.disabled = true;
            p2.button.disabled = true;

        }

        // p1Display.innerText = ++p1Score
        player.display.textContent = player.score


    }

}

p1.button.addEventListener('click', () => { updateStatus(p1, p2) })
p2.button.addEventListener('click', () => { updateStatus(p2, p1) })


let resetFunc = () => {
    isGameOver = false
    p1.score = 0
    p2.score = 0
    p1.display.textContent = 0
    p2.display.textContent = 0

    p1.display.classList.remove('winner', 'loser')
    p2.display.classList.remove('winner', 'loser')
    p1.button.disabled = false;
    p2.button.disabled = false;

}

resetButton.addEventListener('click', resetFunc)

const winningScoreSelect = document.querySelector('#playto')

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value)
    resetFunc()
})