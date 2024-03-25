import { motion } from 'framer-motion';
import React from 'react'

const BreakThrough = ({step,heading,subheading}) => {
  return (
    <div className="break-through  flex justify-center items-center gap-12">
      <motion.div
        className=" flex justify-center items-center left-circle bg-red-300 h-[200px] w-[200px] rounded-[50%] text-6xl hover:bg-mainred hover:text-white cursor-pointer transition duration-200 ease-linear hover:ease-linear"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          y: -15,
          boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)",
        }}
        // transition={{ duration: 0.1 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {step}
      </motion.div>
      <div className="right-div w-[40%] flex flex-col gap-8 ">
        <h1 className="heading text-4xl font-semibold">{heading}</h1>
        <p className="subheading ">{subheading}</p>
      </div>
    </div>
  );
}

export default BreakThrough
