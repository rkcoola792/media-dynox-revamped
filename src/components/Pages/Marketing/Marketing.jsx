import React from 'react'
import { Section1 } from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

import Section7 from './Section7'
import Section10 from './Section9'
import Section8 from '../../Homepage/Section8'
import {motion} from "framer-motion"
import MoveTop from '../../Movetop/Movetop'
import Section9 from '../../Homepage/Section9'

const Marketing = () => {
  return (
    <div>
      <Section1 heading="Marketing" subheading="that we offer" first="Home" second="Our Services" third="Marketing"></Section1>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section2></Section2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section3 first="Social Media" second="Paid Media" third="Digital Marketing" fourth="SEO"></Section3>
      </motion.div>
 
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section4></Section4>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section5></Section5>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section6></Section6>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section9 heading="Your Growth," subheading="Our way"></Section9>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Section7></Section7>
      </motion.div>
      <MoveTop></MoveTop>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div className="bg-slate-100 p-2 lg:p-0 mt-12 lg:mt-0">
          <Section8></Section8>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >

      <Section10></Section10>
      </motion.div>
    </div>
  );
}

export default Marketing
