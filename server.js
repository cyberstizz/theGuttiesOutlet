//importing important variables

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const path = require('path')
const pool = require('./db');
const cors = require('cors');
const productRouter = require('./routes/products/productsRouter')

// initiate use of those variables through middleware (or app.use)

// initializing the entry point of the index.html from the build folder if in production

if(process.env.NODE_ENV === "production"){

app.use(express.static(path.join(__dirname, 'client/build')));

}

// enabling cors 
app.use(cors());

// allowing access to the requst.body
app.use(express.json());

// sending all routes to its appropriate express router
app.use('/products', productRouter);


// create GET route for home page

app.get('/', (req, res, next) => {
  res.send('I am working');
})


// just a test

app.get('/express', async (req, res) => { 
  try{
    const myTest = await pool.query('select now();');

  res.send({ express: myTest.rows[0] }); 

//  console.log(myTest.rows[0])
  } catch(err){
    console.log(err.message);
  }
});


// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 