import React from "react";

import { motion } from "framer-motion";
import Explore from "../Explore/Explore";

const Section8 = () => {
  return (
    <div className="section-8 lg:flex gap-6 lg:gap-12 md:px-24  sm:px-12 sm:pr-36 mt-16 lg:h-[520px] justify-center items-center my-12 px-8 ">
      <div className="left lg:w-[30%] lg:text-left lg:mt-4 sm:text-center  lg:flex lg:flex-col gap-44 mb-12  ">
        <motion.h1
          className="lg:text-4xl sm:-ml-6 sm:text-2xl md:text-3xl text-3xl text-center "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-semibold sm:-ml-5">Explore</span> recent Blogs
          for a view
        </motion.h1>
        <motion.div
          className="sm:ml-[40%] sm:mt-6  lg:ml-0 lg:mt-0 text-center ml-[25%] "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Explore text="More Blogs "></Explore>
        </motion.div>
      </div>
      <div className="right lg:flex-row lg:w-[70%] lg:gap-4 lg:pr-24 sm:mt-8 md:px-[6vw] lg:px-0 flex flex-col gap-4 ">
        <motion.div
          className="container-1-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="img-1 sm:w-[600px] xl:w-[250px] lg:w-[200px] relative overflow-hidden cursor-pointer  "
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src="/img4.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500 "
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="container-2-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="img-1 sm:w-[600px] xl:w-[250px] lg:w-[200px]  overflow-hidden relative cursor-pointer "
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/img5.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500"
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="container-3-img sm:ml-32 lg:ml-0 sm:mb-8 lg:mb-0"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="img-1 sm:w-[600px] xl:w-[250px] lg:w-[200px] h-[px] relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="/img6.jpg"
              alt=""
              className="sm:h-[250px] lg:h-[350px] object-cover hover:scale-110 transition-all duration-500"
            />
            <div className="absolute text-white bottom-4 ml-6 text-opacity-90">
              <h1 className="text-sm">December 14,2023</h1>
              <p className="w-[85%]">
                {" "}
                A roadmap for building a business chatbot
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section8;
