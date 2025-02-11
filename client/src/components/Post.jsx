import React from 'react'
import profile from '../assets/profile.png'

const Post = () => {
  return (
    <div className=' border-2 border-gray-500 rounded-2xl w-md h-82 p-2'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between gap-3'>

          <div className='w-9 h-9 rounded-full overflow-hidden cursor-pointer'>
            <img src={profile} alt="profile" className="object-cover w-full h-full" />
          </div>

          <div className=''>
            <p className='text-sm text-black font-semibold'>Suan-Yee</p>
            <p className='text-xs text-black'>12 min <span>ago</span></p>
          </div>

        </div>

        <div className='cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Post