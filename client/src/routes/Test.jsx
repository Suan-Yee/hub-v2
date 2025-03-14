import React from 'react'
import Post from '../components/Post'
import car from '../assets/post/car.avif'
import owl from '../assets/post/owl.avif'
import robot from '../assets/post/robot.avif'
import sand from '../assets/post/sand.avif'
import sky from '../assets/post/sky.avif'
import Messages from '../components/Messages'

const Test = () => {

  const content = "This is a sample post text. Here is some interesting  that goes along with the images below.";
  
  const images = [robot,car,owl,sand,sky];
  const image2 = [sky];
  const image3 = [robot,car];
  const image4 = [robot,car,owl,sand];
  const image5 = [sky,sky,owl];

  

  return (
    <div className="flex gap-4 justify-between">

      <div className="flex-1">
        <Post images={images} content={content} group="beast" />
        <Post content={content} />
        <Post images={image2} content={content} />
        <Post images={image3} content={content} />
        <Post images={image4} content={content} />
        <Post images={image5} content={content} />
      </div>

      <div className="hidden md:block">
        <div className="fixed right-5 h-auto 2xl:mr-30 mt-3">
          <Messages />
        </div>
      </div>
    </div>
  );
}

export default Test