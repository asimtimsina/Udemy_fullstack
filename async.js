
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

// const request = fakeRequestPromise('yelp.com/api/coffee');

// request.then(() => {
//     //when request is sucess
//     //promise resolved
//     console.log("Sucess")
// })

// request.catach(() => {
//     //when request is unavailable
//     //promise rejected 
//     console.log("Error")
// })


// 282. The Magic Of Promises

// fakeRequestPromise('yelp.com/api/coffee/1')
//     .then(() => {
//         console.log("It worked Page(1)")
//         return fakeRequestPromise('yelp.com/api/coffee/2')
//     })
//     .then(() => {
//         console.log("It worked Page(2)")
//         return fakeRequestPromise('yelp.com/api/coffee/3')
//     })
//     .then(() => {
//         console.log("It worked Page(1)")
//     })
//     .catch(() => {
//         console.log("Oh no, A request failed")
//     })


// 283. Creating Our Own Promises

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();

        if (rand < 0.7) {
            resolve('Your fake data here');
        }
        reject('Request error');

    })
}

fakeRequest('/dogs/1')
    .then((Data) => {
        console.log("Done with Request.")
        console.log(Data)
    })
    .catch((Err) => {
        console.log("Error with Request.")
        console.log(Err)
    })
