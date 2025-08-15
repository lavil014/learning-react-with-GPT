import { useState } from 'react'
import movies from './movies.json'
import Movie from './Movie'

function App() {

  console.log(movies.length)


  return(
    <div>
      {
        movies.length > 0 ? movies.map((movie)=>{
          const {title, director,poster,id} = movie;

          return(
            <Movie title={title} director={director} poster={poster}/>
          )
        }) : <h1>No movies to display</h1>
      }
    </div>
  )
}

export default App
