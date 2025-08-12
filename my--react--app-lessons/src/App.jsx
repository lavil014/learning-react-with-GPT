import React from "react";
import Greeting from "./Greeting";
import Hobbies from "./Hobbies";

function App(){
  
  const name = 'Luis';
  const date = new Date();
  const todaysDate = date.toDateString();
  const today = date.toLocaleDateString("en-US", {weekday: 'long'});
  const hours = date.getHours();
  let currentTimer = '';
  const andreasHobbies = ['Tiktoking', 'Sleeping', 'Cooking', 'Napping'];
  
  if(hours <12){
    currentTimer = 'Good morning';
  }else if(hours <18 ){
    currentTimer = 'Good afternoon';
  } else{
    currentTimer = 'Good evening';
  }


  return(
    <div>
      
      {/*<Greeting greet={currentTimer} greetDate={todaysDate} name ={name} day={today}/> */}

      <Greeting userInfo={{name, greet:currentTimer, greetDate:todaysDate, day:today}}/>
      <p>Welcome to my first React app.</p>
      <p>Below you will find my hobbies</p>
      <Hobbies hobbies={{hob1 : 'Coding', hob2:'Gaming', hob3: 'Excercising', hob4:'Sleeping'}}/>
      <ul>
        {andreasHobbies.map((hobbie, index)=>{
          return (<li key={index}>{hobbie}</li>)
        })}
      </ul>
    </div>
  )
}

export default App;