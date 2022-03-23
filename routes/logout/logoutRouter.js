//initializing express for the module

const express = require('express');
const cors = require('cors');
const passport = require('passport');

//creating a variable to represent the router for all products routes

const logoutRouter = express.Router({mergeParams: true});

// can't forget the database object 

const Pool = require('../../db');
const { urlencoded } = require('express');

// enabling cors
logoutRouter.use(cors());
 
// allowing access to the requst.body
logoutRouter.use(express.json());
logoutRouter.use(urlencoded({extended: true}))


// first the logout route

logoutRouter.post('/', (req, res) => {
  console.log(`this is the logout route and this is the user I am about to logout user :${req.user}`)


    req.logout();
  
    res.redirect('/');
  })





//exporting the product router variale for use in the main server file

module.exports = logoutRouter;


