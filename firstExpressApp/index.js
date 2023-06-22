// 341. Our Very First Express App


const express = require('express');

const app = express()
// console.log(app)


// app.use(() => {
//     console.log("All request come here.")
// })

// app.listen(3000, () => {
//     console.log("Listening in port 3000")
// })


// 342. The Request & Response Objects

// app.use((req, res) => {
//     console.log("All request come here.")
//     // console.dir(req)
//     // res.send("Hello, we got your response!")
//     // res.send({ color: "red" })
//     res.send("<h1> Hello from Express.js </h1>")
// })

// app.listen(3000, () => {
//     console.log("Listening in port 3000")
// })


// 343. Express Routing Basics

app.get('/', (req, res) => {
    res.send('<h1>Youre at Homepage</h1 > ')
})

app.get('/cats', (req, res) => {
    res.send('Meow')
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1 > ')
})

app.post('/cats', (req, res) => {
    res.send('This is a post request to Cats. THis is different that GET requestpos')
})


app.get('/dogs', (req, res) => {
    res.send('Woof')
})


app.listen(3000, () => {
    console.log("Listening in port 3000")
})

app.use((req, res) => {
    console.log("All request come here.")
    // console.dir(req)
    // res.send("Hello, we got your response!")
    // res.send({ color: "red" })
    res.send("<h1> Hello from Express.js </h1>")
})