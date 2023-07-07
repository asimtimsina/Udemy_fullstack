const mongoose = require('mongoose');

const express = require('express');
const app = express();

const User = require('./models/user');

const bcrypt = require('bcrypt')

mongoose.connect('mongodb://127.0.0.1:27017/authdemo')
    .then(() => {
        console.log("Mongo Coonection open")
    })
    .catch(() => {
        console.log("Mongo Error")
    })


app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {

    // res.redirect('/secret')

    res.send('This is the homepage');
})

app.get('/register', (req, res) => {

    // res.redirect('/secret')

    res.render('register');
})


app.post('/register', async (req, res) => {
    // console.log(req.body);
    const { user } = req.body;
    const hashedPw = await bcrypt.hash(user.password, 12);

    const newUser = new User({
        username: user.username,
        password: hashedPw
    })
    await newUser.save();



    res.redirect('/');

    // res.send(req.body)
    // res.render('register');
})


app.get('/secret', (req, res) => {
    console.log('You cannot see me unless you are logged in')
    res.send('You cannot see me unless you are logged in')
})










app.listen(3000, () => {
    console.log('Listening on port 3000')
})