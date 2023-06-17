// 290. WTF is JSON

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

const jsondog = JSON.stringify(dog)
console.log(jsondog)

const dogdata = JSON.parse(jsondog)
console.log(dogdata)


// 291. Using Hoppscotch (or Postman)
// https://hoppscotch.io/
