import React from "react";
import {
  AIImage,
  User,
  Preview,
  Download,
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
        suggestions, stunning professional User, real-time editing, and
        instant PDF downloads – ensuring you create a job-winning resume in
        minutes!
      </p>
      <div className="column-center-flex gap-y-3 p-3">
        <FeaturesTile
          image={AIImage}
          text="AI Powered suggestions"
          caption="Get smart content recommendations for a polished resume."
        />
        <FeaturesTile
          image={Preview}
          text="Preview before Download"
          caption="Sneak peek of your resume before downloading it."
        />
        <FeaturesTile
          image={Download}
          text="Instant PDF Download"
          caption="Download your resume as a polished PDF with a single click."
        />
        <FeaturesTile
          image={User}
          text="Simple Dashboard"
          caption="Manage your account info and view your resumes on the dashboard."
        />
      </div>
    </motion.div>
  );
};
