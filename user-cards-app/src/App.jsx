import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import users from './users.json';
import './App.css'

function App() {
  
  console.log(users)
  
  return (


    <div className='container'>
    {
      users.map((user)=>{

        return(
        <div className='userCard' key={user.id}>
          <img src={user.avatar} alt="" />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <p>{user.email}</p>
          <p>{user.location}</p>
          <p>{user.role}</p>
          <p className='skills'>{user.skills.map((skill, index)=>{
            return(
              <li key={index}>{skill}</li>
            )
          })}</p>
        </div>
        )
      })
    } 
    </div>
  )
}


export default App



