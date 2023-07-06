// 494. Express Session
// Express sessions are used to store data on the server side
// npm i express-session


const express = require('express');
const app = express();
const session = require('express-session')





app.use(session({
    secret: 'thisismynotagoodsecret',
    resave: false,
    saveUninitialized: false
}))

app.get('/viewcount', (req, res) => {
    console.log(req.session.count)
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 0;
        console.log(req.session.count)
    }
    res.send(`You have viewed the page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
    const { username = 'Unknown' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.query;

    res.send(`Hi  ${username}`)
})





app.listen(3000, () => {
    console.log("Hosting on port 3000")
})