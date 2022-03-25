const express = require('express');
const newArrivalsRouter = express.Router({mergeParams: true});
const cors = require('cors');
const passport = require('passport');

const pool = require('../../db');


// enabling cors
newArrivalsRouter.use(cors());
 
// allowing access to the requst.body
newArrivalsRouter.use(express.json());

// the home route

newArrivalsRouter.get('/', async (req, res,) => {

  console.log(`this is the session ${req.sessionID}`)

  console.log(`this is the req.user :${req.user}`)
 // everything is wrapped into a try catch block

    try{
    
    const fullListCall = await pool.query('select * from pictestertwo order by name desc limit 6')
  
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
  if(req.cookies.initialLogin == 'true'){
  
    // res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
    res.cookie('initialLogin','false', { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }).status(200).json({"data": fullList,
                          "isLoggedIn": req.user ? true : false,
                          "user": req.user ? req.user : '',
                          "initialLogin": true
                        })

    } else {
      // res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
   res.status(200).json({"data": fullList,
   "isLoggedIn": req.user ? true : false,
   "user": req.user ? req.user : '',
   "initialLogin": false
 })
   }
 
    //  console.log(myTest.rows[0])
   } catch(err){
     console.log(err.message);
   }
   
  });
 
  

  //exporting the homeRouter for use in the main server file

  module.exports = newArrivalsRouter;
