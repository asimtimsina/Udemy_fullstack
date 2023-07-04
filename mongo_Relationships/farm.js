const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })


const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'fall', 'summer', 'winter']
    }
})

const Product = mongoose.model('Product', productSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'summer' },
//     { name: 'Asparagus', price: 3.99, season: 'spring' },
// ])

///////////////////////

const farmSchema = mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = mongoose.model('Farm', farmSchema);


// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Tim Farm', city: 'Irving, TX', })
//     const melon = await Product.findOne({ name: 'Goddess Melon' })
//     farm.products.push(melon)
//     await farm.save();
//     console.log(farm)

// }


// makeFarm()


// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: 'Tim Farm' })
//     const melon = await Product.findOne({ name: 'Asparagus' })

//     farm.products.push(melon)
//     await farm.save();
//     console.log(farm)

// }


// addProduct()





////////////////////////
// 465. Mongoose Populate

Farm.findOne({ name: 'Tim Farm' })
    .populate('products')
    .then(farm => console.log(farm))

//this will populate all the datas from the reference.