import React from "react";

const Hobbies = ({hobbies})=>{

  const {hob1, hob2, hob3, hob4} = hobbies;

  return (
    <div>
      <ul>
        <li>{hob1}</li>
        <li>{hob2}</li>
        <li>{hob3}</li>
        <li>{hob4}</li>
      </ul>
    </div>
  )
}

export default Hobbies;