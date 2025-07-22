import React from 'react'
import { Outlet } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className='w-screen h-screen'>
      <Navbar />
      <main className='w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout