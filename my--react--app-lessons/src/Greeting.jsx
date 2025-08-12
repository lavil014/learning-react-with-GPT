import React from "react";

const Greeting = ({userInfo})=>{

  const {name, day, greet, greetDate} = userInfo;

  return(
    <div>
      <h1>{greet}!</h1>
      <p>Today's date is : {greetDate}</p>
      <h2>Hello, {name}</h2>
      <h3>Happy {day}!</h3>
    </div>
  )
}

export default Greeting;