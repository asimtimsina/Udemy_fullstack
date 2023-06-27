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
        id: 1,
        username: 'SaiguniUS',
        comment: 'What about the second doctor who couldnt diagnose you properly.'
    },
    {
        id: 2,
        username: 'redBatMan',
        comment: 'meniscus tear lmao, i feel you brother.'
    },
    {
        id: 3,
        username: 'Kheman',
        comment: 'An X-Ray cannot properly outline a soft tissue injury, that is what your ligaments and tendons are.'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')

})


app.post('/comments', (req, res) => {
    console.log(req.body)
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})

// 369. RESTful Comments Show

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    console.log(comment)
    res.render('comments/show', { comment })
    // console.log()
})

////////////////////
app.listen(5000, () => {
    console.log("Listening on Port 5000")
})