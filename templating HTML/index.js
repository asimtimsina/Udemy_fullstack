const express = require('express')
const app = express()


app.set('view engine', 'ejs')


// 350. Setting The Views Directory
const path = require('path');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})


app.listen(3000, () => {
    console.log("Let's get started")
})