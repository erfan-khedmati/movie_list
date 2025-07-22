import React from 'react'

// 4DFF4D green color will update

// Components
import SearchBar from "../components/SearchBar"

function Navbar() {
  return (
    <div className='w-full flex items-center gap-10 px-5 py-2 backdrop-blur-md bg-white/10 sticky top-0'>
      <a className='text-[#4dff4d] mr-10' href='/'>
        <p className='font-bold text-xl tracking-wider text-nowrap'>Movie List</p>
      </a>
      <ul className='w-full flex gap-3 items-center'>
        <li>
          <a href="/" className='text-gray-100 text-sm font-semibold hover:text-[#4dff4d]'>
            Home
          </a>
        </li>
        <li className='w-full max-w-[500px] ml-5x'>
          <SearchBar />
        </li>
      </ul>
    </div>
  )
}

export default Navbar