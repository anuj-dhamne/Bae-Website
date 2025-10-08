import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ParallaxSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.section>
  );
}
