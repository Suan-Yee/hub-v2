import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    // <div className='px-2 md:px-4 lg:px-8 lx:px-16 2xl:px-32'>
    <div>
        <Navbar />
        <Sidebar />
        <Outlet /> 
    </div>
  )
}

export default MainLayout