const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('tiny'))

// 429. Defining Our Own Middleware
// app.use((req, res, next) => {
//     console.log("This is the first middleware");
//     next();
//     console.log("This is the first middleware - after calling next");

// })

// app.use((req, res, next) => {
//     console.log("This is the second middleware");
//     next();
// })


app.use((req, res, next) => {
    console.log(req.query);
    const { password } = req.query;
    console.log(password);
    if (password === 'admin') {
        next();
    }
    else {
        res.send("Authenication error")
    }

})

// 430. More Middleware Practice
app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path);
    next();

})


// 433. Protecting Specific Routes

const verify = (req, res, next) => {
    console.log(req.query);
    const { password } = req.query;
    console.log(password);
    if (password === 'admin') {
        next();
    }
    else {
        res.send("Authenication error")
    }

}

app.get('/secret', verify, (req, res) => {
    res.send('The Secret is NOTHING!')
})


app.use('/cats', (req, res) => {
    res.send('MEW MEW!')
}) // this will catch all HTTP verbs - GET, POST ...

app.get('/', (req, res) => {
    res.send('HOME!')
})



app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})

app.use((req, res) => {
    res.status(404).send("404 Error Not Found")
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})