import React, { useState } from 'react'
import profile from '../assets/profile.png'
import { Bookmark, Ellipsis } from 'lucide-react'
import DocumentSection from './DocumentSection';
import PostInteraction from './PostInteraction';

const Post = ({images,content,group}) => {

  const [bookmark,setBookmark] = useState(false);

  return (
    <div className='max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-2xl bg-white rounded-2xl p-2 shadow-xl my-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden cursor-pointer'>
            <img src={profile} alt="profile" className="object-cover w-full h-full" />
          </div>

          <div>
            <p className='text-sm md:text-base font-semibold text-black'>Suan-Yee
              {group && (
                <span className="text-gray-600 mx-1 ml-2">
                &gt; {group}
                </span>
              )}              
            </p>
            <p className='text-xs font-medium text-gray-700'>12 min <span>ago</span></p>
          </div>

        </div>

        <div className='cursor-pointer flex gap-2'>
          <Bookmark className={`transition-colors duration-500 w-5 hover:text-blue-500 
            ${bookmark ? 'fill-blue-500 text-blue-400 ' : ''} `}  
            onClick={() => setBookmark((prev) => !prev)}/>
          <Ellipsis className='w-5'/>
        </div>
      </div>

      <DocumentSection content={content} images={images} />
      <PostInteraction />
    </div>
  )
}

export default Post