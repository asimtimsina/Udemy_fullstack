const express = require('express')
const app = express()


app.set('view engine', 'ejs')


// 350. Setting The Views Directory
const path = require('path');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/random', (req, res) => {
    const rand = Math.floor((Math.random() * 10) + 1)
    res.render('random', { rand }) // rand: rand
})


// 353. Subreddit Template Demo

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.render('subreddit', { subreddit })
})

app.listen(3000, () => {
    console.log("Let's get started")
})