const express = require('express');
const app = express()

// npm i cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));




app.get('/greet', (req, res) => {
    const { name = 'No Name' } = req.cookies;
    console.log(req.cookies)
    res.send(`hey there ${name}`)
})


app.get('/setname', (req, res) => {
    res.cookie('name', 'Asimo')
    res.send("Sent you a cookie")
})


app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true });
    res.send('Sent the signed cookie');
})


app.get('/verifycookie', (req, res) => {
    console.log(req.cookies); //doesn't contain signed cookies
    console.log(req.signedCookies); // contain signed cookies

    res.send(req.signedCookies);
})




app.listen(3000, () => {
    console.log("Hosting on port 3000")
})