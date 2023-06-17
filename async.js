
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

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();

//         if (rand < 0.7) {
//             resolve('Your fake data here');
//         }
//         reject('Request error');

//     })
// }

// fakeRequest('/dogs/1')
//     .then((Data) => {
//         console.log("Done with Request.")
//         console.log(Data)
//     })
//     .catch((Err) => {
//         console.log("Error with Request.")
//         console.log(Err)
//     })


// 284. The Async Keyword


const hi = async () => {
    return 'Hi Hi HI'
}

hi().then((data) => {
    console.log("data returned is ", data);
})

async function hello() {
    //if throw is used then the promise is rejected. Otherwise resolved
    throw "Oh No."
}
hello()

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'

    if (password === 'Asimo') return 'Welcome!'
}


login('Yo', 'Asimo')
    .then((msg) => {
        console.log('Logged in')
        console.log(msg)
    })
    .catch((msg) => {
        console.log('Oh no')
        console.log(msg)
    })


// 285. The Await Keyword

// The await keyword can only be used inside of functions declared with async
// await will pause the execution of the function, waiting for a promise to be resolved
// await keyword can be used to assign the resolved value of a promise to a variable


async function login_info() {
    await login('yo', 'Asimo')
    console.log('Login Process Complete')

}

login_info();