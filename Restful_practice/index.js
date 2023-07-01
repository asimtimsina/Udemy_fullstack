const express = require('express');
const app = express();

const path = require('path');

const { v4: uuid } = require('uuid');

var methodOverride = require('method-override')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));


let users = [
    {
        id: uuid(),
        name: "Asim Timsina",
        phone: 123123,
        email: "asimtimsina@gmail.com"
    },
    {
        id: uuid(),
        name: "Nischal Timsina",
        phone: 234234,
        email: "nischaltimsina@gmail.com"
    },
    {
        id: uuid(),
        name: "Bishswash Sapkota",
        phone: 456456,
        email: "bishwash@gmail.com"
    }
]

app.get('/', (req, res) => {
    res.render('index', { users });
})


app.get('/users/addnew', (req, res) => {
    res.render('add')
})


app.post('/users/addnew', (req, res) => {
    // console.log(req.body);
    // const { id } = req.body;
    // console.log(id);
    // res.redirect('/')

    console.log(req.body)
    const newUser = {
        id: uuid(),
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    };
    users.push(newUser);
    // const { username, comment } = req.body;
    // comments.push({ id: uuid(), username, comment })
    res.redirect('/');
})


app.get('/users/:id', (req, res) => {
    // res.send("Loading")
    const { id } = req.params;
    const each = users.find(c => c.id === id)
    res.render('show', { each });
})

app.get('/users/:id/edit', (req, res) => {
    const { id } = req.params;
    const each = users.find(c => c.id === id)
    res.render('edit', { each });
})

app.patch('/users/:id/edit', (req, res) => {
    const { id } = req.params;
    const newdata = req.body;
    const foundData = users.find(c => c.id === id);

    console.log(foundData);
    console.log(newdata);
    foundData.name = newdata.name;
    foundData.phone = newdata.phone;
    foundData.email = newdata.email;
    res.redirect('/');
})


app.delete('/users/:id/delete', (req, res) => {
    const { id } = req.params;
    users = users.filter(c => c.id !== id);
    res.redirect('/')
})

app.listen(5000, () => {
    console.log('Listening on port 5000')
})