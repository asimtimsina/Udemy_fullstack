// 404. Mongoose Virtuals
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/person')
    .then(() => {
        console.log("Coonection open")
    })
    .catch(() => {
        console.log("Error")
    })

const personSchema = mongoose.Schema({
    firstName: String,
    lastName: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
})

const Person = mongoose.model('Person', personSchema);

const newPerson = new Person({ firstName: 'Nischal', lastName: 'Timsina' })
newPerson.save()
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

console.log(newPerson.fullName) // Nischal Timsina