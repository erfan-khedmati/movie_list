import React from 'react'

// Components
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='w-full h-full bg-black/93 text-white flex flex-col items-center'>
      <SearchBar />
      <MovieList />
    </div>
  )
}

export default App