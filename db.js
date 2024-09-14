require('dotenv').config();
const { Pool } = require('pg')

const port = process.env.DB_PORT
const user = process.env.DB_USER
const host = process.env.DB_HOST
const database = process.env.DB_NAME
const password = process.env.DB_PASSWORD

const pool = new Pool({
    user: user,
    host: host,
    database: database,
    password: password,
    port: port,
    idleTimeoutMillis: 300
})

module.exports = pool;