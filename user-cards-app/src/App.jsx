import { use, useState } from 'react'
import users from './users.json';
import './App.css'
import Card from './Card';

function App() {

  return (


    <div className='container'>
    {
      users.map(({avatar,name,email,location,role, id})=>(
        <Card 
        key={id}
        avatar={avatar}
        name={name}
        location={location}
        role={role}
        email={email}
        />
      ))
    } 
    </div>
  )
}


export default App



