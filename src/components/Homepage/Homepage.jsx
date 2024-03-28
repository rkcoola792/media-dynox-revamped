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
import Section6 from './Section6'
import Section4 from './Section4'

import MoveTop from '../Movetop/Movetop'
import MobileHeaderDropdown from '../MobileHeaderDropdown/MobileHeaderDropdown'
import MobileHeaderForCompany from '../MobileHeaderDropdown/MobileHeaderForCompany'

// import Circle from '../Test/Test'
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

      {/* <Section1></Section1>
      <MoveTop></MoveTop>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <section>
        <Section6></Section6>
      </section>
      <Section8></Section8>
      <Section9
        heading="Lets discuss"
        subheading="make something cool
        together"
      ></Section9> */}
      {/* <MobileHeaderDropdown></MobileHeaderDropdown>
      <MobileHeaderForCompany></MobileHeaderForCompany> */}
      {/* <Circle></Circle> */}
    </div>
  );
}

export default Homepage
