//initializing express for the module

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KD0MTBGolAm0Ydrtrvngbqd9xQvnEGtbmxjlBzgo5QGkFxOViGAw1Pzi1VLJ4hcSTbwrGpt60ZCuxavtVJQbLhg00KNL8nuDB');
const nodemailer = require('nodemailer');
const uuid = require('uuid').v4
//creating a variable to represent the router for all products routes

const paymentsRouter = express.Router({mergeParams: true});

// can't forget the database object 

const pool = require('../../db');

// enabling cors
paymentsRouter.use(cors());
 
// allowing access to the requst.body
paymentsRouter.use(express.json());


//this creates a route for a request of a particular product




paymentsRouter.post('/', async (req, res) => {
        const {product, token } = req.body;



        console.log('product:', product);

    // you must first create a unique identifier in to make sure customers are not double charged
        const idempotencyKey = uuid();


        //you first create a customer instance
         stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            stripe.charges.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: product.description
        }, {idempotencyKey})
    }).then(result => res.status(200).json(result))


        // let transport = nodemailer.createTransport({
        //     host: 'www.charles.lamb.dev@gmail.com',
        //     port: 2525,
        //     auth: {
        //        user: 'put_your_username_here',
        //        pass: 'put_your_password_here'
        //     }
        // });



        // const message = {
        //     from: 'charles.lamb.dev@gmail.com', // Sender address
        //     to: 'charles.lamb.dev@gmail.com',         // recipient
        //     subject: 'just testing emails from ther server', // Subject 
        //     text: 'everything seems to be working!' // message
        // };


        // transport.sendMail(message, function(err, info) {
        //     if (err) {
        //       console.log(err)
        //     } else {
        //       console.log(info);
        //     }
        // });
   });
    
   
   
   
   
   
   
    
    
   
  




//exporting the product router variale for use in the main server file

module.exports = paymentsRouter;


