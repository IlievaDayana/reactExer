import React, { useState } from 'react';
import Card from './Card'
function FormAdd(props) {
    const [inputs, setInputs] = useState({username:'', age: ''});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setInputs({});

      if (inputs.username.length===0) {
        props.onErrorModal('we have error')
        return;
      }
      props.onSubmitForm(inputs)

    }
  
    return (
        <Card>
        <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
        
        </Card>
     )
}

export default FormAdd;