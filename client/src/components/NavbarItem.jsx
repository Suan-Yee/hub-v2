import React from 'react'

const NavbarItem = ({src,size = "w-9 h-9" }) => {
  return (

    <div className={`${size} rounded-full overflow-hidden`}>
        <img src={src} alt="item" className="object-cover w-full h-full"/>
    </div>
  )
}

export default NavbarItem