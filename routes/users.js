const express = require('express');
const router = express.Router();

const User = require('../models/User.js')

router.get('/', (req, res) => {
    //console.info('request : ', req)
    
    const user = new User('darron moraes', 'darron@gmail.com', 'test@123')
    
    const gavin = new User('gavin gomes', 'gavin@gmail.com', 'test@123')


    const users = [user, gavin]

    console.info('users :: ', users)

    res.json({'users': users})
})

router.get('/${id}', (req, res) => {
    console.info('request : ', req)
    res.send(`get user ${id} route`)
})

module.exports = router;