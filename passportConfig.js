

passport.use(new LocalStrategy(async (username, password, done) => {
    console.log('I am the local strategy starting this is the username: ' + username)
  
    const results = await Pool.query('select * from users where username = $1', [username]);
  
    const completedCall = results.rows;

  //now check to see if the username does not exist
  if(completedCall[0] === undefined){

    return done(null, false)
  }

  // const theUsername = results.rows[0].username
  // const thePassword = results.rows[0].password

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