// npm i connect-flash
// 496. Intro to Flash


const express = require('express');
const app = express();
const session = require('express-session')
const flash = require('connect-flash');

app.use(session({ secret: 'yoyo', unsave: false, saveUninitialized: false }))
app.use(flash());
app.set('view engine', 'ejs');


app.get('/farms', (req, res) => {
    res.render('farms', { message: req.flash('success') })
})


app.get('/farms/new', (req, res) => {
    res.render('new')
})



app.post('/newfarm', (req, res) => {
    req.flash('success', 'Button pressed')
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("Hosting on port 3000")
})