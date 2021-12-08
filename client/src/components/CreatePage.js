import React from 'react';
import './CreatePage.css';


 const CreatePage = () => {

     const handleSubmit = async () => {
        const postRequest = await fetch('', {
            
        });
     }

    return(
        <React.Fragment>

        <form onSubmit ={handleSubmit}>

          <input type='text' placeholder='name'/>
          <input type='text' placeholder='age'/>
          <input type='text' placeholder='skill'/>
          <button type='submit'>Create An artist</button>
        
        </form>
         </React.Fragment>

    )
};

export default CreatePage;