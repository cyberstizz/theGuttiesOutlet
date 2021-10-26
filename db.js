const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "null",
    host: "localhost",
    database: "gutties",
    port: 5432
});


module.exports = pool;

