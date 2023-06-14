let maximum = parseInt(prompt("Enter the maximum number"));


while (!maximum) {
    maximum = parseInt(prompt("Enter the maximum number"));
}

const target = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!");
let attempts = 1;
while (target != guess) {

    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > target) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess:");
    }

    attempts++;
}

if (guess != 'q') {
    console.log(`CONGRATS YOU MADE IT in ${attempts} attempts.!`)
}
