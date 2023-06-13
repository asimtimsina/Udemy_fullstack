// console.log("Hello World!")

// let total = 1 + 3;
// console.log(total);

// //167. If Statements


// if (1 + 1 === 2) {
//     console.log("Math still works");
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log("Your number is less than 0.5");
//     console.log(random);
// }


//168. Else-If Statements

// dayOfWeek = "Thursday";

// if (dayOfWeek === 'Monday') {
//     console.log("Ugh, I hate Mondays!")
// }
// else if (dayOfWeek === 'Saturday') {
//     console.log("Yay, I love Saturdays!")
// }
// else if (dayOfWeek === 'Friday') {
//     console.log("Fridays are decent, especially after work!")
// } else {
//     console.log("MEH")
// }


// 0-5 - Free
// 5-10 - Child $10
// 10-65 - Adult $20
// 65+ - Senior $10

// let age = 8;

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// }
// else if (age < 10) {
//     console.log("You are a child. You pay $10!")
// }
// else if (age < 65) {
//     console.log("You are an adult. You pay $20!")
// }
// //169. Else
// else {
//     console.log("You are a senior. You pay $10!")
// }


//170. Nesting Conditionals
// const password = prompt("Please enter a new password");

// if (password.length >= 6) {
//     // console.log("Long enough password!")
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid Password!")
//     }
//     else {
//         console.log("Password cannot contain spaces!")
//     }
// } else {
//     console.log("Password too short! Must be 6+ characters")
// }



//171. Truth-y & False-y Values

// Everything is truthy except for:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// if (password) {
//     console.log("Truthy")
// } else {
//     console.log("Falsey")
// }


//172. Logical AND
//&& AND
// 1<4 && age < 21 -> both must be true

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid Password!")
// } else {
//     console.log("Incorrect format for password!")
// }

// 173. Logical OR
// || OR
// age === 10 || 0 === 0 -> one must be true


// 0-5 - Free
// 5-10 - Child $10
// 10-65 - Adult $20
// 65+ - Senior $10

// let age = 66;

// if (age < 5) {
//     console.log("You get in for free!")
// }
// else if (age < 10 || age > 65) {
//     console.log(" You pay $10!")
// }
// else if (age < 65) {
//     console.log(" You pay $20!")
// }

// //174. Logical NOT
// // ! NOT

// let babyage = 10;

// if (babyage !== 90) {
//     console.log("NOT EQUAL TO 90!")
// }

//175. The Switch Statement Is...A Lot

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// 177. Introducing Arrays

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days.length);