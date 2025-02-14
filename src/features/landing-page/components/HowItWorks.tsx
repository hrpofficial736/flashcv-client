import React from "react";
import { motion } from "motion/react";
import {
  AIImage,
  Templates,
  Editing,
  PdfLogo,
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
      className="px-10 py-5 mt-20 mx-2 bg-white/40 h-[650px] rounded-2xl column-center-flex gap-y-5"
    >
      <h1 className="text-center font-poppins text-black text-4xl font-semibold">
        How It Works
      </h1>
      <h1 className="text-center w-[800px] font-poppins text-black/60 text-base font-medium">
        Creating a standout resume has never been easier! Follow these simple
        steps and let FlashCV generate a job-winning resume for you in minutes.
      </h1>
      <div className="w-[60%] h-[90%] gap-5 grid grid-rows-2 grid-cols-2">
        <WorkingGridTile
          image={AIImage}
          text="Step 1: Enter Your Details"
          caption="Manual input or AI-assisted auto-fill suggestions."
        />
        <WorkingGridTile
          image={Templates}
          text="Step 2: Choose a Template"
          caption="Select from professional resume designs."
        />
        <WorkingGridTile
          image={Editing}
          text="Step 3: AI Enhances Your Resume"
          caption="AI suggests work experience descriptions, job titles, skills, and summary."
        />
        <WorkingGridTile
          image={PdfLogo}
          text="Step 4: Download & Apply"
          caption="Instantly download your resume as a PDF and start applying."
        />
      </div>
    </motion.div>
  );
};
