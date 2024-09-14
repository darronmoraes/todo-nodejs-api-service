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

router.get('/:id', (req, res) => {
    console.info(`attempt to find user ${req.params.id} by ID`)

    const  userId = req.params.id;


    pool.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
        // console.info(result)

        if (err) {
            console.error(`opps! query didnt fire, something went wrong`)
            console.error(`trace ${err.stack}`)
            console.error(`message: ${err.message}`)

            return res.status(500).json({
                'message': `${err.message}`,
                'status': res.statusCode})
        }

        if (result.rowCount === 0) {
            console.warn('user not found')

            return res.status(404).json({
                'message': `user ${userId} not found`,
                'status': res.statusCode})
        }

        console.info('user found, setting response object')
        const user = result.rows[0];
        
        console.info(`find user ${userId} by ID completed`)
        res.json({user,
            'message': 'successfully fetched users',
            'status': res.statusCode})
    })
    
    
})

module.exports = router;