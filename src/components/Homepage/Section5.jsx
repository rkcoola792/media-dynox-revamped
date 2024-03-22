import React from "react";
import { motion } from "framer-motion";
import InfiniteScroll from "../InfiniteScroll/Infinitescroll";
import Explore from "../Explore/Explore";
const Section5 = () => {
  return (
    <div className="bg-secondaryRed h-[500px] flex flex-col items-center py-12 text-center overflow-hidden gap-12 px-8 ">
      <motion.div
        className="top-heading text-white pt-8"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="md:text-[40px] text-2xl font-semibold ">
          Yes. We cover your tech stack.
        </h1>
        <p className="md:text-base text-xs mt-2">
          Our 4,000+ team has expertise in almost everyprogramming language.
        </p>
      </motion.div>

      <motion.div
        className="scroll"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <InfiniteScroll></InfiniteScroll>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Explore text="Read More" color="white" hovercolor="white"></Explore>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section5;
