import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'

const ProgressBar = () => {
      const { scrollYProgress } = useScroll();
      const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
      });
  return (
    <div>
      <motion.div className="progress-bar z-30" style={{ scaleX }} />
    </div>
  );
}

export default ProgressBar
