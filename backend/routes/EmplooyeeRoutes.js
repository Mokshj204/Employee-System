const express = require('express')

const router = express.Router()

router.get('/get-all-employees',(req, res) => {
    res.json({mssg: 'Get all emp'})
})

router.get('/get-a-single-employee/:id', (req,res) => {
    res.json({mssg: 'Get a single employee'})
})

module.exports = router