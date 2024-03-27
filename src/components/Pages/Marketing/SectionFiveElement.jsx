import { motion } from 'framer-motion'
import React from 'react'

const SectionFiveElement = ({title,subheading, icon}) => {
  return (
    <motion.div
      className="sectionFiveElement gap-4 flex flex-col py-2 sm:py sm:m-4 
    mx-2 my-2 sm:w-[25%] sm:mt-10 "
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="text-red-500 hover:text-mainred w-10">{icon}</div>
      <div>
        <h1 className="text-xl font-medium opacity-90">{title}</h1>
      </div>
      <div>
        <p className="text-gray-700 text-sm leading-6">{subheading}</p>
      </div>
    </motion.div>
  );
}

export default SectionFiveElement
