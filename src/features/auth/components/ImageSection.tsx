import React from "react";

import { motion } from "motion/react";

export const ImageSection: React.FC = () => {
  return (
    <section className="w-[40%] h-full overflow-hidden row-center-flex">
      <div className="relative overflow-hidden w-1/3 h-full">
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: "-50%",
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex h-[200%] w-full flex-col absolute"
        >
          {/* <img src={Resume1} className="w-60" />
          <img src={Resume2} className="w-60" />
          <img src={Resume3} className="w-60" />

          <img src={Resume1} className="w-60" />
          <img src={Resume2} className="w-60" />
          <img src={Resume3} className="w-60" /> */}
        </motion.div>
      </div>

      <div className="relative overflow-hidden w-1/3 h-full">
        <motion.div
          animate={{ y: ["-100%", "0%"] }}
          transition={{
            duration: 55,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex h-[100%] w-full flex-col absolute"
        >
          {/* <img src={Resume3} className="w-60" />
          <img src={Resume4} className="w-60" />
          <img src={Resume2} className="w-60" />

          <img src={Resume3} className="w-60" />
          <img src={Resume4} className="w-60" />
          <img src={Resume2} className="w-60" /> */}
        </motion.div>
      </div>
        <div className="relative overflow-hidden w-1/3 h-full">
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: "-50%",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex h-[200%] w-full flex-col absolute"
      >
        {/* <img src={Resume2} className="w-60" />
        <img src={Resume1} className="w-60" />
        <img src={Resume4} className="w-60" />

        <img src={Resume2} className="w-60" />
        <img src={Resume1} className="w-60" />
        <img src={Resume4} className="w-60" /> */}
      </motion.div>
      </div>
    </section>
  );
};
