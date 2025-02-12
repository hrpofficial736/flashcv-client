import React from "react";
import { motion } from "motion/react";

export const HowItWorks: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      className="px-10 py-5 mt-10 mx-2 bg-white/40 h-[550px] border border-black rounded-2xl column-center-flex gap-y-5"
    >
      <h1 className="text-center font-poppins text-black text-4xl font-semibold">
        How It Works
      </h1>
    </motion.div>
  );
};
