const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            // _id: { id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

// const makeUser = async () => {
//     const u = new User({
//         first: 'Shyam',
//         last: 'Bahadur',
//     })
//     u.addresses.push({
//         street: '123 Main St',
//         city: 'NewYork',
//         state: 'NewYork',
//         country: 'USA'
//     })
//     const res = await u.save();
//     console.log(res)
// }

// makeUser();

const addAddress = async (id) => {
    const u = await User.findById(id);
    console.log(u)
    u.addresses.push({
        street: '321 Oak St',
        city: 'NewYork',
        state: 'NewYork',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res)
}

addAddress('64a475c0701d16b66686fcc8');
