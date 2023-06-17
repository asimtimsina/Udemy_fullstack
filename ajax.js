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


const req = new XMLHttpRequest();

req.onload = function () {
    console.log("Loaded")
    console.log(this.responseText)
    const data = JSON.parse(this.responseText)
    console.log('name:', data.name)
}

req.onerror = function () {
    console.log("Error")
    console.log(this)
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send();

