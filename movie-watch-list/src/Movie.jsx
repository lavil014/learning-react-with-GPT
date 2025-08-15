import React from "react";

const Movie = ({title,poster,director})=>{
    
  return(
    <div className="movieCard">
      <h3>{title}</h3>
      <img src={poster} alt={title}/>
      <p>{director}</p>
    </div>
  )
} 

export default Movie;