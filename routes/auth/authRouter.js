//initializing express for the module

const express = require('express');
const cors = require('cors');
const passport = require('passport');

//creating a variable to represent the router for all products routes

const authRouter = express.Router({mergeParams: true});

// can't forget the database object 

const pool = require('../../db');
const { urlencoded } = require('express');

// enabling cors
authRouter.use(cors());
 
// allowing access to the requst.body
authRouter.use(express.json());
authRouter.use(urlencoded({extended: true}))


// first the login route

authRouter.post('/login',  passport.authenticate('local'), async (req, res, next)=> {

            const { username }  = req.user;
            
            console.log( `I am the login route, I have already authenticated the user and destructured the username... this is the username I have ${username}`)
            
            
            console.log(`before rendering the page there are a few thigs I'd like to get out of the way
                         this is what I have as the req.body: ${req.body.username}
                         this is what I have as the req.sessionid: ${req.sessionID}
                         and this is what I have as the req.user: ${req.user}`)
            
            
            });

 // now the register route
 authRouter.post('/register', async (req, res, next) => {


    const { username, password } = req.body;
  
    
  console.log( `I am the register route and have just desructured the req.body. this is the username ${username}`)
    const results = await Pool.query('select * from users where username = $1', [username]);
  
  
    // what to do if the name does not exist
    if(results.rows[0] == undefined){
      const results =  await Pool.query('insert into users (username, password, expire) values($1,$2, $3)', [username, password, 37]);
  
      console.log(`everything worked out, the values :${username} and ${password}  were entered into the database`)
    }
  
      //what to do if the name exists
  
    if(results.rows[0]){
      console.log('this login attempt failed beacause the user already exists')
    }
  
  });

  // finally the logout route
  authRouter.get('/logout', (req, res, next) => {


    req.logOut()
  
    res.redirect('/')
  })





//exporting the product router variale for use in the main server file

module.exports = authRouter;


