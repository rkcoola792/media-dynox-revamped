import React, { useState } from 'react'
import Explore from "../Explore/Explore";
const Blog = ({date,heading,subheading,img}) => {
  const [grayscale,setGrayScale]=useState(true)
  
  return (
    <div
      className="blog flex lg:gap-6 sm:gap-4 rounded-lg justify-evenly shadow-blog-shadow lg:p-12 md:py-10 md:px-8 cursor-pointer border border-white hover:border hover:border-red-400 transition duration-300 ease-out hover:ease-in mb-2 "
      onMouseEnter={() => setGrayScale(false)}
      onMouseLeave={() => setGrayScale(true)}
    >
      <div className="left date lg:w-[15%] sm:w-[10%]">
        <p className="lg:text-xl"> March 21, 2024</p>
      </div>
      <div className="mid content w-[40%] flex flex-col gap-2">
        <div className="main-headings top lg:text-2xl md:text-base font-semibold">
          <h1>Mind body and soul:</h1>
          <h1>Holistic approaches to</h1>
        </div>
        <div className="subheading middle md:text-sm ">
          <p className='leading-6'>
            Transform your business with expert consulting services. Our team
            offers strategic guidance, innovative solutions, and
          </p>
        </div>

        <div className="lg:scale-100 md:scale-90 md:-ml-4 lg:-ml-2">
          <Explore text="Read more"></Explore>
        </div>
      </div>
      <div
        className={`right-image grayscale${
          grayscale ? "" : "-0"
        } transition duration-500 ease-out hover:ease-linear  `}
      >
        <img
          src="/public/Blog/blog-1.jpg"
          alt="blog"
          className="lg:w-[250px] lg:h-[220px] md:w-[180px] md:h-[180px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Blog
