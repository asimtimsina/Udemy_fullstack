// // 207. Intro to Functions

// // 208. Our Very First Function

// // 2 step Process
// // Define and run

// // function funcName(){
// //     //do something
// // }

// function singSong() {
//     console.log("TX");
//     console.log("CO");
//     console.log("OK");
// }

// //209. Arguments Intro

// // 210. Functions With Multiple Arguments

// function greet(firstName = 'Asimo', lastName) {
//     console.log("Hi! ", firstName, lastName[0], ".")
// }

// greet("Asim", 'Timsina');


// function isSnakeEyes(a, b) {
//     if (a === 1 && b == 1) {
//         console.log("Snake Eyes");
//     }
//     else {
//         console.log("Not Snake");
//     }
// }


// //211. The Return Keyword

// function add(x, y) {
//     return x + y;
// }

// let total = add(5, 6);
// console.log(total);

// function capitalize(word) {
//     first = word[0].toUpperCase();
//     newword = first + word.slice(1);
//     return newword;
// }

// console.log(capitalize('asim'));


// // 213. Function Scope

// // variables defined inside a scope {} are only availble inside the same scope

// let bird = 'Tota';
// function birdWatch() {
//     let bird = 'Maina';
//     console.log(bird);
// }
// birdWatch();
// console.log(bird);


//214. Block Scope

// let, var, const
// let and const are block scoped
// var is function scoped
// var is not used anymore


// let radius = 8;
// if (radius > 0) {
//     const PI = 3.1415;
//     let msg = 'HOO';
// }

// // console.log(PI);
// // console.log(msg);

// //215. Lexical Scope

// function bankRobbery() {
//     const heroes = ['Spiderman', 'Batman', 'Witch'];

//     function cryForHelp() {
//         for (let hero of heroes) {
//             console.log(`Please save us ${hero}.`)
//         }
//     }
//     // cryForHelp()
// }

// bankRobbery();


// //216. Function Expressions


// //storing a function in a variable

// const add = function (x, y) {
//     return x + y;
// }
// //functions are like values in JS

// const square = function (num) {
//     return num ** 2;
// }

// console.log(square(5));



// //217. Higher Order Functions

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);

// //218. Returning Functions

// function mystery() {
//     const rand = Math.random();

//     if (rand > 0.5) {
//         return function () {
//             console.log("Congrats, You win a million dollars.");

//         }
//     }
//     else {
//         return function () {
//             alert("You have been infected by a computer virus.");
//         }
//     }
// }

// let func = mystery();
// func();

// //////////////

// function makeBetweenFunc(a, b) {
//     return function (num) {
//         return num >= a && num <= b;
//     }
// }

// let newfunc = makeBetweenFunc(100, 200);
// console.log(newfunc(150));    //true
// console.log(newfunc(50));     //false


//219. Defining Methods
// function accessed using . method

// const myMath = {
//     Pi: 3.1415,
//     square: function (n) {
//         return n ** 2;
//     },
//     cube(n) {
//         return n ** 3;
//     }
// }

// console.log(myMath.square(2));
// console.log(myMath.cube(2));


//220. The Mysterious Keyword 'this'

// const cat = {
//     name: 'Blue',
//     color: 'grey',
//     breed: 'fold',
//     meow() {
//         console.log(this.name, "Meow!");
//         console.log(`${this.name}, Meow!`);
//     }
// }

// cat.meow();

// let meow2 = cat.meow;
// meow2(); // gets defined in window not in cat; so this won't work.


// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++;
//         // this.eggCount++;
//         return 'EGG';

//     }
// }

// console.log(hen.name); // "Helen"
// console.log(hen.eggCount); // 0
// hen.layAnEgg(); // "EGG"
// hen.layAnEgg();// "EGG"
// console.log(hen.eggCount); // 2


//221. Using Try/Catch

try {
    hello.toUpperCase();
}

catch {
    console.log("ERRROR");
}
console.log("After"); 