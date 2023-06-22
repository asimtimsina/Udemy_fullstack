const express = require('express');

const app = express()
console.log(app)


app.use(() => {
    console.log("All request come here.")
})

app.listen(3000, () => {
    console.log("Listening in port 3000")
})


