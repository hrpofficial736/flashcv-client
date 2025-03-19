import React, { useEffect, useState } from "react";
import { TimelineCircles } from "./TimelineCircles";
import { motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../../stores/useResumeSectionIndexStore";

export const Timeline: React.FC = () => {
  const { currentIndex } = useResumeSectionIndexStore();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderWidth = isLargeScreen ? currentIndex * 20 : 10;
  const sliderHeight = isLargeScreen ? 10 : currentIndex * 20;

  return (
    <section className="relative max-lg:w-fit h-[500px] lg:h-10 max-lg:mt-10 lg:m-10 flex flex-col justify-center lg:flex-row items-center">
      <div className="h-full max-lg:w-1 lg:h-1 bg-orange-100 rounded-2xl absolute lg:top-1/2 lg:left-0 lg:right-0 lg:-translate-y-1/2"></div>

      <motion.div
        className="lg:h-1 bg-orange-400 rounded-2xl absolute"
        initial={{ width: 0, height: 0 }}
        animate={{ width: `${sliderWidth}%`, height: `${sliderHeight}%` }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        style={{
          left: isLargeScreen ? "0" : "50%",
          top: isLargeScreen ? "50%" : "0",
          transform: isLargeScreen ? "translateY(-50%)" : "translateX(-50%)",
        }}
      />

      <div className="flex flex-col h-full justify-between lg:flex-row w-full relative">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <TimelineCircles key={index} number={index + 1} />
        ))}
      </div>
    </section>
  );
};
