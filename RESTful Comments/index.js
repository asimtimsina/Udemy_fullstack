const express = require('express')
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.send("<h1> Welcome to the homepage </h1>")
})


// 366. RESTful Comments Index

const comments = [
    {
        username: 'SaiguniUS',
        comment: 'What about the second doctor who couldnt diagnose you properly.'
    },
    {
        username: 'redBatMan',
        comment: 'meniscus tear lmao, i feel you brother.'
    },
    {
        username: 'Kheman',
        comment: 'An X-Ray cannot properly outline a soft tissue injury, that is what your ligaments and tendons are.'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.listen(5000, () => {
    console.log("Listening on Port 5000")
})