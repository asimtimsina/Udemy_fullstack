const { log } = require('console');
const express = require('express');
const app = express();

const path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

////////
const Product = require('./models/product')

////////
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })

////////


app.get('/dogs', (req, res) => {
    res.send('Woof')
})






app.listen(5000, () => {
    console.log('Listening on port 5000');
})