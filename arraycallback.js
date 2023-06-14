// 224. The forEach Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function print(element) {
    console.log(element);
}

numbers.forEach(print);

numbers.forEach(function (number) {
    console.log(number);
})

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


movies.forEach(function (movie) {
    console.log(`${movie.name} rating is ${movie.rating}/100.`)
})