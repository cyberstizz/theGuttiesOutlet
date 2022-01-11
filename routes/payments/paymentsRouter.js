//initializing express for the module

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.StripeSecretKey);
const nodemailer = require('nodemailer');
const uuid = require('uuidv4')
//creating a variable to represent the router for all products routes

const paymentsRouter = express.Router({mergeParams: true});

// can't forget the database object 

const pool = require('../../db');

// enabling cors
paymentsRouter.use(cors());
 
// allowing access to the requst.body
paymentsRouter.use(express.json());


//this creates a route for a request of a particular product




paymentsRouter.post('/', async (req, res, next) => {
        const {product, token } = req.body;
   });
    
   
   
   
   
   
   
    
    
   
  




//exporting the product router variale for use in the main server file

module.exports = paymentsRouter;


