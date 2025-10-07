// src/components/ScrollSlideUp.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollSlideUp = ({ children, offset = 0 }) => {
  const { scrollY } = useScroll();

  // Move the section up as we scroll
  const y = useTransform(scrollY, [0 + offset, 800 + offset], [100, 0]);

  return (
    <motion.div style={{ y }} className="w-full">
      {children}
    </motion.div>
  );
};

export default ScrollSlideUp;
