// 391. Connecting Mongoose to Mongo

const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log("Coonection open")
    })
    .catch(() => {
        console.log("Error")
    })


// 393. Our First Mongoose Model

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

const Herapheri = new Movie({ title: 'Hera pheri', year: 2001, score: 9, rating: 'R' })
const Herapheri_2 = new Movie({ title: 'Hera pheri 2', year: 2010, score: 7, rating: 'R' })

// Herapheri.save();


// Herapheri_2.save()

// Herapheri_2.score = 2.5;
// Herapheri_2.save();



