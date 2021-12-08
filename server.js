//importing important variables

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5001; 
const path = require('path')
const pool = require('./db');
const cors = require('cors');
const productRouter = require('./routes/products/productsRouter')

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
  try{
    const myTest = await pool.query('select name from cos where age = 29');
console.log(myTest.rows[0].name)
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

console.log('uh ohh a request just came in!')

  const { artist } = req.params;

  try{

  const deathRow = await pool.query('delete from cos where name = $1', [artist])
  
  const completed = await deathRow.text();
  res.status(204).send();
} catch(err){
    console.log(err)
  }
})



// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 