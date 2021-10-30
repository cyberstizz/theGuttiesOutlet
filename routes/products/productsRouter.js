//initializing express for the module

const express = require('express');

//creating a variable to represent the router for all products routes

const productRouter = express.Router();

//this creates a route for a request of a particular product

productRouter.get('/:product_id', async (req, res, next) => {

    console.log('this route is working correctly!')
    res.send('yes this seems to be working correctly')
    
    next()

})




//exporting the product router variale for use in the main server file

module.exports = productRouter;


