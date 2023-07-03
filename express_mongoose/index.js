const { log } = require('console');
const express = require('express');
const app = express();

const methodoverride = require('method-override');

const path = require('path');

const category = ['fruit', 'vegetable', 'dairy']

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(methodoverride('_method'));

////////
const Product = require('./models/product')

////////
const mongoose = require('mongoose');
const { createDeflate } = require('zlib');


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })

////////

// 411. Creating Products


app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products/add', async (req, res) => {
    console.log(req.body);
    const newProduct = new Product(req.body);
    await newProduct.save();
    // res.redirect('/products')
    res.redirect(`/products/${newProduct.id}`)
})


app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const foundProduct = await Product.findById(id);
    console.log(foundProduct)
    res.render('products/edit', { foundProduct, category });
    // res.send('Building')
})

app.put('/products/edit/:id', async (req, res) => {
    const { id } = req.params;
    const editedItem = req.body;
    console.log(editedItem);
    const updatedProduct = await Product.findByIdAndUpdate(id, editedItem, { runValidators: true, new: true });
    console.log(updatedProduct)
    res.redirect(`/products/${updatedProduct._id}`)
})

app.delete('/products/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`)
})


app.get('/products', async (req, res) => {
    const category = req.query;
    if (category) {
        console.log(category)
        const products = await Product.find(category)

        console.log(products)
        res.render('products/index', { products, category })
    }
    else {
        const products = await Product.find({})
        // console.log(products)
        res.render('products/index', { products, category: 'All' })
    }

    /////////////////////
    // const category = req.query;
    // if (category) {
    //     console.log(category)
    // }
    // const products = await Product.find({})
    // // console.log(products)
    // res.render('products/index', { products })
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