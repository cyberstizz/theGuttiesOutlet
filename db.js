// creation of the vatiable representing our connection to the database -- 
// which is through the pg library

const Pool = require('pg').Pool;

//creating a variable representing the heroku environment variables for postgres
const proConfig = process.env.DATABASE_URL

//creating a variable representing the local config for postgres

const localConfig = {
    user: "postgres",
    password: "waterfall",
    host: "localhost",
    database: "postgres",
    port: 5432
}

//setting up the config with the correct user, credentials, database and port with turnery logic

if(process.env.NODE_ENV === "production"){

let pool = new Pool({connectionString: proConfig,
ssl: {
    rejectUnauthorized: false
  }
});

}
  // let pool = new Pool(localConfig)
//exporting the variable which represents the configured reference to the --
//database for use by the server :)

let pool = new Pool({connectionString: proConfig,
  ssl: {
      rejectUnauthorized: false
    }
  });
  


module.exports = pool;

