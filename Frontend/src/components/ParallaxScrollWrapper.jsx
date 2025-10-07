// src/components/ParallaxScrollWrapper.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxScrollWrapper = ({ children, start = 0, end = 400 }) => {
  const { scrollY } = useScroll();

  // Adjust the translateY range — higher negative value = more upward motion
  const y = useTransform(scrollY, [start, end], [0, -150]);

  return (
    <motion.div style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
};

export default ParallaxScrollWrapper;
