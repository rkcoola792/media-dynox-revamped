import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Section1 = () => {
  return (
    <div className="bg-slate-100 w-full flex justify-center items-center h-[350px] flex-col gap-8">
      <motion.h1
        className="sm:text-2xl lg:text-4xl text-3xl font-thin"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <span className="font-semibold">Marketing</span> that we offer
      </motion.h1>
      <motion.div
        className="flex gap-1  h-12 border-dotted  border-2 border-black px-8 py-4 justify-center items-center rounded-[30px] cursor-pointer"
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link to="/">
          <h1 className="text-sm font-semibold">Home</h1>
        </Link>
        <h1 className="text-sm text-gray-600 ">
          <ChevronRightIcon></ChevronRightIcon>
        </h1>
        <h1 className="text-sm font-semibold">Our Services</h1>
        <h1 className="text-sm text-gray-600">
          <ChevronRightIcon></ChevronRightIcon>
        </h1>
        <h1 className="text-mainred text-sm font-semibold">Marketing</h1>
      </motion.div>
    </div>
  );
};
