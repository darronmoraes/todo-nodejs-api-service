const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todos',
    password: 'admin@123',
    port: 5432,
    idleTimeoutMillis: 300
})

module.exports = pool;