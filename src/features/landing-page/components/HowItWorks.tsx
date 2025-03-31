import React from "react";
import { motion } from "motion/react";
import {
  Info, Magic, Preview, Download
} from "../exports/assets/exports";
import { WorkingGridTile } from "./WorkingGridTile";

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
      className="w-full px-3 py-3 lg:px-10 lg:py-5 mt-10 lg:mt-20 bg-white/40 lg:h-[650px] rounded-2xl column-center-flex gap-y-2 lg:gap-y-3"
    >
      <h1 className="text-center text-2xl font-poppins text-black lg:text-4xl font-semibold">
        How It Works
      </h1>
      <h1 className="text-center px-2 py-2 text-sm lg:w-[800px] font-poppins text-black/60 lg:text-base font-medium">
        Creating a standout resume has never been easier! Follow these simple
        steps and let FlashCV generate a job-winning resume for you in minutes.
      </h1>
      <div className="w-[90%] lg:w-[60%] lg:h-[90%] lg:gap-5 flex flex-col lg:flex-row gap-y-4 lg:grid grid-rows-2 grid-cols-2">
        <WorkingGridTile
          image={Info}
          text="Step 1: Enter Your Details"
          caption="Manual input or AI-assisted auto-fill suggestions."
        />
        <WorkingGridTile
          image={Magic}
          text="Step 2: AI Enhances Your Resume"
          caption="AI suggests work experience descriptions, job titles, skills, and summary."
        />
        <WorkingGridTile
          image={Preview}
          text="Step 3: Get a preview of your Resume"
          caption="See a sneak peek of your resume before finalizing!"
        />
        <WorkingGridTile
          image={Download}
          text="Step 4: Download & Apply"
          caption="Instantly download your resume as a PDF and start applying."
        />
      </div>
    </motion.div>
  );
};
