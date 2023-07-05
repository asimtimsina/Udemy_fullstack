const express = require('express');
const app = express()

const shelterRoutes = require('./shelter')
const dogRoutes = require('./dogs')
const adminRouter = require('./admin')

app.get('/', (req, res) => {
    res.send('Start!')
})

app.use('/shelters', shelterRoutes);
app.use('/dogs', dogRoutes);
app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log("Hosting on port 3000")
})