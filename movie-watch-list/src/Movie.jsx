import React from "react";
import '../src/stylesheets/moviecard.css';

const Movie = ({title,poster,director,year,genre,rating})=>{
    
  return(
    <div className="movieCard">
      <img src={poster} alt={title}/>
      <h3>{title}</h3>
      <p>{director}</p>
      <p>{genre}</p>
    </div>
  )
} 

export default Movie;