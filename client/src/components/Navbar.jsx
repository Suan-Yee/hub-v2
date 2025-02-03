import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import profile from '../assets/profile.png'
import NavbarItem from './NavbarItem'
import { Bell, Rocket, UserPlus } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full h-14 md:h-16 px-6 flex items-center justify-between bg-white border-b-0 shadow-sm'>
        <Link to='/' className='flex items-center gap-1 text-2xl font-bold'>
            <img src={logo} className="logo" alt="Logo" width={48} height={48} />
            <span className='font-semibold text-md'>IDK</span>
        </Link>

        <div className='flex justify-between items-center gap-8 mx-3'>
          
          <NavbarItem  src={Rocket} size="w-7 h-7" /> 
          <NavbarItem  src={UserPlus} size="w-7 h-7" />

          <div className="relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer">
            <div className="w-7 h-7 rounded-full overflow-hidden text-gray-600">
              <Bell className="object-cover w-full h-full"/>
            </div>
            <span className="absolute top-1.5 right-2 transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center bg-blue-500 text-white text-xs rounded-full w-3 h-3">
              1
            </span>
          </div>

          <div className="flex items-center border-2 border-gray-500 bg-transparent w-36 h-12 rounded-full px-2">
            <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
              <img src={profile} alt="profile" className="object-cover w-full h-full" />
            </div>
            <span className="mx-3 text-black text-xl">|</span>
            <span className="text-lg ">Suan</span>           
          </div>

        </div>
    </div>
  )
}

export default Navbar