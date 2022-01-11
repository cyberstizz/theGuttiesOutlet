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

        const idompotencyKey = uuid();

        const customer = await stripe.customers.create({

        })

        const charge = await stripe.charges.create({

        }, {idompotencyKey})

        console.log(charge)



        let transport = nodemailer.createTransport({
            host: 'www.charles.lamb.dev@gmail.com',
            port: 2525,
            auth: {
               user: 'put_your_username_here',
               pass: 'put_your_password_here'
            }
        });



        const message = {
            from: 'charles.lamb.dev@gmail.com', // Sender address
            to: 'charles.lamb.dev@gmail.com',         // recipient
            subject: 'just testing emails from ther server', // Subject 
            text: 'everything seems to be working!' // message
        };


        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });

        res.status(200).json(charge)
   });
    
   
   
   
   
   
   
    
    
   
  




//exporting the product router variale for use in the main server file

module.exports = paymentsRouter;


