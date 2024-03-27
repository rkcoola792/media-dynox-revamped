import { motion } from 'framer-motion';

import React from 'react'
import Step from '../../Step/Step';

const Section4 = () => {
    const steps = [
      {
        title: "Research",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "1",
      },
      {
        title: "Create",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "2",
      },
      {
        title: "Promote",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "3",
      },
      {
        title: "Analyse",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "4",
      },
      {
        title: "Optimize",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "5",
      },
      {
        title: "Deploy & Run",
        subheading:
          "Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget,and required skill sets to see how we can help.",
        step: "6",
      },
     
    ];
  return (
    <div className="section-4 sm:px-24 sm:mt-20 px-8 py-12">
      <div className="heading  flex flex-col gap-12">
        <motion.h1
          className="font-light sm:text-4xl text-3xl"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-semibold">How Marketing</span> Works Step by
          Step flow
        </motion.h1>
        <motion.p
          className="leading-7"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
          Announce your brand to the right people, at the right time with
          innovative strategies that are built for your business and you.
        </motion.p>
      </div>
      <div className="flex flex-wrap sm:gap-12 gap-6 sm:mt-24 mt-12">
        {steps?.map((ele) => (
          <motion.div
            className="md:w-[45%]"
            key={ele?.step}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Step
              title={ele?.title}
              subheading={ele?.subheading}
              step={ele?.step}
            ></Step>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Section4
