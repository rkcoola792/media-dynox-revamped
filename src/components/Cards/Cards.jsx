import React, { useState } from "react";
import Explore from "../Explore/Explore";
import { motion } from "framer-motion";


const Cards = ({ title, first, second, third, fourth, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className=" w-[300px]  xl:w-[250px] md:w-[350px]  flex flex-col  gap-6 border border-gray-300 px-8 py-8 cursor-pointer hover:bg-mainred hover:text-white transition duration-150 ease-out hover:ease-linear rounded-lg  "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ y: 0 }}
      whileHover={{ y: -15, boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)" }}
      transition={{ duration: 0.1 }}
    >
      <div className="gap-1 items-start">
        <span className=" text-3xl sm:text-xl lg:text-2xl font-semibold ">
          {title}
        </span>
        <span
          className={`ml-1 text-${
            hover ? "white" : "mainred"
          }  text-xl font-extrabold `}
        >
          .
        </span>
      </div>

      <div className="subheading flex flex-col gap-4">
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold">
          {first}
        </h3>
        <hr />
        <h3 className="tracking-wide  sm:text-sm lg:text-base font-semibold ">
          {second}
        </h3>
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold ">
          {third}
        </h3>
        <hr />
        <h3 className="tracking-wide sm:text-sm lg:text-base font-semibold ">
          {fourth}
        </h3>
      </div>
      <div className="">
        <Explore text="Read More" color="" hovercolor="white"></Explore>
      </div>
    </motion.div>
  );
};

export default Cards;
