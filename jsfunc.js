// 207. Intro to Functions

// 208. Our Very First Function

// 2 step Process
// Define and run

// function funcName(){
//     //do something
// }

function singSong() {
    console.log("TX");
    console.log("CO");
    console.log("OK");
}

//209. Arguments Intro

// 210. Functions With Multiple Arguments

function greet(firstName = 'Asimo', lastName) {
    console.log("Hi! ", firstName, lastName[0], ".")
}

greet("Asim", 'Timsina');


function isSnakeEyes(a, b) {
    if (a === 1 && b == 1) {
        console.log("Snake Eyes");
    }
    else {
        console.log("Not Snake");
    }
}


//211. The Return Keyword

function add(x, y) {
    return x + y;
}

let total = add(5, 6);
console.log(total);

function capitalize(word) {
    first = word[0].toUpperCase();
    newword = first + word.slice(1);
    return newword;
}

console.log(capitalize('asim'));