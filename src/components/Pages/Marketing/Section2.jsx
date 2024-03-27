import { motion } from 'framer-motion';
import React from 'react'
motion
const Section2 = ({
  heading,
  subheading,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph
}) => {
  return (
    <div className="Section-2 sm:px-24  sm:mt-20 px-8 sm:py-12 py-12">
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="sm:text-4xl text-3xl font-thin">
          <span className="font-semibold">{heading}</span> {subheading}
        </h1>
      </motion.div>
      <motion.div
        className="subheading mt-12"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="sm:text-2xl text-xl font-semibold ">{firstParagraph}</h1>
      </motion.div>
      <motion.div
        className="description sm:mt-28 mt-12 flex flex-col gap-10 leading-7"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {secondParagraph}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {thirdParagraph}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {fourthParagraph}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Section2
