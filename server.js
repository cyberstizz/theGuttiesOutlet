//imrrrporting important variables
 
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const path = require('path')
const pool = require('./db');
const cors = require('cors');
// initiate use of those variables through middleware (or app.use)
 
// initializing the entry point of the index.html from the build folder if in production
 
app.use(express.static(path.join(__dirname, '/client')));
 
// enabling cors
app.use(cors());
 
// allowing access to the requst.body
app.use(express.json());
 
// sending all routes to its appropriate express router
// app.use('/products', productRouter);
 
 
// create GET route for home page
 
// app.get('/', (req, res, next) => {
//   res.send('I am working');
// })
 
 
// just a test
 
app.get('/', async (req, res, next) => {


 
 console.log('ok a request came into the server')
 try{

  const fullListCall = await pool.query('select * from cos');

  const fullList = await fullListCall.rows;

  const normalFullListNames = fullList.map(item => item.name)

  const normalFullListAges = fullList.map(item => item.age)


  console.log(`okay I grabbed the full list from the database, this is what it looks like: ${normalFullListNames}`)

  let theRandomNumber = normalFullListAges.length;

  let randomArtist = normalFullListAges[Math.floor(Math.random() * theRandomNumber)]

  console.log(` this is the age of the artist I got from the randomArtist variable: ${randomArtist}`)

   const myTest = await pool.query(`select name from cos where age = ${randomArtist}`);
 
console.log(myTest.rows[0].name);
 res.send(myTest.rows[0].name);
 
//  console.log(myTest.rows[0])
 } catch(err){
   console.log(err.message);
 }
 
 
 
 next();
});
 
 
app.get('/:productId', async (req, res, next) => {
 const { productId } = req.params;
 
 console.log(productId)
 
 try{
   const myTest = await pool.query('select * from cos where name = $1', [productId]);
console.log(myTest.rows[0])
 res.send(myTest.rows[0]);
 
//  console.log(myTest.rows[0])
 } catch(err){
   console.log(err.message);
 }
 
 
 
 next();
});
 
app.delete('/products/:artist',  async (req, res, next)=> {
 
  res.header("Access-Control-Allow-Origin", "*");


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
 
app.post('/products/:artist',  async (req, res, next)=> {
 
 
 
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
 
 


 app.post('/test',  async (req, res, next)=> {
 
 
 
  console.log('everyday a request is born!')
     const { pic, name, price, description } = req.body;
 
     console.log(`this is the name I destructured from the request ${name}`)
  
    console.log(req.body)
     try{
     const newLife = await pool.query('insert into pictester(sneaker, name, price, description) values($1, $2, $3, $4)', [pic, name, price, description])
  
    console.log('got those out of the way')
    console.log(`${name} has been added to the system`)
    res.status(201).send(`${name} has been added to the system`);
  } catch(err){
      console.log(err)
    }
  
  
  })
  






 
 
// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

