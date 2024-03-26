import React from 'react'
import Blog from '../Blog/Blog'
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <div className="blogs xl:flex gap-8 relative py-12 ">
      <div className="left relative">
        <h1 className="lg:text-4xl sm:-ml-6 sm:text-2xl md:text-3xl text-3xl xl:text-left sticky top-48 mb-[250px] mt-24 text-center">
          <span className="font-semibold ">Explore</span> recent Blogs
          for a view
        </h1>
      </div>
      <div className="right md:my-12 ">
        <div className="blogs sticky md:my-12">
          <div className="z-10 sticky top-48  bg-white rounded-lg">
            <Blog></Blog>
          </div>
          <div className="z-20 bg-white sticky top-48 rounded-lg">
            <Blog></Blog>
          </div>
          <div className="z-30 bg-white sticky top-48 rounded-lg ">
            <Blog></Blog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs
