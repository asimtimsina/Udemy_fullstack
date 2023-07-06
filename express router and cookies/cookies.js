const express = require('express');
const app = express()

// npm i cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());




app.get('/greet', (req, res) => {
    const { name = 'No Name' } = req.cookies;
    console.log(req.cookies)
    res.send(`hey there ${name}`)
})


app.get('/setname', (req, res) => {
    res.cookie('name', 'Asimo')
    res.send("Sent you a cookie")
})








app.listen(3000, () => {
    console.log("Hosting on port 3000")
})