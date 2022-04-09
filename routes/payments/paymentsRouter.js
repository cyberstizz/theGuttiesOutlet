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
        const {product, products, token } = req.body;



        console.log('product:', product);

        console.log('products:', products);

if(product === undefined){
    // you must first create a unique identifier in to make sure customers are not double charged
        const idempotencyKey = uuid();


        //you first create a customer instance
         stripe.customers.create({
            email: token.email,
            source: token.id
        }).then(customer => {
            stripe.charges.create({
            amount: products.price * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: products.products
        }, {idempotencyKey})
    }).then(result => {
        console.log(result)
        res.json(result)
    })
} else{
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
  }).then(result => res.json(result))
}
   });
    
   
   
   
   
   
   
    
    
   
  




//exporting the product router variale for use in the main server file

module.exports = paymentsRouter;


