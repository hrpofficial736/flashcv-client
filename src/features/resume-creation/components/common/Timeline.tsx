import React from "react";
import { TimelineCircles } from "./TimelineCircles";
import { motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../../stores/useResumeSectionIndexStore";

export const Timeline: React.FC = () => {
  const { currentIndex } = useResumeSectionIndexStore();
  const sliderWidth = currentIndex * 20;

  return (
    <section className="relative h-10 m-10 flex items-center">
      <div className="h-1 bg-orange-100 rounded-2xl absolute top-1/2 left-0 right-0 -translate-y-1/2"></div>
      <motion.div
        className="h-1 bg-orange-400 rounded-2xl absolute"
        initial={{ width: 0 }}
        animate={{ width: `${sliderWidth}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />
      <div className="flex justify-between w-full relative">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <TimelineCircles key={index} number={index + 1} />
        ))}
      </div>
    </section>
  );
};
