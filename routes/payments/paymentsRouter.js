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




paymentsRouter.post('/', async (req, res, next) => {
        const {product, token } = req.body;

        console.log('product:', product);

        console.log('token:', token);



    // you must first create a unique identifier in to make sure customers are not double charged
        const idompotencyKey = uuid();


        //you first create a customer instance
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        //you then create a charge instance to charge the customer
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currenct: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: prodict.description
        }, {idompotencyKey})

        console.log(charge)



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

        res.status(200).json({"data": charge})
   });
    
   
   
   
   
   
   
    
    
   
  




//exporting the product router variale for use in the main server file

module.exports = paymentsRouter;


