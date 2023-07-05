const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    else {
        res.send("ACCESS DENIED!!")
    }
})

router.get('/secret', (req, res) => {
    res.send("This is the secret. ")
})

router.get('/secret', (req, res) => {
    res.send("The secret is not the key. ")
})


module.exports = router;