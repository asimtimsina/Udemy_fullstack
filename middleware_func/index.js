const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('tiny'))

// 429. Defining Our Own Middleware
app.use((req, res, next) => {
    console.log("This is the first middleware");
    next();
    console.log("This is the first middleware - after calling next");

})

app.use((req, res, next) => {
    console.log("This is the second middleware");
    next();
})

app.get('/', (req, res) => {
    res.send('HOME!')
})



app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})