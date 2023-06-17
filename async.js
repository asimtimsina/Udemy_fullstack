
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'

// }, 1000)

// setInterval(() => {
//     document.body.style.backgroundColor = 'orange'

// }, 2000)


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor
//         doNext && doNext()
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('pink', 1000, () => {
//         delayedColorChange('orange', 1000, () => {
//             delayedColorChange('violet', 1000)
//         })
//     })
// })


// searchMoviesAPI('amadeus', () => {
//     savetomyDB(movies, () => {
//         //if works // success
//     }), () => {
//         //if fails
//     }
// })


// 280. Demo: fakeRequest Using Callbacks


// 281. Demo: fakeRequest Using Promises

const request = fakeRequestPromise('yelp.com/api/coffee');

request.then(() => {
    //when request is sucess
    //promise resolved
    console.log("Sucess")
})

request.catach(() => {
    //when request is unavailable
    //promise rejected 
    console.log("Error")
})