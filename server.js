//imrrrporting important variables
 
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const path = require('path');
const pool = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { encode } = require('punycode');
// initiate use of those variables through middleware (or app.use)
 
// initializing the entry point of the index.html from the build folder if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')))

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
  // })
}
// enabling cors
app.use(cors());
 
// allowing access to the requst.body
app.use(express.json());
 
// sending all routes to its appropriate express router
// app.use('/products', productRouter);
 

app.use(fileUpload())
 
// create GET route for home page
 
// app.get('/', (req, res, next) => {
//   res.send('I am working');
// })
 
 
// just a test
 
app.get('/home', async (req, res, next) => {


  try{

  console.log('ok a request came into the server')


  console.log('okay lets test this line by line, this first line will be my directly befor the first database call')

  const fullListCall = await pool.query('select * from pictestertwo')

  console.log('okay I just queried the database for the first time succesfully, hopefully that char thing hasnt happened yet')

  const fullList = fullListCall.rows;

  console.log(`okay so these are the results that I have received ${fullList.map(item => item.description)}`)

  const normalFullListNames = fullList.map(item => item.name)

  const normalFullListAges = fullList.map(item => item.price)


  console.log(`okay I grabbed the full list from the database, this is what it looks like: ${normalFullListNames}`)

  let theRandomNumber = normalFullListAges.length;

  let randomArtist = normalFullListAges[Math.floor(Math.random() * theRandomNumber)]

  console.log(` this is the price of the product I got from the random variable: ${randomArtist}`)

   const myTest = await pool.query(`select * from pictestertwo where price = $1`, [`${randomArtist}`]);
 
console.log(`this is all the data that came back from my query: ${myTest.rows[0].name}`);


  res.status(200).json({"theName": `${myTest.rows[0].name}`, "thePrice": `${myTest.rows[0].price}`, "theDescription": `${myTest.rows[0].description}`, "theSneakerPath": `${myTest.rows[0].sneakerpath}` });
//  console.log(myTest.rows[0])
 } catch(err){
   console.log(err.message);
 }
 
});
 
 
app.get('/products/:productId', async (req, res, next) => {
 const { productId } = req.params;
 console.log(productId)
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
 





app.delete('/products/:artist',  async (req, res, next)=> {
 


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
 
 
 // the post route for the test


 app.post('/test',  async (req, res, next)=> {

  // the first thing to do is check if the photo is present, and if it is not respond with status of 400
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  console.log('before doing anything lets check to see what request.files contains')

  console.log(req.files)

  // step one.... setup

  const file = req.files.pic;

  console.log(file)
  
  const { name, price, description } = req.body;

  const movePath = `${__dirname}/client/public/pics/${name}photo-${file.name}`;

  const imagePath = `/pics/${name}photo-${file.name}`

  console.log('I am first going to try to log the contents of the req.body')

  console.log(req.body)
    
  
     console.log(`this is the name I destructured from the request ${name}`)


     // step two ... the query

  
     try{
     const newLife = await pool.query('insert into pictestertwo(sneakerPath, name, price, description) values($1, $2, $3, $4)', [imagePath, name, price, description])
  




     // step three... uploading the file

      file.mv(movePath, err => {
        if(err){
          console.log(err)
        }
      

    console.log('got those out of the way')
    console.log(`${name} has been added to the system`)
     res.status(201).json({"fileName": `${name}`, "filePath": imagePath });
    })
  } catch(err){
      console.log(err.message)
    }  
  });



  // finally the get route for the test

 
  






 
 
// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

