const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.send('All dogs go here')
})

router.get('/:id', (req, res) => {
    res.send('Specific dog go here')
})

router.get('/:id/edit', (req, res) => {
    res.send('Specific dog  info edited here')
})


module.exports = router;