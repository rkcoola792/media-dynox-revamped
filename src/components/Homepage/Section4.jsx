import { motion } from 'framer-motion'
import React from 'react'
import FAQ from '../FAQ/FAQ'

const Section4 = () => {
  return (
    <div className="left section-4 md:flex flex flex-col md:flex-row lg:px-24 px-12  bg-slate-100  py-24 mt-12 relative ">
      <div className="sticky top-48 sm:w-[50%]">
        <motion.div
          className="left lg:w-[65%] text-center md:text-left flex flex-col gap-8 sticky top-48 justify-center items-center"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h1
            className="xl:text-3xl sm:text-2xl lg:text-3xl leading-10 text-3xl   "
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="font-semibold">Execute</span> all your{" "}
            <span className="font-semibold">Business goals</span> in one place
          </motion.h1>
          <motion.p
            className="text-gray-700 sm:text-sm xl:text-lg leading-7"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Announce your brand to the right people, at the right time with
            innovative strategies that are built for your business and you.
          </motion.p>
        </motion.div>
      </div>

      <div className="right sm:w-[50%]">
        <div className="right my-12 ">
          <div className="blogs sticky my-12 flex flex-col gap-4">
            <div className="z-10 sticky sm:top-48 top-[60%] right-12 bg-white rounded-lg">
              <FAQ
                heading="Innovative Approach"
                subheading="We mix equal parts of creative and strategic to bring you a phenomenal experience."
                img="/FAQ1.webp"
              ></FAQ>
            </div>
            <div className="z-20 bg-white sticky sm:top-48 top-[60%] rounded-lg">
              <FAQ
                heading="Futuristice Technology"
                subheading="Our tech choices complement our ideas well, AI, Cloud, Sustainable Tech, we’re everywhere."
                img="/FAQ2.jpeg"
              ></FAQ>
            </div>
            <div className="z-30 bg-white sticky sm:top-48 top-[60%] rounded-lg ">
              <FAQ
                heading="Benchmark Qaulity"
                subheading="Quality is the virtue we swear all our work by. We strive to set the standards for the upcoming era."
                img="/FAQ3.webp"
              ></FAQ>
            </div>
            <div className="z-30 bg-white sticky sm:top-48 top-[60%] rounded-lg ">
              <FAQ
                heading="100% Satisfaction"
                subheading="We know we are simply great at what we do. But you don’t. Not until we satiate your hunger for ‘perfect’."
                img="/FAQ4.webp"
              ></FAQ>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4
