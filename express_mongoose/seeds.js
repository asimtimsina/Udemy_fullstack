const mongoose = require('mongoose');

const Product = require('./models/product')


////////


mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })


// const item = new Product({
//     name: "Banana",
//     price: .79,
//     category: 'fruit'
// })

// item.save()
//     .then(m => {
//         console.log("Success")
//         console.log(m)
//     })
//     .catch(m => {
//         console.log("Error")
//         console.log(m)
//     });

const items = [
    {
        name: 'Organic Celery',
        price: 1.5,
        category: 'vegetable'
    },
    {
        name: 'Choclate Whole Milk',
        price: 1.5,
        category: 'dairy'
    }
]

Product.insertMany(items)
    .then(m => {
        console.log("Success")
        console.log(m)
    })
    .catch(m => {
        console.log("Error")
        console.log(m)
    });
