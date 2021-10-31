//importing important variables

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const path = require('path')
const pool = require('./db');
const cors = require('cors');
const productRouter = require('./routes/products/productsRouter')

// initiate use of those variables through middleware (or app.use)

app.use(express.static(path.join(__dirname, 'client/build')));

// enabling cors 
app.use(cors());

// sending all routes to its appropriate express router
app.use('/products', productRouter);


// create GET route for home page

app.get('/', (req, res, next) => {
  res.send('I am working');
})


// just a test

app.get('/express', async (req, res) => { 
  try{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
  console.log('this is working')
//  const myTest = await pool.query('select now();');

//  console.log(myTest.rows[0])
  } catch(err){
    console.log(err.message);
  }
});


// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 