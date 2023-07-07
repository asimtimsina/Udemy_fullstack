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

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}


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
    const { username, password } = user;

    const newUser = new User({ username, password })
    await newUser.save();
    req.session.user_id = user._id;
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

    const finduser = await User.findAndValidate(user.username, user.password);
    console.log(finduser)
    if (finduser) {
        req.session.user_id = finduser._id;
        res.redirect('/secret')
    }
    else {
        res.redirect('/login');
    }



    // const finduser = await User.findOne({ username: user.username })

    // console.log(finduser);
    // if (!finduser) {
    //     res.send("Incorrect username or password")
    // } else {
    //     // console.log(user.password, finduser.password)
    //     const validPassword = await bcrypt.compare(user.password, finduser.password);
    //     if (validPassword) {
    //         req.session.user_id = finduser._id;
    //         // res.send("Welcome, You're logged in")
    //         res.redirect('/secret')
    //     }
    //     else {
    //         res.send("Sorry, Incorrect username or password")
    //     }

})
/////////////////////

app.post('/logout', (req, res) => {
    // req.session.user_id = '';
    delete req.session.user_id;
    res.redirect('/');
})


//////////////////

app.get('/secret', requireLogin, (req, res) => {

    res.send('You cannot see me unless you are logged in')

})










app.listen(3000, () => {
    console.log('Listening on port 3000')
})