import React, { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import './testPage.css';


 const TestPage = () => {

  const [name, setName] = useState();

  const [price, setPrice] = useState();

  const [description, setDescription] = useState();

  const [pic, setPic] = useState();

  // function to set the state of the name field


  const picUploadHandler = (image) => {

    let thePicBinary = image;

    console.log(thePicBinary)

    setPic(thePicBinary);
    console.log(pic)

  }

  const handleNameChange = (event) => {
      event.preventDefault();

      let nameEntered = event.target.value

      console.log(nameEntered)
      setName(nameEntered);

      console.log(name)
  };

// function to set the state of the age field

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

        event.preventDefault();

      console.log(`this is the name: ${name} this is the age: ${price} this is the skill: ${description}`)
        const postRequest = await fetch('http://localhost:5001/test', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
              pic: `${pic}`,
              name: `${name}`,
              price: `${price}`,
              description: `${description}`
            })
        });
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
        <form onSubmit={handleSubmit}>
            <input type='file' onChange={picUploadHandler}/>
            <input type='text'  placeholder='name' onChange={handleNameChange}/>
            <input type='text' placeholder='price' onChange={handlePriceChange}/>
            <input type='text' placeholder='description' onChange={handleDescriptionChange}/>
            <input type='submit' />
        </form>
        
        </div>

         </React.Fragment>

    )
};

export default TestPage;