//importing important variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const path = require('path');
// first lets grab our database
const Pool = require('./db');
// initiating a variable representing the session for every visit
const session = require('express-session');
// setting a variable to represent authentication middleware called passport
const passport = require('passport');
// also passport requires a strategy to use so in this case we will use the local strategy
const LocalStrategy = require('passport-local');
//we also need middleware to help our session connect to our database
const postgresSession = require('connect-pg-simple')(session)
// importing all of the routes as variables known as routers
const productsRouter = require('./routes/products/productsRouter');
const homeRouter = require('./routes/home/homeRouter');
const bestSellersRouter = require('./routes/bestsellers/bestSellersRouter');
const discountsRouter = require('./routes/discounts/discountsRouter');
const newArrivalsRouter = require('./routes/newArrivals/newArrivalsRouter');
const searchRouter = require('./routes/search/searchRouter');
const paymentsRouter = require('./routes/payments/paymentsRouter');
const testRouter = require('./routes/test/testRouter');
const authRouter = require('./routes/auth/authRouter');
const loginRouter = require('./routes/login/loginRouter');
const logoutRouter = require('./routes/logout/logoutRouter');
// initializing the entry point of the index.html from the build folder if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')))
}  

// initiate use of the session variable by setting up its config in app.use
// also I set the cookie to expire in three days
app.use(session({
  secret: 'secret',
  resave: false,
  store: new postgresSession({
    pool: Pool
  }),
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 72
  }
}))

// now the complete setup of the local strategy and serialized functions

passport.use(new LocalStrategy(async (username, password, done) => {
  console.log('I am the local strategy starting this is the username: ' + username)

  const results = await Pool.query('select * from users where username = $1', [username]);

  const completedCall = results.rows;

//now check to see if the username does not exist
if(completedCall[0] === undefined){

  return done(null, false)
}

// now check to see if the passowrd is correct
if(completedCall[0].password !== password){

  return done(null, false)
} 

return done(null, completedCall[0].username)
}));

// Serialization and deserialization here...
passport.serializeUser((user, done) => {
  console.log(`I am the serialize function, and this is what I received from the parameter ${user}`)
  done(null, user);
});
passport.deserializeUser( async(id, done) => {
  console.log(`I am the deserialize function starting, and this is what I received from the parameter ${id}`)

  const result = await Pool.query('select * from users where username = $1', [id])

  done(null, result.rows[0].username);
});



// now initializing the passport middleware and combining it with session

app.use(passport.initialize());

app.use(passport.session());

// initiate use of those router variables through middleware (or app.use)

app.use('/login', loginRouter)

app.use('/logout', logoutRouter)

app.use('/register', authRouter)

app.use('/home', homeRouter);

app.use('/newArrivals', newArrivalsRouter);

app.use('/bestSellers', bestSellersRouter);

app.use('/discounts', discountsRouter);

app.use('/search', searchRouter);

app.use('/products', productsRouter);

app.use('/payments', paymentsRouter)
 
app.use('/test',testRouter);

// This displays message that the server is running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

