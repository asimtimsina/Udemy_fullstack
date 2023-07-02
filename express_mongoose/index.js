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


app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // console.log(products)
    res.render('products/index', { products })
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    // res.send("Hi")
    res.render('products/product', { product });

})



// 409. Products Index



app.listen(5000, () => {
    console.log('Listening on port 5000');
})