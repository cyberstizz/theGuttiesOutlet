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

            // now using the transport object we will send an email to the administrator and the customer
            // as confirmation of the purchase

        console.log('ok the purchase went through, so now I am going to attempt to sent mail')

            // the transporter object is first configured with the email clients credentials
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'guttiesoutlet@gmail.com',
                pass: '$ucce$$6'
            }
        });
        
        
        // now the email information is but into an objects, one for the admin and one for the client
        let mailOptionsOne = {
            from: 'guttiesoutlet@gmail.com',
            to: 'jamalmattingly@gmail.com',
            subject: 'Gutties purchase confirmation',
            text: `someone just bought ${products.products}`
        };
        
        const mailOptionsTwo = {
            from: 'guttiesoutlet@gmail.com',
            to: token.email,
            subject: 'Gutties purchase confirmation',
            text: `thanks for your purchase, you just bought:  ${products.products}`
        }
        
        //and now the emails are sent below
        
        transporter.sendMail(mailOptionsOne, (err, data) => {
            console.log(`this message is from inside  the body of the sendmail function and this is the data: ${data}`)
            if(err){
                console.log(err)
            } else{
            console.log(`these are the mail options sent lets see if I received it: ${mailOptionsOne}`)
            }
        })



        transporter.sendMail(mailOptionsTwo, (err, data) => {
            console.log(`this message is from inside  the body of the sendmail function and this is the data: ${data}`)
            if(err){
                console.log(err)
            } else{
            console.log(`these are the mail options sent lets see if I received it: ${mailOptionsOne}`)
            }
        })

        console.log('ok I just attempted to send the mail, if your reading this, there were no errors')
        
        

// now sending the client confirmation of the results

        console.log(result)
        res.json(result)
    });

 
    
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


