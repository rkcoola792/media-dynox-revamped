import React from "react";
import Explore from "../Explore/Explore";
import { motion } from "framer-motion";

const Step = ({ step, title, subheading }) => {
  return (
    <div className="step sm:flex-row flex flex-col gap-4 justify-start items-start relative ">
      <div className="sm:hidden md:flex left bg-red-200  hover:bg-mainred hover:text-white cursor-pointer h-12 w-12 mx-4  p-6 rounded-[50%] transition duration-450 ease-out hover:ease-in  items-center justify-center mt-1 hidden">
        <p className="font-semibold">{step}</p>
      </div>
      <motion.div
        className="flex flex-col gap-2"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="font-semibold">Step {step}</p>
        <h1 className="text-lg font-bold">{title}.</h1>
        <p className=" mt-4 leading-7 text-sm  text-gray-700">{subheading}</p>
      </motion.div>
    </div>
  );
};

export default Step;
