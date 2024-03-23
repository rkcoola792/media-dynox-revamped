import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { motion } from "framer-motion";
import Explore from "../Explore/Explore";

const Section2 = () => {
  return (
    <div className="relative ">
      <div className="bg-gray-100 sm:h-[500px] px-8  w-screen sm:flex sm:flex-row  lg:gap-12 sm:gap-6  md:gap-8 lg:px-24 sm:px-12  py-24 sm:py-0 flex flex-col items-center justify-center gap-8 mt-20 z-10  ">
        <motion.div
          className=" py-4 px-2 circle bg-mainred lg:h-[330px] lg:w-[330px] sm:h-[230px] sm:w-[230px] rounded-[50%] text-white flex justify-center items-center text-center hover:bg-[#222] h-[300px] w-[300px] transition duration-200 ease-linear hover:ease-linear cursor-pointer relative z-40 "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -15,
            boxShadow: "0px 30px 40px -13px rgba(0,0,0,0.65)",
          }}
          // transition={{ duration: 0.1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <motion.div
            className="sm:p-2 "
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="lg:text-2xl xl:text-3xl sm:text-lg z-30  p-6 px-8 text-2xl leading-9 ">
              <span className="font-bold">We are creators.</span> The
              masterminds behind{" "}
              <span className="font-bold">great innovations.</span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          className="mid-details flex items-start flex-col lg:gap-6 sm:gap-3  w-[300px] gap-4 z-40"
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="lg:text-3xl sm:text-2xl text-2xl">
            <span className="font-bold ">What</span> We Do
          </h1>
          <p className="lg:text-md lg:leading-8 sm:leading-7 leading-7">
            Announce your brand to the right people, at the right time with
            innovative strategies that are built for your business and you.
          </p>
          <div className="scale-110  sm:scale-100 sm:px-0">
            <Explore text="Explore"></Explore>
          </div>
        </motion.div>

        <motion.div
          className="right-details flex flex-col items-start lg:gap-6 sm:gap-3 sm:w-[300px] pl-4 gap-4 z-40
       "
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="lg:text-3xl sm:text-2xl text-2xl">
            <span className="font-bold ">How</span> We Do
          </h1>
          <p className="lg:text-md  lg:leading-8 sm:leading-7 xl:w-[350px] leading-7">
            Take your business to the next level, literally, with our digital
            development solutions that give your business the global stage.
          </p>
          <div className="scale-110 px- sm:scale-100 sm:px-0">
            <Explore text="Explore"></Explore>
          </div>
        </motion.div>
      </div>
      <div className="to-hide-circle bg-slate-100 h-1/2 w-full bottom-0  absolute z-20"></div>
    </div>
  );
};

export default Section2;
