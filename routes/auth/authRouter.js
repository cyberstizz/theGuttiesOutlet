//initializing express for the module

const express = require('express');
const cors = require('cors');
const passport = require('passport');

//creating a variable to represent the router for all products routes

const authRouter = express.Router({mergeParams: true});

// can't forget the database object 

const Pool = require('../../db');
const { urlencoded } = require('express');

// enabling cors
authRouter.use(cors());
 
// allowing access to the requst.body
authRouter.use(express.json());
authRouter.use(urlencoded({extended: true}))


 // now the register route
 authRouter.post('/', async (req, res, next) => {


    const { username, password } = req.body;
  
    
  console.log( `I am the register route and have just desructured the req.body. this is the username from the req.body :${username}`)
  console.log(`this is the req.user :${req.user}`)

    const results = await Pool.query('select * from users where username = $1', [username]);
  
  
    // what to do if the name does not exist
    if(results.rows[0] == undefined){
      const results =  await Pool.query('insert into users (username, password, expire) values($1,$2, $3)', [username, password, 37]);
  
      console.log(`everything worked out, the values :${username} and ${password}  were entered into the database`)
      next()
    }
  
      //what to do if the name exists
  
    if(results.rows[0]){
      console.log('this login attempt failed beacause the user already exists')

      res.cookie('initialLogin',true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }).redirect('/')
    }
  
  },passport.authenticate('local', { failureRedirect: '/'}), (req, res, next) =>{
    res.redirect('/')
  });




//exporting the product router variale for use in the main server file

module.exports = authRouter;

