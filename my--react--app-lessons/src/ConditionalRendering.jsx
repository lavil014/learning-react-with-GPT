import React from "react";

const UI = ()=>{


  const isLogedin = true;
  const userName = 'Luis';

  return(

    <div>
      isLogedin ? <h1>Welcome to your profile {userName} !</h1>:<h1>Please login with your user name and password</h1>
    </div>
  )

}

export default UI ;