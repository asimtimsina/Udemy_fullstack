// let maximum = parseInt(prompt("Enter the maximum number"));


// while (!maximum) {
//     maximum = parseInt(prompt("Enter the maximum number"));
// }

// const target = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess!");
// let attempts = 1;
// while (target != guess) {

//     if (guess === 'q') break;
//     guess = parseInt(guess);

//     if (guess > target) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }

//     attempts++;
// }

// if (guess != 'q') {
//     console.log(`CONGRATS YOU MADE IT in ${attempts} attempts.!`)
// }


//202. The Lovely For...Of Loop

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
];


for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}