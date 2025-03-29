import React from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { ProceedButton } from "./common/ProceedButton";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { Skills, Achievements } from "../exports/components/exports";

export const SkillsAndAchievements: React.FC = () => {
  const { currentIndex, decrementCurrentIndex, incrementCurrentIndex } =
    useResumeSectionIndexStore();

  return (
    <AnimatePresence mode="wait">
      {currentIndex === 2 && (
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            incrementCurrentIndex();
          }}
          key={"education-section"}
          initial={{
            x: 300,
          }}
          animate={{
            x: 0,
          }}
          transition={{ duration: 0.5 }}
          exit={{
            x: -200,
          }}
          className={`flex flex-col gap-y-5 w-[80%] lg:w-[90%] h-[60%] font-poppins px-5 py-5 lg:m-10`}
        >
          <h1 className="lg:text-2xl text-xl font-semibold">
            Skills and Achievements
          </h1>
          <div className="flex max-lg:flex-col max-lg:gap-y-20 lg:gap-x-40 px-3 py-2">
            <Skills />
            <Achievements />
          </div>
          <div className="flex max-lg:flex-col max-lg:gap-y-4 justify-center lg:justify-end gap-x-2 mt-3">
            <SecondaryButton
              text="Previous Step"
              icon={<FaRegArrowAltCircleLeft />}
              onPressed={decrementCurrentIndex}
            />
            <ProceedButton icon={<FaRegArrowAltCircleRight />} text="Proceed" />
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
};
