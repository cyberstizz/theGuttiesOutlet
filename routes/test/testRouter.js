const express = require('express');

const testRouter = express.Router({mergeParams: true});
const fileUpload = require('express-fileupload');
const cors = require('cors');


const pool = require('../../db');


testRouter.use(fileUpload())

// enabling cors
testRouter.use(cors());
 
// allowing access to the requst.body
testRouter.use(express.json());


// the test route

testRouter.post('/',  async (req, res)=> {
  try{
    // the first thing to do is check if the photo is present, and if it is not respond with status of 400
  
  
    console.log('before doing anything lets check to see what request.files contains')
  
    console.log(req.files)
  
    // step one.... setup
  
    const file = req.files.pic;
  
    console.log(file)
    
    const { name, price, description } = req.body;
  
    const movePath = `client/public/pics/${name}photo-${file.name}`;
  
    const imagePath = `/pics/${name}photo-${file.name}`
  
    console.log('I am first going to try to log the contents of the req.body')
  
    console.log(req.body)
      
    
       console.log(`this is the name I destructured from the request ${name}`)
  
      console.log(`by the way this is the path that is going in the databsae ${imagePath}`)
       // step two ... the query
  
    
      
       const newLife = await pool.query('insert into pictestertwo(sneakerPath, name, price, description) values($1, $2, $3, $4)', [imagePath, name, price, description])
    
  
  
  
  
       // step three... uploading the file
  
        file.mv(movePath, err => {
          if(err){
            return console.log(err.message)
          }
        
  
      console.log('got those out of the way')
      console.log(`${name} has been added to the system`)
        return res.status(201).json({"fileName": `${name}`, "filePath": imagePath });
      })
    } catch(err){
       return console.log(err.message)
      }  
    });
  


    module.exports = testRouter;
  