import React from "react";
import { UniversalButton } from "../../../components/UniversalButton";
import { Resume1, Resume2, Resume3 } from "../../../exports/assets/exports";

export const CallToAction: React.FC = () => {
  return (
    <main className="rounded-2xl px-8 py-5 mt-10 lg:mt-20 w-[90%] mx-auto bg-gradient-to-l from-orange-100 lg:from-orange-50 to-orange-300 lg:px-10 lg:py-5 font-poppins flex flex-col-reverse lg:flex-row gap-y-10 lg:flex items-center justify-between">
      <div>
        <h1 className="text-xl font-poppins text-black lg:text-2xl font-semibold">
          Start Your Resume in Seconds!
        </h1>
        <h1 className="lg:w-[400px] font-poppins text-black/60 lg:text-base font-medium">
          Join thousands of professionals using FlashCV to create stunning
          resumes effortlessly.
        </h1>
        <UniversalButton text="Generate Resume" />
      </div>
      <div className="flex">
        <img src={Resume1} className="w-24 rounded-xl -rotate-12" />
        <img src={Resume2} className="w-24 rounded-xl -rotate-12" />
        <img src={Resume3} className="w-24 rounded-xl -rotate-12" />
      </div>
    </main>
  );
};
