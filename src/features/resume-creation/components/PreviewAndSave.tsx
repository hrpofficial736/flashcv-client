import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { Main } from "./pdf/Main";

export const PreviewAndSave: React.FC = () => {
  const { currentIndex } = useResumeSectionIndexStore();
  return (
    <AnimatePresence mode="wait">
      {currentIndex === 5 && (
        <motion.section
          onSubmit={(e) => {
            e.preventDefault();
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
          className={`flex flex-col gap-y-5 font-poppins px-5 py-5 lg:m-10`}
        >
          <h1 className="lg:text-2xl text-lg font-semibold">
            Preview and Save
          </h1>
          <Main />
        </motion.section>
      )}
    </AnimatePresence>
  );
};
