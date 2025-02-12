import React from 'react'
import Post from '../components/Post'
import car from '../assets/post/car.avif'
import owl from '../assets/post/owl.avif'
import robot from '../assets/post/robot.avif'
import sand from '../assets/post/sand.avif'
import sky from '../assets/post/sky.avif'

const Test = () => {

  const content = "This is a sample post text. Here is some interesting  that goes along with the images below.";
  
  const images = [robot,car,owl,sand,sky];
  const image2 = [sky];
  const image3 = [robot,car];
  const image4 = [robot,car,owl,sand];

  return (
    <div>
      {/* <Search /> */}
      <div className='h-full border-b border-gray-400 shadow-2xl my-4'></div>
      <Post images={images} content={content} group="beast" / >
      <Post content={content} / >
      <Post images={image2} content={content} / >
      <Post images={image3} content={content} / >
      <Post images={image4} content={content} / >
    </div>
  )
}

export default Test