import React from 'react'
import Post from '../components/Post'
import car from '../assets/post/car.avif'
import owl from '../assets/post/owl.avif'
import robot from '../assets/post/robot.avif'
import sand from '../assets/post/sand.avif'
import sky from '../assets/post/sky.avif'
import Search from '../components/Search'
import TrendingPosts from '../components/TrendingPost'
import Activity from '../components/ActivitySystem'
import ActivitySystem from '../components/ActivitySystem'

const Test = () => {

  const content = "This is a sample post text. Here is some interesting  that goes along with the images below.";
  
  const images = [robot,car,owl,sand,sky];
  const image2 = [sky];
  const image3 = [robot,car];
  const image4 = [robot,car,owl,sand];
  const image5 = [sky,sky,owl];

  

  return (
    <div className="flex gap-4">

      <div className="flex-1">
        <Post images={images} content={content} group="beast" />
        <Post content={content} />
        <Post images={image2} content={content} />
        <Post images={image3} content={content} />
        <Post images={image4} content={content} />
        <Post images={image5} content={content} />
      </div>

      <div className="">

        <div className="w-89 p-4">
          <ActivitySystem />
        </div>

        {/* <div className="bg-white rounded-2xl p-4 shadow-xl">
          <h2 className="text-2xl font-bold mb-2">No.3</h2>
          <p>Another highlighted piece of content or suggestion.</p>
        </div> */}

      </div>
    </div>
  );
}

export default Test