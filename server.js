const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const pool = require('./db');
const cors = require('cors');

app.use(cors());


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/express_backend', async (req, res) => { 
  try{
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
 const myTest = await pool.query('select now();');

 console.log(myTest.rows[0])
  } catch(err){
    console.log(err.message);
  }
});