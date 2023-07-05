const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('ALL SHELTERS');
})
router.get('/:id', (req, res) => {
    res.send('ALL ID SHELTERS');
})
router.get('/:id/edit', (req, res) => {
    res.send('ALL EIDTING SHELTERS');
})

module.exports = router;