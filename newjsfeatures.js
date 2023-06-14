// // 235. Default Params

// function RollADie(numsides = 6) {
//     return Math.floor(Math.random() * numsides) + 1;
// }

// console.log(RollADie());
////////////////////////////////

// //236. Spread in Function Calls

// const nums = [13, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Math.max(nums); //NaN
// Math.max(...nums); //13 // spread out the array

// console.log(...nums); //13 4 5 6 7 8 9 10 11 12
// console.log(..."hello");   //h e l l o


// // 237. Spread with Array Literals
// // can be used to convert array to object
// //copy objects 
// //mutate objects

// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats, ...dogs];
// console.log(allPets); //["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]   

// //238. Spread with Objects

// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };

// const catDog = { ...feline, ...canine };
// console.log(catDog);

// const dataFromUser = {
//     name: 'Asim',
//     email: 'test@gmail.com',
//     password: 'test123'
// }

// fullData = { ...dataFromUser, isActive: true, isAdmin: false };
// console.log(fullData);
///////////////////////

//239. Rest Params
// arguments acts like array but doesn't have push/ pop method.

// function sum() {
//     console.log(arguments);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// sum();
// sum(1, 3, 5, 7, 9);

// function sum(...nums) {
//     //this is an actual array with all methods
//     return nums.reduce((total, num) => total + num)
// }

// // sum();
// console.log(sum(1, 3, 5, 7, 9));

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to: ${gold}`);
//     console.log(`Silver medal goes to: ${silver}`);
//     console.log(`And thanks to everyone else: ${everyoneElse}`);
// }

// raceResults('Asim', 'Ali', 'Ahmed', 'Ahsan', 'Aamir'); //Gold medal goes to: Asim Silver medal goes to: Ali And thanks to everyone else: Ahmed,Ahsan,Aamir

// /////////////////////////////////////
//240. Destructuring Arrays

const scores = [92, 90, 87, 83, 81, 75];

const highestScore = scores[0];
const secondHighestScore = scores[1];

const [high, second, ...everyoneElse] = scores;  //destructuring
// high = 92
// second = 90
// everyoneElse = [87, 83, 81, 75]

//241. Destructuring Objects


const user = {
    email: 'harvey@gmail.com',
    password: 'test123',
    firstName: 'Harvey',
    lastName: 'Specter',
    born: 1972,
    died: 2020,
    bio: 'Harvey Reginald Specter was a former corporate attorney, and currently a senior partner at Specter Litt Wheeler Williams.',
    city: 'New York City',
    state: 'New York'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const { email, firstName, lastName, city, bio } = user;
console.log(email, firstName, lastName, city, bio); // 

const { born: birthYear, died: deathYear } = user; //renaming
console.log(birthYear); //1972
console.log(deathYear); //2020

const { county } = user; //undefined
console.log(county); //undefined

const { country = 'USA' } = user; //default value
console.log(county); //USA


//242. Destructuring Params

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }

//can give default values too
function fullName({ firstName, lastName, country = "USA" }) {
    return `${firstName} ${lastName} lives in ${country}`;
}

console.log(fullName(user)); //Harvey Specter