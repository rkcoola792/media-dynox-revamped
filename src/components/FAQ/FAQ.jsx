import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQ = ({  heading, subheading, img }) => {

  return (
    <div className="FAQ shadow-2xl">
      <div
        className="relative bg-transparent rounded-lg cursor-pointer overflow-hidden"
      >
        <img
          className="w-[600px] h-[300px] z-10 object-cover rounded-lg hover:scale-110 transition duration-200 ease-linear hover:ease-linear"
          src={img}
          alt=""
        />
        <div className="absolute text-white z-20 top-8 left-4 flex flex-col gap-4 px-4">
          <h1 className="text-white font-semibold text-2xl ">{heading}</h1>
          <h1 className="text-white font-semibold text-sm">{subheading}</h1>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
