
const name: string = 'Asim';
console.log(name);

let greetings: string = "Asimo";
console.log(greetings);

//number
let num: number = 5;

//boolean
let isLoggedIn: boolean = false;

console.log(isLoggedIn);

//Don't explicitly need to define the type
// Typescript does it automatically

let num2 = 5322;

console.log(num2.toFixed());


//////////////////////
//any

let hero;

function check() {
    return 'Thor';
}

hero = check();
// here the type of hero is any cause nothing is assigned to hero at the declaration


//but

let hero1: string;

function check1() {
    return 'Thor';
}

hero1 = check1();
// here the type of hero is string


export { }