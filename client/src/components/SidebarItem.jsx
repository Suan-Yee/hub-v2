import React from 'react';

const SidebarItem = ({ icon, text, active, collapsed }) => {
  return (
    <div className={`group relative flex items-center 
        ${collapsed ? 'justify-center' : 'justify-start'} 
        py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-300
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }`}>
      <span className="flex items-center justify-center">{icon}</span>
      {!collapsed && <span className="ml-3">{text}</span>}
      {collapsed && (
        <span
          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-2 py-1
           bg-gray-900 text-white text-xs rounded shadow opacity-0 group-hover:opacity-100 
           transition-opacity duration-200 pointer-events-none whitespace-nowrap"
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default SidebarItem;
