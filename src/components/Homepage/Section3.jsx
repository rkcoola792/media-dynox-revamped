import React from "react";


import { motion } from "framer-motion";
import Explore from "../Explore/Explore";
import Cards from "../Cards/Cards";

const Section3 = () => {
  return (
    <div className="section-3 flex flex-col items-center lg:px-24 px-12 gap-12 py-16 h-auto z-30 bg-white relative ">
      <motion.h1
        className="text-3xl text-center z-30" 
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-bold">Explore services </span> that we offer
      </motion.h1>
      <motion.h3
        className="lg:w-[80%] text-center text-gray-600 text-base leading-7"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Announce your brand to the right people, at the right time with
        innovative strategies that are built for your business and your brand to
        the right people, at the right time with innovative strategies that are
        built for your
      </motion.h3>
      <div className="cards flex gap-6 flex-wrap xl:flex-nowrap justify-center md:justify-center">
        <motion.div
          className="hover:bg-white"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Cards
            title="Design"
            first="Graphic Designing"
            second="Branding Designing"
            third="UI/UX Designing"
            fourth="Web Designing"
          ></Cards>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Cards
            title="Technology"
            first="Web Development"
            second="App Development"
            third="Software Development"
            fourth="IOS Development"
          ></Cards>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Cards
            title="Business"
            first="Branding"
            second="Strategy & Planning"
            third="Public Relation"
            fourth="Programmatic"
          ></Cards>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Cards
            title="Marketing"
            first="Social Media"
            second="Paid Media"
            third="Digital Marketing"
            fourth="S.E.O"
          ></Cards>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Explore text="Explore all Services"></Explore>
      </motion.div>
    </div>
  );
};

export default Section3;
