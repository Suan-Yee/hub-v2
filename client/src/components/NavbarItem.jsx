import React from 'react'

const NavbarItem = ({src : Icon, size = "w-9 h-9" }) => {
  return (

    <div className={`${size} text-gray-600 overflow-hidden cursor-pointer`}>
        <Icon className="object-cover w-full h-full"/>
    </div>
  )
}

export default NavbarItem