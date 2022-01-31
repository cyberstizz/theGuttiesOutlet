const express = require('express');

const homeRouter = express.Router({mergeParams: true});
const cors = require('cors');

const pool = require('../../db');


// enabling cors
homeRouter.use(cors());
 
// allowing access to the requst.body
homeRouter.use(express.json());

// the home route

homeRouter.get('/', async (req, res,) => {

  console.log(`this is the session ${req.session}`)
 // everything is wrapped into a try catch block

    try{
  
    console.log('ok a request came into the server')
  
  
    console.log('okay lets test this line by line, this first line will be my directly befor the first database call')
  
    const fullListCall = await pool.query('select * from pictestertwo limit 10')
  
    console.log('okay I just queried the database for the first time succesfully, hopefully that char thing hasnt happened yet')
  
    const fullList = fullListCall.rows;
  
  //   console.log(`okay so these are the results that I have received ${fullList.map(item => item.description)}`)
  
  //   const normalFullListNames = fullList.map(item => item.name)
  
  //   const normalFullListAges = fullList.map(item => item.price)
  
  
  //   console.log(`okay I grabbed the full list from the database, this is what it looks like: ${normalFullListNames}`)
  
  //   let theRandomNumber = normalFullListAges.length;
  
  //   let randomArtist = normalFullListAges[Math.floor(Math.random() * theRandomNumber)]
  
  //   console.log(` this is the price of the product I got from the random variable: ${randomArtist}`)
  
  //    const myTest = await pool.query(`select * from pictestertwo where price = $1`, [`${randomArtist}`]);
   
  // console.log(`this is all the data that came back from my query: ${myTest.rows[0].name}`);
  
  
    // res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
    res.status(200).json({"data": fullList})
 
    //  console.log(myTest.rows[0])
   } catch(err){
     console.log(err.message);
   }
   
  });
 
  

  //exporting the homeRouter for use in the main server file

  module.exports = homeRouter;
