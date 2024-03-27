import React from 'react'
import SectionFiveElement from './SectionFiveElement';

import { motion } from 'framer-motion';
import { Item } from '../../Dropdown/Dropdown';

const Section10 = () => {
  return (
    <div className="section-10 sm:px-24 px-8 mt-12 flex flex-col  ">
      <div className="heading">
        <motion.h1
          className="font-light sm:text-4xl text-3xl leading-[45px]"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-semibold">Other </span>Services
        </motion.h1>
      </div>
      <div className="flex items-center  lg:gap-12 sm:gap-6 sm:mt-16 mt-12  gap-8 justify-between flex-wrap">
        <motion.div
          className="lg:w-[30%] sm:mb-6 lg:mb-0 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Item
            subheading="Learn how to sign up, install and use our products."
            title="Business"
            img="/business.webp"
            color="bg-green-100"
          ></Item>
        </motion.div>
        <motion.div
          className="lg:w-[30%] sm:mb-6 lg:mb-0"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Item
            subheading="Learn, share and connect with other users."
            title="Technology"
            img="/technology.webp"
            color="bg-blue-100"
          ></Item>
        </motion.div>
        <motion.div
          className="lg:w-[30%] sm:mb-6 lg:mb-0"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Item
            subheading="Learn, share and connect with other users."
            title="Design"
            img="/design.webp"
            color="bg-orange-100"
          ></Item>
        </motion.div>
      </div>
    </div>
  );
}

export default Section10
