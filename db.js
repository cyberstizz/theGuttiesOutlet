// creation of the vatiable representing our connection to the database -- 
// which is through the pg library

const Pool = require('pg').Pool;

//setting up the config with the correct user, credentials, database and port

const pool = new Pool({
    user: "postgres",
    password: "waterfall",
    host: "localhost",
    database: "postgres",
    port: 5432
});

//exporting the variable which represents the configured reference to the --
//database for use by the server :)

module.exports = pool;

