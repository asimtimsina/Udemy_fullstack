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
        required: true,
        min: [0, 'Price Must be Postive Num']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema);


// const bike = new Product({ name: 'Bike', price: 599 });

// bike.save()
//     .then(res => {
//         console.log('It worked')
//     })
//     .catch(err => {
//         console.log('Error')
//     })


// const car = new Product({ name: 'Toyota', price: 59999, color: 'red' });

// car.save()
//     .then(res => {
//         console.log('It worked')
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     })

// 399. Additional Schema Constraints


// const bikeHelmet = new Product({ name: 'Bike Helmet', price: 29.99 })
// bikeHelmet.save()
//     .then(res => {
//         console.log('It worked')
//     })
//     .catch(err => {
//         console.log('Error')
//     })


// // 400. Validating Mongoose Updates
// const TirePump = new Product({ name: 'Tire Pump', price: 39.99 })
// TirePump.save()
//     .then(res => {
//         console.log('It worked')
//     })
//     .catch(err => {
//         console.log('Error')
//     })


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50 }, { new: true })
//     .then(res => {
//         console.log('It worked')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     })


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50 }, { new: true, runValidators: true })
//     .then(res => {
//         console.log('It worked')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     })

// 401. Mongoose Validation Errors

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -50 }, { new: true, runValidators: true })
//     .then(res => {
//         console.log('It worked')
//         console.log(res)
//     })
//     .catch(err => {
//         console.log('Error')
//         console.log(err)
//     }) //Error: Validation failed: price: Price Must be Postive Num


Product.findOneAndUpdate({ name: 'Toyota' }, { size: 'LE' }, { new: true, runValidators: true })
    .then(res => {
        console.log('It worked')
        console.log(res)
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    })  //size: ValidatorError: `LE` is not a valid enum value for path `size`.

