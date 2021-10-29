//importing important variables

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const pool = require('./db');
const cors = require('cors');
const productRouter = require('./routes/products/productsRouter')

// initiate use of those variables through middleware (or app.use)

app.use(cors());
app.use('/products', productRouter);


// create a GET route
app.get('/', async (req, res) => { 
  try{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
 const myTest = await pool.query('select now();');

 console.log(myTest.rows[0])
  } catch(err){
    console.log(err.message);
  }
});


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 