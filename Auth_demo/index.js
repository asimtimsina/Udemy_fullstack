const mongoose = require('mongoose');

const express = require('express');
const app = express();

const User = require('./models/user');

const bcrypt = require('bcrypt')

const session = require('express-session');

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
app.use(session({ secret: 'Hardsecret' }))

app.get('/', (req, res) => {

    // res.redirect('/secret')

    res.send('This is the homepage');
})

//////////////
app.get('/register', (req, res) => {
    res.render('register');
})


app.post('/register', async (req, res) => {
    // console.log(req.body);
    const { user } = req.body;
    const hashedPw = await bcrypt.hash(user.password, 12);
    req.session.user_id = user._id;

    const newUser = new User({
        username: user.username,
        password: hashedPw
    })
    await newUser.save();



    res.redirect('/');

    // res.send(req.body)
    // res.render('register');
})
//////////////////

app.get('/login', (req, res) => {
    res.render('login')

})

app.post('/login', async (req, res) => {
    const { user } = req.body;

    const finduser = await User.findOne({ username: user.username })
    // console.log(finduser);
    if (!finduser) {
        res.send("Incorrect username or password")
    } else {
        // console.log(user.password, finduser.password)
        const validPassword = await bcrypt.compare(user.password, finduser.password);
        if (validPassword) {
            req.session.user_id = finduser._id;
            // res.send("Welcome, You're logged in")
            res.redirect('/secret')
        }
        else {
            res.send("Sorry, Incorrect username or password")
        }

    }


})


//////////////////

app.get('/secret', (req, res) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        console.log('You cannot see me unless you are logged in')
        res.send('You cannot see me unless you are logged in')
    }

})










app.listen(3000, () => {
    console.log('Listening on port 3000')
})