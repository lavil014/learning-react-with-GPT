import React from "react";

import { useState } from "react";



const App = ()=>{
     
  const [count, setCount] = useState(0);

  const increaseCount = ()=>{
    setCount ((prev)=> prev + 1);
  }

  const decreaseCount = ()=>{

    if(count <= 0){
      return
    }

    setCount ((prev)=> prev - 1)
  }

  const doubleCount = ()=>{
    setCount ((prev)=> prev * 2)
  }
  
  const resetCount = ()=>{
    setCount(0);
  }

  return(
    <div 
    style={
      {
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        padding: "1rem",
        gap: "1rem"
      }
    }>
      
      <button onClick={increaseCount}>+</button>
      <p>{count}</p>
      <button onClick={decreaseCount}>-</button>
      <button onClick={doubleCount}>*2</button>
      <button onClick={resetCount}>Reset count</button>
    </div>
    
  )
}

export default App;