import React, { useState } from 'react'
import profile from '../assets/profile.png'
import { Bookmark, Ellipsis } from 'lucide-react'

const DocumentSection = ({ content, images = [] }) => {
  return (
    <div className="mt-3">
      {content && <p className="text-gray-800 mb-3">{content}</p>}
      {images.length > 0 && <ImageGrid images={images} />}
    </div>
  );
};

// ImageGrid displays images based on the number of images passed.
const ImageGrid = ({ images }) => {
  const imageCount = images.length;

  if (imageCount === 1) {
    return (
      <div className="w-full">
        <img
          src={images[0]}
          alt="Post content"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>
    );
  } else if (imageCount === 2) {
    return (
      <div className="grid grid-cols-2 gap-1">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Post content ${idx + 1}`}
            className="w-full h-48 object-cover rounded-md"
          />
        ))}
      </div>
    );
  } else if (imageCount === 3) {
    return (
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-2 gap-1">
          {images.slice(0, 2).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Post content ${idx + 1}`}
              className="w-full h-32 object-cover rounded-md"
            />
          ))}
        </div>
        <div>
          <img
            src={images[2]}
            alt="Post content 3"
            className="w-full h-48 object-cover rounded-md"
          />
        </div>
      </div>
    );
  } else if (imageCount === 4) {
    return (
      <div className="grid grid-cols-2 gap-1">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Post content ${idx + 1}`}
            className="w-full h-32 object-cover rounded-md"
          />
        ))}
      </div>
    );
  } else if (imageCount > 4) {
    const extraCount = imageCount - 4;
    return (
      <div className="grid grid-cols-2 gap-1">
        {images.slice(0, 3).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Post content ${idx + 1}`}
            className="w-full h-32 object-cover rounded-md"
          />
        ))}
        <div className="relative">
          <img
            src={images[3]}
            alt="Post content 4"
            className="w-full h-32 object-cover rounded-md filter blur-sm"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-md">
            <span className="text-white font-semibold text-xl drop-shadow-lg">
              +{extraCount}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};


const Post = () => {

  const [bookmark,setBookmark] = useState(false);

  const content =
    "This is a sample post text. Here is some interesting  that goes along with the images below.";
  // Change the number of URLs here to test different image layouts.
  const images = [
    'https://images.unsplash.com/photo-1734907865880-6eb669831b9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736329279938-372e9e471795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736329279938-372e9e471795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736329279938-372e9e471795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1736329279938-372e9e471795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];


  return (
    <div className='max-w-md  bg-white rounded-2xl p-2 shadow-xl'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>

          <div className='w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden cursor-pointer'>
            <img src={profile} alt="profile" className="object-cover w-full h-full" />
          </div>

          <div>
            <p className='text-sm md:text-base font-semibold text-black'>Suan-Yee
              <span className="text-gray-600 mx-1 ml-2">
                &gt; beast
              </span>
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
    </div>
  )
}

export default Post