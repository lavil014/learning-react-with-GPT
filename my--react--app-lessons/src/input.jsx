import React from 'react';
import { useState } from 'react';


const Input = ()=>{

  const [name, setName] = useState('');
  const [age , setAge] = useState ('');
  const [message , setMessage] = useState(''); 
  const [error, setError] = useState(false);

  
  
 const handlers = {
    handleNameInput : (e)=>{
      setName(e.target.value);
    }, 
    handleAgeInput : (e)=>{
      setAge(e.target.value);
    }, 
     submitForm : (e)=>{
      e.preventDefault()


      if(name === '' && age <= 0){
        setMessage('Addd a valid name and a valid age');
        setError(true);
      }
      else if(name === ''){
        setMessage('Add a valid name');
        setError(true);
      }else if(age <= 0){
          setMessage('Age must be greater than 0');
          setError(true);
      } else{
        setMessage(`Hello ${name}, you are ${age} years old!`);
        setError(false);
      }

      
    },
    resetInputs : ()=>{
      setAge('');
      setName('');
      setMessage('');
    }
  } 


  return (
    <div>
    <form onSubmit={handlers.submitForm} action="" 
    style={{
      display:"flex",
      flexDirection: "column",
      alignItems: 'center',
      justifyContent:'center',
      gap: "1rem",
      width: '30rem',
      border: 'solid black 0.01rem',
      padding :'0.5rem',
      borderRadius: '0.3rem'
    }}>
      <input onChange={handlers.handleNameInput} value={name}type="text" />
      <input onChange={handlers.handleAgeInput} value={age} type="number" min={1}/>
      <button type="submit" >Submit Information</button>
      <button type='button' onClick={handlers.resetInputs}>Reset Inputs</button>
    </form>
    <p style={ error ?
      {
        color:'red'
      }:{
        color:'green'
      }
    }>{message}</p>
    </div>
  )
}

export default Input;