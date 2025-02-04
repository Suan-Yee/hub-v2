import React from 'react'
import Search from '../components/Search'
import Post from '../components/Post'

const Test = () => {
  return (
    <div>
      <Search />
      <div className='h-full border-b border-gray-400 shadow-2xl my-4'></div>
      <Post />
    </div>
  )
}

export default Test