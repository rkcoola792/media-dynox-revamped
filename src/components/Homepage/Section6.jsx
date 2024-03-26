import React, { useRef } from "react";
import "./Section6.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import BreakThrough from "../BreakThrough/BreakThrough";

const items = [
  {
    step: "1",
    heading: "Audit",
    subheading:
      "A 360° study of the project that gives equal consideration to your and your product’s end users’ expectations.",
  },
    {
      step: "2",
      heading: "Enact",
      subheading:
        "Getting hands-on with the plans to develop a stellar product that stands the test of time.",
    },
    {
      step: "3",
      heading: "  Brush Up",
      subheading:
        "Regular maintenance checks and amendments to eliminate possible hurdles and polish the existing product to fulfill the scope of improvement.",
    },
    {
      step: "4",
      heading: "Brainstorm",
      subheading:
        "Aligning the goals, resources, and market trends in a harmonious symphony for a smooth development journey.",
    },
    {
      step: "5",
      heading: "Launch & Broadcast",
      subheading:
        "Sharing the final product with end users, evaluating user behavior, and monitoring progress.",
    },
    {
      step: "6",
      heading: "Nourish",
      subheading:
        "Ensuring the product works like a well-oiled machine by conducting regular maintenance.",
    },
];

// 

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0 0"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: "100",
    damping: "30",
  });

  return (
    <div className="portfolio h-full bg-white px-24 pb-8" ref={ref}>
      <div className="progress z-40 bg-white ">
        <h1 className="text-3xl sm:text-4xl font-normal bg-white pt-12">
          <span className="font-semibold">Break Through the Boring,</span> One
          Step At A Time
        </h1>
        <p className="text-sm  bg-white py-8   ">
          Grand experiences can be divided into multiple small ones. Our
          simplified 6-step procedure ensures that your business becomes a grand
          experience for you.
        </p>
        <motion.div className="progressBar " style={{ scaleX }}></motion.div>
      </div>
      <div className=" bottom-div flex flex-wrap justify-center mt-24 gap-12 ml-12 ">
        {items.map((item) => (
          <div className="w-[45%]">
            <BreakThrough
              heading={item.heading}
              subheading={item.subheading}
              step={item.step}
            ></BreakThrough>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
