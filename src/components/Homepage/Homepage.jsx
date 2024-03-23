import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section9 from './Section9'
import Section8 from './Section8'
import Section5 from './Section5'
import ProgressBar from '../ProgressBar/ProgressBar'
import { motion, useScroll, useSpring } from "framer-motion";
import "./progressbar.scss"
const Homepage = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
  return (
    <div className="homepage">
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <ProgressBar></ProgressBar> */}
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section5></Section5>
      <Section8></Section8>
      <Section9></Section9>
    </div>
  );
}

export default Homepage
