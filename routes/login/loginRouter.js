//initializing express for the module

const express = require('express');
const cors = require('cors');
const passport = require('passport');

//creating a variable to represent the router for all products routes

const loginRouter = express.Router({mergeParams: true});

// can't forget the database object 

const Pool = require('../../db');
const { urlencoded } = require('express');

// enabling cors
loginRouter.use(cors());
 
// allowing access to the requst.body
loginRouter.use(express.json());
loginRouter.use(urlencoded({extended: true}))


// first the login route

// first the login route

loginRouter.post('/',  passport.authenticate('local', { failureRedirect: '/'}), async (req, res, next)=> {
    

    
    console.log( `I am the login route, I have already authenticated the user and destructured the username... this is the username I have ${req.user}`)
    
    
    console.log(`before rendering the page there are a few thigs I'd like to get out of the way
                 this is what I have as the req.body: ${req.body.username}
                 this is what I have as the req.sessionid: ${req.sessionID}
                 and this is what I have as the req.user: ${req.user}`)
    

                 res.cookie('initialLogin','true', { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }).redirect('/')
                 console.log('I have just created the cookie and set it to true')
                });




//exporting the product router variale for use in the main server file

module.exports = loginRouter;


