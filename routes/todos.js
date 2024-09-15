const express = require('express');
const router = express.Router();

const pool = require('../db.js')

const Todo = require('../models/Todo.js')

router.get('/', (req, res) => {
    console.log("request :: ", req.params)
    console.info('attempt to get todos')

    console.info('finding users')
    pool.query('SELECT * FROM todos', (err, result) => {

        if (err) {
            console.error('error executing query: ', err)
            return res.status(500).json({
                'message': `${err.message}`,
                'status': res.statusCode})
        }

        console.info('setting up response')
        var users = result.rows;

        res.json({'users': users,
                'message': 'successfully fetched todos',
                'status': res.statusCode})
        
    })

    
})

router.get('/users/:id', (req, res) => {
    console.log("request :: ", req.params)
    console.info('attempt to get todos')

    const userId = req.params.id

    pool.query('SELECT * FROM users where id = $1', [userId], (err, result) => {
        
        if (result.rowCount === 0) {
            console.warn('user not found')

            return res.status(404).json({
                'message': `todos not found for user ${userId}`,
                'status': res.statusCode})
        }

        const user = result.rows[0];
        console.info(`user ${user.name}`)

        console.info('finding users')
        pool.query('SELECT * FROM todos WHERE user_id = $1', [user.id], (err, result) => {

            if (err) {
                console.error('error executing query: ', err)
                return res.status(500).json({
                    'message': `${err.message}`,
                    'status': res.statusCode})
            }

            var todosResult = result.rows;

            // var todos = todosResult.map(todo => new Todo(todosResult.id, todosResult.title, todosResult.content))

            console.info('setting up response')

            res.json({'todos': todosResult,
                    'message': 'successfully fetched todos',
                    'status': res.statusCode})
        
        })
    })
})

module.exports = router