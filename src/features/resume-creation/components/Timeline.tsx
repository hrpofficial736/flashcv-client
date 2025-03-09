import React from "react";
import { TimelineCircles } from "./TimelineCircles";
import { motion } from "motion/react";

export const Timeline: React.FC<{ currentNumber: number }> = ({
  currentNumber,
}) => {
  return (
    <motion.section className="w-[90%] h-1 bg-orange-400 rounded-2xl m-10 flex items-center justify-between">
      {[0, 1, 2, 3, 4, 5].map((_, index) => {
        return <TimelineCircles number={index + 1} />;
      })}
    </motion.section>
  );
};
