import React from "react";
import { UniversalButton } from "../../../components/UniversalButton";

export const CallToAction: React.FC = () => {
  return (
      <div className="py-2 px-7 mb-12 bg-white rounded-lg flex flex-col justify-center">
        <h1 className="text-lg font-poppins text-black lg:text-2xl font-semibold">
          Start Your Resume in Seconds!
        </h1>
        <h1 className="text-zinc-600 text-sm font-poppins mb-3">
          Join thousands of professionals using FlashCV to create stunning
          resumes effortlessly.
        </h1>
        <UniversalButton text="Generate Resume" />
      </div>
  );
};
