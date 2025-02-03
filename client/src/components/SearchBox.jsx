import { Search as SearchIcon } from 'lucide-react';
import React, { useState } from 'react'

const SearchBox = ({placeholder}) => {

    const [searchText,setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

  return (
    <div className='rounded-2xl border-2 border-gray-500 w-64 h-10 px-3 flex items-center shadow-sm'>
        <SearchIcon />
        <input type='text' 
            value={searchText} 
            onChange={handleChange} 
            placeholder={placeholder} 
            className="outline-none w-full h-full px-2 "/>
        </div>
  )
}

export default SearchBox