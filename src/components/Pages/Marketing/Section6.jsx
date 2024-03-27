import { motion } from 'framer-motion';
import React from 'react'

const Section6 = () => {
  return (
    <div className="section-6 sm:flex sm:justify-between pt-16 -mb-8 sm:mb-0 sm:items-center sm:my-24 sm:pl-28 px-8  ">
      <div className="left-text md:w-[30%] sm:w-[50%]">
        {" "}
        <motion.h1
          className="font-light lg:text-4xl sm:text-3xl  text-3xl leading-[45px]"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-semibold">Popular tool that power</span> our
          digital marketing services
        </motion.h1>
      </div>
      <motion.div
        className=" right-images mt-12 sm:mt-0 flex flex-wrap justify-start items-start gap-6 lg:w-[40%] sm:w-[50%]"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div>
          <img
            src="/GA.webp"
            className="object-contain sm:w-[75px] sm:h-[35px] md:w-[100px] md:h-[50px] h-[75px] w-[150px]"
            alt=""
          />
        </div>
        <div>
          <img
            src="/webmaster.png"
            className="object-contain sm:w-[75px] sm:h-[35px] md:w-[100px] md:h-[50px] h-[75px] w-[150px]"
            alt=""
          />
        </div>
        <div>
          <img
            src="/ads.png"
            className="object-contain sm:w-[75px] sm:h-[35px] md:w-[100px] md:h-[50px] h-[75px] w-[150px] -ml-6 sm:ml-0"
            alt=""
          />
        </div>
        <div>
          <img
            src="/semrush.png"
            className="object-contain sm:w-[75px] sm:h-[35px] md:w-[100px] md:h-[50px] h-[75px] w-[150px] ml-6 sm:ml-0 "
            alt=""
          />
        </div>
        <div>
          <img
            src="/hootsuite.png"
            className="object-contain sm:w-[75px] sm:h-[35px] md:w-[100px] md:h-[50px] h-[75px] w-[150px]"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Section6
