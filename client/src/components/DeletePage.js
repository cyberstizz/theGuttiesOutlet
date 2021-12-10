import React from 'react';
import './DeletePage.css';
import { useState } from 'react';


 const DeletePage = () => {

  const [formData, setFormdata] = useState()

  const handleChange = (event) => {
    event.preventDefault();
    setFormdata(event.target.value)
  }

     const handleSubmit = async (event) => {
        event.preventDefault();
        const theArtist = formData;

        const postRequest = await fetch(`http://localhost:5001/products/${theArtist}`, {
             header: {
              'Access-Control-Allow-Origin': true
             },
            method: 'DELETE'
        });

        const deletion = await postRequest.text();
     }

    return(
        <React.Fragment>

        <form onSubmit ={handleSubmit}>

          <input type='text' placeholder='name' onChange={handleChange}/>
          <button type='submit'>Delete An artist</button>
        
        </form>
         </React.Fragment>

    )
};

export default DeletePage;