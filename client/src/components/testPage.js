import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import './testPage.css';
import axios from 'axios';



 const TestPage = () => {

  const [name, setName] = useState();

  const [price, setPrice] = useState();

  const [description, setDescription] = useState();

  const [pic, setPic] = useState('');

  const [picName, setPicName] = useState('');

  const [uploadedPic, setuploadedPic] = useState()

  const [FileName, setFileName] = useState('');

  const [FilePath, setFilePath] = useState('');




  // function to set the state of the name field


  const picUploadHandler = async (event) => {

    let thePic = event.target.files[0]
    let thePicName = event.target.files[0].name



    console.log(thePic)

    setPic(thePic)
    setPicName(thePicName)





    setPic(thePic);
    console.log(picName)

  };

  // const convertBase64 = async (file) => {
  //   return new Promise((res, rej) => {
  //     const fileReader = new FileReader();
  //     const conversion = fileReader.readAsDataURL(file)

  //     fileReader.onload = () => {
  //       res(fileReader.result)
  //     } 
      
  //     fileReader.onerror = (error) => {
  //       rej(error)
  //     }
  //   })
  // }

  const handleNameChange = (event) => {
      event.preventDefault();

      let nameEntered = event.target.value

      console.log(nameEntered)
      setName(nameEntered);

      console.log(name)
  };

// function to set the state of the price field

  const handlePriceChange = (event) => {
    event.preventDefault();

    let priceEntered = event.target.value

    console.log(priceEntered)
    setPrice(priceEntered);

    console.log(price)
}


const handleDescriptionChange = (event) => {
  event.preventDefault();

  let descriptionEntered = event.target.value

  console.log(descriptionEntered)
  setDescription(descriptionEntered);

  console.log(description)
}

     const handleSubmit = async (event) => {
      //preventing the page from refreshing after submit with prevent default
        event.preventDefault();

      // creating a formdata instance to send to the server efficiently
        const formData = new FormData();

      console.log(`this is the name: ${name} this is the age: ${price} this is the skill: ${description}`)
      console.log(`this is the pic ${pic}, and this is the pics name ${picName}`) 
      

      //adding items to the formData instance
      formData.append('name', name)
      formData.append('pic', pic)
      formData.append('price', price)
      formData.append('description', description)

      


    

       //now the post request to the server
       const postRequest = await axios.post('http://localhost:5001/test', formData, {
            headers: { 'Content-Type':'multipart/form-data' }
            // body: JSON.stringify({
            //   pic: `${pic}`,
            //   name: `${name}`,
            //   price: `${price}`,
            //   description: `${description}`,
            //   data: formData
            // })
                  });

                  const theAnswer = await postRequest.data

                  console.log(theAnswer)

                  const { fileName, filePath } = theAnswer;

                  console.log(fileName)


                  setuploadedPic(name)
                  setFileName(fileName)
                  setFilePath(filePath)

     }

    return(
        <React.Fragment>

        {/* <form onSubmit ={handleSubmit}>

          <input type='text' placeholder='name' onChange={handleNameChange} />
          <input type='text' placeholder='age' onChange={handleAgeChange} />
          <input type='text' placeholder='skill' onChange={handleSkillChange} />
          <input type='submit' placeholder='Create An artist' />
        
        </form> */}
        <div className='cartBlock'>test page
        {/* <form onSubmit={handleSubmit}>
            <input type='file' onChange={picUploadHandler} name='onlyFile'/>
            <input type='text'  placeholder='name' onChange={handleNameChange}/>
            <input type='text' placeholder='price' onChange={handlePriceChange}/>
            <input type='text' placeholder='description' onChange={handleDescriptionChange}/>
            <input type='submit' />
        </form> */}
         {/* <form id='uploadForm' 
               action='/test' 
               method='post' 
               encType="multipart/form-data"> */}
               <form style={{marginRight: '13vw'}} onSubmit={handleSubmit}>
            <input type='file' onChange={picUploadHandler} name='onlyFile'/>
            <input type='text'  name='name' placeholder='name' onChange={handleNameChange}/>
            <input type='text' name='price' placeholder='price' onChange={handlePriceChange}/>
            <input type='text' name='description' placeholder='description' onChange={handleDescriptionChange}/>
            <input type='submit' />
        </form>

        <img src={FilePath} className='picture'/>
        </div>

         </React.Fragment>

    )
};

export default TestPage;