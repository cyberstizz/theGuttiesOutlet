const express = require('express');
const searchRouter = express.Router({mergeParams: true});
const cors = require('cors');
const passport = require('passport');

const pool = require('../../db');


// enabling cors
searchRouter.use(cors());
 
// allowing access to the requst.body
searchRouter.use(express.json());

// the home route

searchRouter.post('/:searchString', async (req, res,) => {

    const {searchString} = req.params;

    console.log(`this is the search string ${searchString}`)

  console.log(`this is the session ${req.sessionID}`)

  console.log(`this is the req.user :${req.user}`)
 // everything is wrapped into a try catch block

    try{
    
    const fullListCall = await pool.query('select * from pictestertwo where name = $1', [searchString])
  
  
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
    res.redirect(`/search/${searchString}`)
 
    //  console.log(myTest.rows[0])
   } catch(err){
     console.log(err.message);
   }
   
  });


  //now the get route
  searchRouter.get('/:searchString', async (req, res,) => {

    const searchString = req.params.searchString;
    console.log(`this is the search string ${searchString}`)

  console.log(`this is the session ${req.sessionID}`)

  console.log(`this is the req.user :${req.user}`)
 // everything is wrapped into a try catch block

    try{
    
    const fullListCall = await pool.query('select * from pictestertwo where name = $1', [searchString])
  
  
    const fullList = fullListCall.rows;
  

  
    // res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
    res.json({"data": fullList,
                          "isLoggedIn": req.user ? true : false,
                          "user": req.user ? req.user : ''
                        })
 
    //  console.log(myTest.rows[0])
   } catch(err){
     console.log(err.message);
   }
   
  });
 
  

  //exporting the homeRouter for use in the main server file

  module.exports = searchRouter;

  
