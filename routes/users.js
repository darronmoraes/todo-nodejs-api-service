const express = require('express');
const router = express.Router();

const User = require('../models/User.js')

const pool = require('../db.js')

router.get('/', (req, res) => {
    //console.info('request : ', req)
    console.info('attempt to get users')

    console.info('finding users')
    pool.query('SELECT * FROM users', (err, result) => {
        
        if (result.rowCount > 0) {
            console.info('setting up response')
            var users = result.rows;

            res.json({'users': users,
                'message': 'successfully fetched users',
                'status': res.statusCode})
        } else {
            console.error('error executing query: ', err)
        }
    })

    
})

router.get('/${id}', (req, res) => {
    console.info('request : ', req)
    res.send(`get user ${id} route`)
})

module.exports = router;