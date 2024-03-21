import React from "react";

import { motion } from "framer-motion";
import Explore from "../Explore/Explore";

const Section9 = () => {
  return (
    <motion.div
      className="relative w-full  flex justify-center mt-32 px-8 "
      initial={{ opacity: 0, y: 75 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1.3,
        // boxShadow: "0px 0px 10px 50px rgba(255, 0, 0, 0.5)",
      }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <img src="/cta-banner.png" alt="" className="h-[200px] sm:h-full " />
      <motion.h1
        className="absolute top-[20%] md:text-5xl sm:text-3xl  text-white text-center lg:top-28 sm:top-20 sm:leading-[70px] sm:w-[50%] font-thin text-3xl w-[80%]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-bold">Lets discuss</span> make something cool
        together
      </motion.h1>
      <motion.div
        className="absolute lg:bottom-28 sm:bottom-16 bottom-[20%]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Explore text="Get in touch" color="white"></Explore>
      </motion.div>
    </motion.div>
  );
};

export default Section9;