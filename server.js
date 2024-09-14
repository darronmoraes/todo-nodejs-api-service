const express = require('express');
const app = express();

// include route files
const usersRoute = require('./routes/users')

// use routes
app.use('/users', usersRoute)

// Define a route in express
app.get('/home', (req, res) => {
    res.send('<h1>Hello World, Node.js and Express Server!</h1>')
})

// specify the port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})