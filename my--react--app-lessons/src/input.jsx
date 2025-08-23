
import { useState } from 'react';


const Input = ()=>{

  const [name, setName] = useState('');
  const [age , setAge] = useState ('');
  const [message , setMessage] = useState(''); 
  const [error, setError] = useState(false);
  const [users , setUsers] = useState([]);

  
  
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
        setError(true);
        setMessage('Enter a valid name');
      }else if(age <= 0){
          setMessage('Age must be greater than 0');
          setError(true);
      } else{
        setError(false);

        const userExists = users.some((user)=>{
          return user.age === age && user.name === name
        })
        
          if(userExists){
            setMessage('User information already exists')
          } else{
            const newUsers = {
            name, 
            age
            }
            setUsers([...users, newUsers]);
          }
      }
    },
    resetInputs : ()=>{
      setAge('');
      setName('');
      setMessage('');
    }, 
    clearUsers : ()=>{
      setUsers([])
    }, 
    removeUser:(indextoRemove)=>{
      setUsers(users.filter((user, index)=> index !== indextoRemove));
    }
  } 

  console.log(users)

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
      <button type='button' onClick={handlers.clearUsers}>Clear All Users</button>
    </form>
    <p style={ error ?
      {
        color:'red'
      }:{
        color:'green'
      }
    }>{message}</p>
    <ul>
      {users.map((user, index)=>{
        return(
          <div style={{border: 'red solid 1px'}}>
            <li key={index}>The user's mame is {user.name} and the age is {user.age} </li><button onClick={()=> handlers.removeUser(index)}>Delete User</button>
          </div>
        
      )
      })}
    </ul>
    </div>
  )
}

export default Input;