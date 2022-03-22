//initializing express for the module

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.StripeSecretKey)

//creating a variable to represent the router for all products routes

const productsRouter = express.Router({mergeParams: true});

// can't forget the database object 

const pool = require('../../db');

// enabling cors
productsRouter.use(cors());
 
// allowing access to the requst.body
productsRouter.use(express.json());


//this creates a route for a request of a particular product




productsRouter.get('/:productId', async (req, res, next) => {
    const { productId } = req.params;
    console.log(productId)

    console.log(`this is the user ${req.user}`)

    try{
      const myTest = await pool.query(`select * from pictestertwo where name = $1`, [`${productId}`]);
   console.log(myTest.rows[0])
   console.log(myTest.rows[0].name)
   console.log(myTest.rows[0].price)
   console.log(myTest.rows[0].description)
   
     res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
   
     //  console.log(myTest.rows[0])
    } catch(err){
      console.log(err.message);
    }
   });
    
   
   
   
   
   
   productsRouter.delete('/:artist',  async (req, res, next)=> {
    
    console.log(`this is the user ${req.user}`)

   
   console.log('--uh ohh a delete request just came in! I"ll tell you how it goes')
    
    const { artist } = req.params;
    
    console.log(`--this is the artist name that I pulled from the request paramaters ${artist}`)
    
    
    
    try{
    
      console.log(`--yeah I know this is all happening fast but just to let you know I am about to make a query. This is who will be terminated ${artist}`)
    
    const deathRow = await pool.query('delete from cos where name = $1', [artist])
       console.log('--ok I made the query, if you"re reading this its to late.')
    
    console.log(`--Done! ok since my part here is finished, I will send the response now btw `)
   //  res.redirect('http://localhost:3000/');
   } catch(err){
      console.log(err)
    }
   })
    
   productsRouter.post('/:artist',  async (req, res, next)=> {
    console.log(`this is the user ${req.user}`)

    
    
    console.log('everyday a request is born!')
       const { name, age, skill } = req.body;
   
       console.log(`this is the name I destructured from the request ${name}`)
    
      console.log(req.body)
       try{
       const newLife = await pool.query('insert into cos(name, age, skill) values($1, $2, $3)', [name, age, skill])
    
      console.log('got those out of the way')
      console.log(`${name} has been added to the system`)
       res.status(201).send(`${name} has been added to the system`);
    } catch(err){
        console.log(err)
      }
    
    })

    productsRouter.post('/checkout',  async (req, res, next)=> {
      console.log(`this is the user ${req.user}`)

      stripe.sessions.checkout.create({
        Payment_methods_type: ['card'],
        mode: "payment",
        line_items: req.addresses,
        success_url: 'somePath',
        cancel_url: 'somePath'
      })
      res.json({data: 'someData'});
    });





//exporting the product router variale for use in the main server file

module.exports = productsRouter;


