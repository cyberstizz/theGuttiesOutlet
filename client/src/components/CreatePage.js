import React, { useState } from 'react';
import './CreatePage.css';


 const CreatePage = () => {

  const [name, setName] = useState();

  const [age, setAge] = useState();

  const [skill, setSkill] = useState();

  // function to set the state of the name field

  const handleNameChange = (event) => {
      event.preventDefault();

      let nameEntered = event.target.value

      console.log(nameEntered)
      setName(nameEntered);

      console.log(name)
  };

// function to set the state of the age field

  const handleAgeChange = (event) => {
    event.preventDefault();

    let ageEntered = event.target.value

    console.log(ageEntered)
    setAge(ageEntered);

    console.log(age)
}


const handleSkillChange = (event) => {
  event.preventDefault();

  let skillEntered = event.target.value

  console.log(skillEntered)
  setSkill(skillEntered);

  console.log(skill)
}

     const handleSubmit = async (event) => {

        event.preventDefault();

      console.log(`this is the name: ${name} this is the age: ${age} this is the skill: ${skill}`)
        const postRequest = await fetch('http://localhost:5001/products/:artist', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify({
              name: `${name}`,
              age: `${age}`,
              skill: `${skill}`
            })
        });
     }

    return(
        <React.Fragment>

        <form onSubmit ={handleSubmit}>

          <input type='text' placeholder='name' onChange={handleNameChange} />
          <input type='text' placeholder='age' onChange={handleAgeChange} />
          <input type='text' placeholder='skill' onChange={handleSkillChange} />
          <input type='submit' placeholder='Create An artist' />
        
        </form>
         </React.Fragment>

    )
};

export default CreatePage;