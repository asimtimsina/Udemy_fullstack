const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/shoppingApp')
    .then(() => {
        console.log("Coonection open")
    })
    .catch(() => {
        console.log("Error")
    })


// 398. Mongoose Schema Validations


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema);


const bike = new Product({ name: 'Bike', price: 599 });

bike.save()
    .then(res => {
        console.log('It worked')
    })
    .catch(err => {
        console.log('Error')
    })


const car = new Product({ name: 'Toyota', price: 59999, color: 'red' });

car.save()
    .then(res => {
        console.log('It worked')
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })

