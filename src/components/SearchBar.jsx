import React from 'react'

// Images
import SerachIcon from "../assets/search-icon.svg";

function SearchBar() {
  return (
    <div className='w-full max-w-[500px] border-2 rounded-2xl flex mt-5'>
        <input type="search" className='w-full rounded-2xl rounded-r-none px-3 py-1 focus:outline-none'/>
        <img src={SerachIcon} alt="search icon" className='w-7 pr-2' />
    </div>
  )
}

export default SearchBar