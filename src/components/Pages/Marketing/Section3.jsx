import { motion } from 'framer-motion';
import React from 'react'

const Section3 = ({first,second,third ,fourth,heading,subheading}) => {
  return (
    <div className="section-3 bg-slate-100 h-[300px] sm:px-24 my-12 flex flex-col justify-center gap-10 px-8">
      <h1 className="sm:text-4xl text-3xl font-thin">
        <span className="font-semibold">Services</span> We offer
      </h1>
      <motion.div
        className="service-elemets flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">{first}</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">{second}</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">{third}</h1>
        </div>
        <div className=" border-dotted  border-2 border-black flex justify-center items-center p-2 px-4 cursor-pointer">
          <h1 className="font-semibold">{fourth}</h1>
        </div>
      </motion.div>
    </div>
  );
}

export default Section3
