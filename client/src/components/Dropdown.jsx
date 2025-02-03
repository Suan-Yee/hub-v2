import React, { useState } from 'react'

const Dropdown = ({size,options = [],defaultOption = 'Select an option' }) => {

    const [selected,setSelected] = useState('');

  return (
    <div className={`${size} `}>
        <select value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className='block w-full p-2 border-2 border-gray-500 rounded-2xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        >
        <option value="" disabled>
          {defaultOption}
        </option>
        {options.map((option,idx) => (
            <option key={idx} value={option.value}>{option.value}</option>
        ))}
        </select>
    </div>
  )
}

export default Dropdown