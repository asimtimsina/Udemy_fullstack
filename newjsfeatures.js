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


// 237. Spread with Array Literals
// can be used to convert array to object
//copy objects 
//mutate objects

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];
console.log(allPets); //["Blue", "Scout", "Rocket", "Rusty", "Wyatt"]   

//238. Spread with Objects

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine };
console.log(catDog);

const dataFromUser = {
    name: 'Asim',
    email: 'test@gmail.com',
    password: 'test123'
}

fullData = { ...dataFromUser, isActive: true, isAdmin: false };
console.log(fullData);

