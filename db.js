// creation of the vatiable representing our connection to the database -- 
// which is through the pg library

const Pool = require('pg').Pool;

//creating a variable representing the heroku environment variables for postgres
const proConfig = {
    user: "cwabzjkoubqxtc",
    password: "24e2e016f017db8900455d72fdf1b4d71a10842595b797f986848e7ea60100bf",
    host: "ec2-54-159-176-167.compute-1.amazonaws.com",
    database: "d9h68d5kpddmr",
    port: 5432 
}

//creating a variable representing the local config for postgres

const localConfig = {
    user: "postgres",
    password: "waterfall",
    host: "localhost",
    database: "cos",
    port: 5432
}

//setting up the config with the correct user, credentials, database and port with turnery logic

const pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : localConfig);

//exporting the variable which represents the configured reference to the --
//database for use by the server :)

module.exports = pool;

