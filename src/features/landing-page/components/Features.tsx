import React from "react";
import {
  AIImage,
  Templates,
  Editing,
  PdfLogo,
} from "../exports/assets/exports";
import { FeaturesTile } from "./FeaturesTile";
import { motion } from "motion/react";

export const Features: React.FC = () => {
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
      className="w-full px-3 py-2 lg:px-10 lg:py-5 mt-10 bg-white/40 lg:h-[550px] rounded-2xl column-center-flex gap-y-5"
    >
      <h1 className="text-center text-2xl font-poppins text-black lg:text-4xl font-semibold">
        Why FlashCV?
      </h1>

      <p className="text-center text-sm lg:w-[950px] font-poppins text-black/60 lg:text-base font-medium">
        FlashCV makes resume building effortless with AI-powered content
        suggestions, stunning professional templates, real-time editing, and
        instant PDF downloads – ensuring you create a job-winning resume in
        minutes!
      </p>
      <div className="w-[80%] h-[70%] mt-2 px-3 py-2 flex flex-col lg:flex-row gap-y-5 gap-x-5">
        <FeaturesTile
          image={AIImage}
          text="AI Powered suggestions"
          caption="Get smart content recommendations for a polished resume."
        />
        <FeaturesTile
          image={Templates}
          text="Beautiful Templates"
          caption="Choose from a variety of professional, modern designs."
        />
        <FeaturesTile
          image={Editing}
          text="Real-Time Editing"
          caption="Customize sections and see instant updates as you go."
        />
        <FeaturesTile
          image={PdfLogo}
          text="Instant PDF Download"
          caption="Download your resume as a polished PDF with a single click."
        />
      </div>
    </motion.div>
  );
};
