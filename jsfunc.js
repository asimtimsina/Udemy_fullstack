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

greet("Asim");