const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "$ucce$$ful",
    host: "localhost",
    database: "gutties",
    port: 5432
});


module.exports = pool;

