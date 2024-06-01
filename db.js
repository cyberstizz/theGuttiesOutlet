// creation of the vatiable representing our connection to the database -- 
// which is through the pg library

const Pool = require('pg').Pool;

//creating a variable representing the heroku environment variables for postgres
const proConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
};

//creating a variable representing the local config for postgres

const localConfig = {
    user: "postgres",
    password: "chicken",
    host: "localhost",
    database: "stizz",
    port: 5432
}

//setting up the config with the correct user, credentials, database and port with turnery logic


let pool = new Pool(process.env.NODE_ENV === "production" ? proConfig : localConfig); 


  // let pool = new Pool(localConfig)
//exporting the variable which represents the configured reference to the --
//database for use by the server :)




module.exports = pool;
