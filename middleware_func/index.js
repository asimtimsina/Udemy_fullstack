const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('HOME!')
})



app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF!')
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})