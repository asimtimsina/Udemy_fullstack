const mongoose = require('mongoose');

const express = require('express');
const app = express();

const User = require('./models/user');



app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/register', (req, res) => {
    res.render('register');
})


app.post('/register', (req, res) => {
    res.render('register');
})


app.get('/secret', (req, res) => {
    console.log('You cannot see me unless you are logged in')
    res.send('You cannot see me unless you are logged in')
})










app.listen(3000, () => {
    console.log('Listening on port 3000')
})