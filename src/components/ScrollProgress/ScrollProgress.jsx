import { motion, useScroll } from 'framer-motion'
import React from 'react'
import "./ScrollProgress.scss"
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    console.log("scroll y progress",scrollYProgress)
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className='progress-bar'/>
  )
}

export default ScrollProgress
