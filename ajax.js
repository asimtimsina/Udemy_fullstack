// 290. WTF is JSON

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

// const jsondog = JSON.stringify(dog)
// console.log(jsondog)

// const dogdata = JSON.parse(jsondog)
// console.log(dogdata)


// 291. Using Hoppscotch (or Postman)
// https://hoppscotch.io/



// 296. Making XHRs


// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("Loaded")
//     console.log(this.responseText)
//     const data = JSON.parse(this.responseText)
//     console.log('name:', data.name)
// }

// req.onerror = function () {
//     console.log("Error")
//     console.log(this)
// }

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();



// 297. Using The Fetch API

// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log('Resolved')
//         console.log(res)
//         return res.json()
//     })
//     .then(data => {
//         console.log('JSON done', data)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     })


// const loadStarwarsPeople = async () => {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     data = await res.json()
//     console.log(data)

// }

// loadStarwarsPeople()


// 298. Introducing Axios

// axios.get('https://swapi.dev/api/people/1')
//     .then(response => {
//         console.log(response)
//     })
//     .catch(err => {
//         console.log("Error")
//         console.log(err)
//     })

// //no need to convert to json
// const getStarWarsPerson = async (id) => {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}`)
//     console.log(res.data)

// }

// getStarWarsPerson(3)



// 299. Setting Headers With Axios

const getDadJokes = async () => {
    const headers = {
        headers: {
            Accept: 'application/json'
        }
    }
    const joke = await axios.get('https://icanhazdadjoke.com/', headers)
    console.log(joke.data.joke)
    return joke.data.joke
}


const jokesBtn = document.querySelector('#jokeBtn')
const jokesul = document.querySelector('#jokes')

jokesBtn.addEventListener('click', async () => {
    let joke = await getDadJokes();
    const newli = document.createElement('li')
    newli.innerText = joke
    jokesul.appendChild(newli)
})


getDadJokes()
