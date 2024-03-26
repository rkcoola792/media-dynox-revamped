import { motion } from 'framer-motion';
import React from 'react'
import "./BreakThrough.scss"

const BreakThrough = ({step,heading,subheading}) => {
  return (
    <section>
      <div className="break-through flex gap-4 mb-16 ">
        <motion.div
          className="  flex justify-center items-center left-circle bg-red-300 h-[150px] w-[150px] rounded-[50%] text-3xl hover:bg-mainred hover:text-white cursor-pointer transition duration-200 ease-linear hover:ease-linear"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -15,
            boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)",
          }}
          // transition={{ duration: 0.1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {step}
        </motion.div>

        <motion.div
          className="right-div  flex flex-col gap-4  mt-[14px] w-[60%]"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1  }}
        >
          <h1 className="heading text-2xl font-semibold">{heading}</h1>
          <p className="subheading text-sm leading-6 text-gray-700 ">{subheading}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default BreakThrough
