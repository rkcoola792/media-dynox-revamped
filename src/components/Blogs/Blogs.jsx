import React from 'react'
import Blog from '../Blog/Blog'
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <div className="blogs flex gap-8 relative  ">
      <div className="left sticky top-24">
        <h1
          className="lg:text-4xl sm:-ml-6 sm:text-2xl md:text-3xl text-3xl text-center sticky top-48"
        >
          <span className="font-semibold sm:-ml-5">Explore</span> recent Blogs
          for a view
        </h1>
      </div>
      <div className="right my-12 relative">
        <div className="blogs relative my-12">
          <div className="z-10 sticky top-48">
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
