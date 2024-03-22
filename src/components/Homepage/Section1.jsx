import React from 'react'
import Explore from '../Explore/Explore';
import { motion } from 'framer-motion';
import { ExampleComponent } from '../TypeAnimation/TypeAnimation';
import "./Section1.scss"
// import HeroCard from "

const Section1 = () => {
  return (
    <div className="hero-banner flex  items-center px-24">
      <div className="left-details sm:w-[60%] flex flex-col text-3xl  ">
        {/* <div className="hero-heading">
        Marketing
      </div>heading */}
        <div className="title flex flex-col gap-2 justify-between  ">
          <div className="typewriter lg:text-6xl md:text-3xl  text-3xl font-bold text-mainred">
            <ExampleComponent></ExampleComponent>
          </div>
          <h1 className="lg:text-6xl md:text-3xl  text-3xl font-bold">
            <span className="font-bold  text-black stroke-red-600 with">
              With
            </span>{" "}
            Media Dynox<span className="text-mainred">.</span>
          </h1>
        </div>
        <div className="subheading w-[70%]">
          <div className="hero-subheading my-8 text-lg opacity-95 text-gray-600  ">
            Lorem ipsum is simply dummy text of printing and typesetting
            industry.
          </div>
          <Explore text="Explore"></Explore>
        </div>
      </div>
      <div className="right-images flex gap-6">
        <div className="left flex flex-col gap-6">
          <div>
            <img
              src="/public/Hero/hero1.jpg"
              alt=""
              className="h-[220px] w-[220px] rounded-lg shadow-lg object-cover"
            ></img>
          </div>
          <div>
            <img
              src="/public/Hero/hero3.jpg"
              alt=""
              className="h-[220px] w-[220px] rounded-lg shadow-lg object-cover"
            ></img>
          </div>
        </div>
        <div className="right mt-24">
          <img
            src="/public/Hero/hero2.jpg"
            alt=""
            className="h-[220px] w-[220px] rounded-lg shadow-lg object-cover"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Section1
