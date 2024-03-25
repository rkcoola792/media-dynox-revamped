import { motion } from 'framer-motion';
import React from 'react'
import BreakThrough from '../BreakThrough/BreakThrough';

const Section6 = () => {
    const breakThrough = [
      {
        step: "1",
        heading: "Audit",
        subheading:
          "A 360° study of the project that gives equal consideration to your and your product’s end users’ expectations.",
      },
    //   {
    //     step: "2",
    //     heading: "Enact",
    //     subheading:
    //       "Getting hands-on with the plans to develop a stellar product that stands the test of time.",
    //   },
    //   {
    //     step: "3",
    //     heading: "  Brush Up",
    //     subheading:
    //       "Regular maintenance checks and amendments to eliminate possible hurdles and polish the existing product to fulfill the scope of improvement.",
    //   },
    //   {
    //     step: "4",
    //     heading: "Brainstorm",
    //     subheading:
    //       "Aligning the goals, resources, and market trends in a harmonious symphony for a smooth development journey.",
    //   },
    //   {
    //     step: "5",
    //     heading: "Launch & Broadcast",
    //     subheading:
    //       "Sharing the final product with end users, evaluating user behavior, and monitoring progress.",
    //   },
    //   {
    //     step: "6",
    //     heading: "Nourish",
    //     subheading:
    //       "Ensuring the product works like a well-oiled machine by conducting regular maintenance.",
    //   },
    ];
  return (
    <div className="section-6 ">
      <div className="top-headings flex flex-col my-24 px-12 gap-6 justify-center text-center items-center">
        <motion.h1
          className="text-4xl text-center z-30"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-bold">Break Through the Boring,</span> One Step
          At A Time
        </motion.h1>
        <motion.h3
          className="sm:w-[70%] text-center text-gray-600 text-base leading-7"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Grand experiences can be divided into multiple small ones. Our
          simplified 6-step procedure ensures that your business becomes a grand
          experience for you.
        </motion.h3>
      </div>
      <div className='bottom-steps'>
        {breakThrough.map(ele=><BreakThrough heading={ele.heading} subheading={ele.subheading} step={ele.step} key={ele.step}></BreakThrough>)}
      </div>
    </div>
  );
}

export default Section6
