import { useState } from 'react'
import movies from './movies.json'
import Movie from './Movie'
import '../src/stylesheets/movie.css'

function App() {


  return(

    <>

    <h1 style={
      {
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '2rem'
      }
    }>Top {movies.length} movies in 2025!</h1>


    <div className='MovieContainer'>
      {
        movies.length > 0 ? movies.map((movie)=>{
          const {title, director,poster,id, year, genre, rating} = movie;

          return(
            <Movie key={id} title={title} director={director} poster={poster} genre={genre} year={year} rating={rating}/>
          )
        }) : <h1>No movies to display</h1>
      }
    </div>
    </>
  )
}

export default App
