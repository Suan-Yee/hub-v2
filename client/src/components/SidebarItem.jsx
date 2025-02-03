import React from 'react'

const SidebarItem = ({ icon,text,active,collapsed }) => {
  return (
    <div className={`relative flex items-center 
      ${collapsed ? 'justify-center' : 'justify-start'} 
      py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-300
    ${active ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800' : 'hover:bg-indigo-50 text-gray-600'}
    `}>
    <span className="flex items-center justify-center mr-1">{icon}</span>
    {!collapsed && <span className="ml-3">{text}</span>}
  </div>
  )
}

export default SidebarItem