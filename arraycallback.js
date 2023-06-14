// // 224. The forEach Method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print);

// numbers.forEach(function (number) {
//     console.log(number);
// })

// const movies = [
//     {
//         name: "Alu",
//         rating: 90
//     },
//     {
//         name: "pidaulu",
//         rating: 80
//     }
// ]


// movies.forEach(function (movie) {
//     console.log(`${movie.name} rating is ${movie.rating}/100.`)
// })


/////////////////////////
// 225. The map Method
// map creates a new array from the return value

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const doublenum = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doublenum);

// const moviesName = movies.map(function (movie) {
//     return movie.name.toUpperCase();
// })

// console.log(moviesName);

///////////////////////////////
//226. Intro to Arrow Functions
//syntactically compact alternative to regular function expression


// const add = (x, y) => {
//     return x + y;
// }
// console.log(add(5, 6));

// let squrare = (n) => {
//     console.log(n ** 2);
// }
// squrare(20);

// let RollADie = () => {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }
// RollADie();

// let greet = (name) => {
//     console.log(`Hey ${name}.`);
// }
// greet("Asim");


// 227. Arrow Function Implicit Returns
// implicit returns - return is implied
//
// let RollADie = () => (
//     Math.floor(Math.random() * 6) + 1
// )
// console.log(RollADie());

// let add = (x, y) => x + y
// console.log(add(5, 7));


//228. Arrow Functions Wrapup

// const movies = [
//     {
//         name: "Alu",
//         rating: 90
//     },
//     {
//         name: "pidaulu",
//         rating: 80
//     }
// ]

// const newMovies = movies.map((movie) => {
//     return `${movie.name}: ${movie.rating}/100.`;
// })

// console.log(newMovies);


/////////////////////////////////////

// 229. setTimeout and setInterval

// console.log("Hello!....");
// setTimeout(() => {
//     console.log("...Still there ?")
// }, 3000)
// console.log("Goodbye!");

// const id = setInterval(() => {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }, 3000);

//to stop the interval
// clearInterval(id);


//230. The filter Method
//make subset from an arry

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const even = num.filter(n => {
//     return n % 2 == 0
// })

// const odd = num.filter(n => {
//     return n % 2 == 1
// })


// const movies = [
//     {
//         title: "Amadeus",
//         score: 99,
//         year: 1984
//     },
//     {
//         title: "Stand By Me",
//         score: 85,
//         year: 1986
//     },
//     {
//         title: "Parasite",
//         score: 95,
//         year: 2019
//     },
//     {
//         title: "Alien",
//         score: 90,
//         year: 1979
//     }
// ]
// const goodMovies = movies.filter(movie => movie.score > 80)
// console.log(goodMovies)

// const badMovies = movies.filter(movie => movie.score < 90)
// console.log(badMovies)

// const recentMovies = movies.filter(movie => movie.year > 2000)
// console.log(recentMovies)


// // title of goodMovies
// const goodMovieTitle = movies.filter(movie => movie.score > 90).map(m => m.title);
// console.log(goodMovieTitle);

////////////////////////////////////////

// 231. Some & Every Methods
// some - check if at least one element in an array meets a condition
// every - check if all elements in an array meet a condition

// const exams = [80, 98, 92, 78, 76, 90, 89, 84, 81, 77];

// let result = exams.every(score => score >= 75);
// console.log(result);

// result = exams.some(score => score >= 90);
// console.log(result);


// const movies = [
//     {
//         title: "Amadeus",
//         score: 99,
//         year: 1984
//     },
//     {
//         title: "Stand By Me",
//         score: 85,
//         year: 1986
//     },
//     {
//         title: "Parasite",
//         score: 95,
//         year: 2019
//     },
//     {
//         title: "Alien",
//         score: 90,
//         year: 1979
//     }
// ]

// let newMovie = movies.some(movie => movie.year >= 2020)
// console.log(newMovie);


// let allEvens = (array) => {
//     return array.every(num => num % 2 == 0)
// }

// console.log(allEvens([1, 2, 3, 4, 5]));
// console.log(allEvens([2, 4]));

// 232. The Notorious Reduce Method
// executes a reducer function on each element of the array, resulting in a single value

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

// const totalNew = prices.reduce((totalNew, price) => totalNew + price)
// console.log(totalNew);

// const minPrice = prices.reduce((min, price) => {
//     if (min < price) {
//         return min;
//     }
//     return price;
// })

// console.log(minPrice);

//////////////////////
//233. Arrow Functions & 'this'

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortein',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },

//     shoutName: function () {
//         setTimeout(() =>
//             console.log(this.fullName()), 3000)
//     }

// }