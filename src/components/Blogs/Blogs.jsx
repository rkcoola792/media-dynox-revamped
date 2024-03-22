import React from 'react'
import Blog from '../Blog/Blog'
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <div className="blogs flex gap-8 relative  ">
      <div className="left relative">
        <h1
          className="lg:text-4xl sm:-ml-6 sm:text-2xl md:text-3xl text-3xl text-center sticky top-48 mb-[250px] mt-24"
        >
          <span className="font-semibold sm:-ml-5">Explore</span> recent Blogs
          for a view
        </h1>
      </div>
      <div className="right my-12 ">
        <div className="blogs sticky my-12">
          <div className="z-10 sticky top-48 bg-white">
            <Blog></Blog>
          </div>
          <div className="z-20 bg-white sticky top-48">
            <Blog></Blog>
          </div>
          <div className="z-30 bg-white sticky top-48 ">
            <Blog></Blog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs
