import React from 'react'
import Explore from "../Explore/Explore";
const Blog = ({date,heading,subheading,img}) => {
  return (
    <div className="blog flex gap-6 rounded-lg justify-evenly shadow-blog-shadow p-12 my-6  cursor-pointer border border-white hover:border hover:border-red-400 transition duration-300 ease-out hover:ease-in ">
      <div className="left date w-[15%]">
        <p className="text-xl"> March 21, 2024</p>
      </div>
      <div className="mid content w-[40%] flex flex-col gap-2">
        <div className="main-headings top text-2xl font-semibold">
          <h1>Mind body and soul:</h1>
          <h1>Holistic approaches to</h1>
        </div>
        <div className="subheading middle">
          <p>
            Transform your business with expert consulting services. Our team
            offers strategic guidance, innovative solutions, and
          </p>
        </div>

        <div className="bottom">
          <Explore text="Read more"></Explore>
        </div>
      </div>
      <div className="right image">
        <img
          src="/public/Blog/blog-1.jpg"
          alt="blog"
          className="w-[250px] h-[220px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

export default Blog
