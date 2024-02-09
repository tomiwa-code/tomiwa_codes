"use client";
import { motion } from "framer-motion";

const TomiwaLoader = () => {
  const variants = {
    animate: {
      scale: [0.9, 1, 0.9],
      transition: {
        ease: "easeInOut",
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate="animate"
      className="absolute inset-0 bg-white z-[80] flex items-center justify-center"
    >
      Let him cook
    </motion.div>
  );
};

export default TomiwaLoader;
