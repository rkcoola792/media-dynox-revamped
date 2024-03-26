import React from "react";
import Explore from "../Explore/Explore";
import { motion } from "framer-motion";
import { ExampleComponent } from "../TypeAnimation/TypeAnimation";
import "./Section1.scss";
// import HeroCard from "
import { useState, useEffect } from "react";
const Section1 = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      setCirclePosition({ x: scrollY, y: scrollY });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hero-banner sm:flex sm:flex-row sm:items-center lg:px-24 px-8 sm:relative flex flex-col items-center text-center sm:text-left pt-12 sm:pt-0">
      <div className="left-details sm:w-[60%] flex flex-col text-3xl  ">
        <div className="title flex flex-col gap-2 justify-between ">
          <div className="typewriter lg:text-6xl md:text-5xl sm:text-4xl  text-3xl font-bold text-mainred">
            <ExampleComponent></ExampleComponent>
          </div>
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl  text-3xl font-bold">
            <span className="font-bold  text-black stroke-red-600 with">
              With
            </span>{" "}
            Media Dynox<span className="text-mainred">.</span>
          </h1>
        </div>
        <div className="subheading sm:w-[70%] w-full ">
          <div className="hero-subheading my-8 text-lg opacity-95 text-gray-600 text-center sm:text-left ">
            Lorem ipsum is simply dummy text of printing and typesetting
            industry.
          </div>
          <div className="ml-[32%] sm:ml-0">
            <Explore text="Explore"></Explore>
          </div>
        </div>
      </div>
      <div className="right-images flex gap-6 z-30 mt-12">
        <div className="left flex flex-col gap-6">
          <div>
            <img
              src="/public/Hero/hero1.jpg"
              alt=""
              className="lg:h-[220px] lg:w-[220px] sm:h-[150px] sm:w-[150px] w-[150px] h-[150px] rounded-lg shadow-lg object-cover"
            ></img>
          </div>
          <div>
            <img
              src="/public/Hero/hero3.jpg"
              alt=""
              className="lg:h-[220px] lg:w-[220px] sm:h-[150px] sm:w-[150px] w-[150px] h-[150px] rounded-lg shadow-lg object-cover"
            ></img>
          </div>
        </div>
        <div className="right mt-24">
          <img
            src="/public/Hero/hero2.jpg"
            alt=""
            className="lg:h-[220px] lg:w-[220px] sm:h-[150px] sm:w-[150px] w-[150px] h-[150px]  rounded-lg shadow-lg object-cover"
          ></img>
        </div>
      </div>

      <div
        className="circle lg:w-[90%] lg:h-[800px] h-[800px] w-[100%] lg:ml-28 md:mt-20 md:ml-12"
        style={{
          position: "absolute",
          // margin: "0 0 0 10%",
          zIndex: 20,
        }}
      >
        <div
          className={`circle-actual lg:w-[310px] lg:h-[310px] md:w-[200px] md:h-[200px] `}
          style={{
            position: "absolute",
            top: circlePosition.y + 190 + "px",
            right: circlePosition.x + 300 + "px",
            backgroundColor: "red",
            borderRadius: "50%",
            opacity: "50%",
          }}
        />
      </div>

      <div className="mobile-circle sm:hidden bg-red-400 w-60 h-60 rounded-[50%] absolute bottom-32"></div>
    </div>
  );
};

export default Section1;
