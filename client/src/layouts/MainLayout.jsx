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
        <div className="fixed top-16 left-0 h-full w-64">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 ml-80 pt-4 p-4 overflow-y-auto" style={{ marginTop: '4rem' }}>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default MainLayout