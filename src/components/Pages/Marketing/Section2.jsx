import { motion } from 'framer-motion';
import React from 'react'
motion
const Section2 = () => {
  return (
    <div className="Section-2 sm:px-24  sm:mt-20 px-8 sm:py-12 py-12">
      <motion.div
        className="heading"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="sm:text-4xl text-3xl font-thin">
          <span className="font-semibold">What is</span> Marketing ?
        </h1>
      </motion.div>
      <motion.div
        className="subheading mt-12"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="sm:text-2xl text-xl font-semibold ">
          Brand purpose is the practice of increasing the quantity and quality
          of traffic to your website through organic search engine results.
        </h1>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Section2
