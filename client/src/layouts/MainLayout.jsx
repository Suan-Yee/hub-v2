import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const MainLayout = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fixed Navbar */}
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>

      <div className="flex ">
        {/* Fixed Sidebar */}
        <div className="hidden md:block fixed top-16 left-0 h-full md:w-48 lg:w-58 2xl:w-68">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 md:ml-80 lg:ml-100 2xl:ml-120 pt-4 p-4 overflow-y-auto" style={{ marginTop: '4rem' }}>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default MainLayout