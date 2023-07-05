const express = require('express');
const app = express()



app.get('/greet', (req, res) => {
    res.send("hey there")
})


app.get('/setname', (req, res) => {
    res.cookie('name', 'Asimo')
    res.send("Sent you a cookie")
})








app.listen(3000, () => {
    console.log("Hosting on port 3000")
})