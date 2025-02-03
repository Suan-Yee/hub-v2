import React from 'react'
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

const Search = () => {

    const choiceOptions = [
        { value: 'best', label: 'Best' },
        { value: 'hot', label: 'Hot' },
        { value: 'new', label: 'New' },
        { value: 'top', label: 'Top' },   
    ]

  return (
    <div className='flex justify-start items-center gap-6 w-1/2 '>

        <Dropdown size="w-24" options={choiceOptions} defaultOption='Sort by' />

        <SearchBox placeholder='Search a Content' />
    </div>
  )
}

export default Search