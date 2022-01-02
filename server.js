//imrrrporting important variables
 
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const path = require('path');
const pool = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');


// importing all of the routes as variables known as routers

const productsRouter = require('./routes/products/productsRouter');
const homeRouter = require('./routes/home/homeRouter');
const testRouter = require('./routes/test/testRouter');

 
// initializing the entry point of the index.html from the build folder if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')))

  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) // relative path
  // })
}

 
// sending all routes to its appropriate express router
// app.use('/products', productRouter);
 

// app.use(fileUpload())
 
// initiate use of those router variables through middleware (or app.get)

 
app.use('/home', homeRouter);

//  app.use(homeRouter);



app.use('/products', productsRouter);
 
 


 app.use('/test',testRouter);




 
  






 
 
// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

