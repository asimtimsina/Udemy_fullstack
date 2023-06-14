// // 224. The forEach Method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print);

// numbers.forEach(function (number) {
//     console.log(number);
// })

const movies = [
    {
        name: "Alu",
        rating: 90
    },
    {
        name: "pidaulu",
        rating: 80
    }
]


// movies.forEach(function (movie) {
//     console.log(`${movie.name} rating is ${movie.rating}/100.`)
// })


/////////////////////////
// 225. The map Method
// map creates a new array from the return value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doublenum = numbers.map(function (num) {
    return num * 2;
})

console.log(doublenum);

const moviesName = movies.map(function (movie) {
    return movie.name.toUpperCase();
})

console.log(moviesName);