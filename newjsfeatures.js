// // 235. Default Params

// function RollADie(numsides = 6) {
//     return Math.floor(Math.random() * numsides) + 1;
// }

// console.log(RollADie());
////////////////////////////////

//236. Spread in Function Calls

const nums = [13, 4, 5, 6, 7, 8, 9, 10, 11, 12];

Math.max(nums); //NaN
Math.max(...nums); //13 // spread out the array

console.log(...nums); //13 4 5 6 7 8 9 10 11 12
console.log(..."hello");   //h e l l o
