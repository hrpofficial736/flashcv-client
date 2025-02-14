import React from "react";
import { UniversalButton } from "../../../components/UniversalButton";
import { Resume1, Resume2, Resume3 } from "../exports/assets/exports";

export const CallToAction: React.FC = () => {
  return (
    <main className="rounded-2xl mt-20 w-[90%] mx-auto bg-gradient-to-l from-orange-50 to-orange-300 px-10 py-5 font-poppins flex items-center justify-between">
      <div>
        <h1 className="font-poppins text-black text-2xl font-semibold">
          Start Your Resume in Seconds!
        </h1>
        <h1 className="w-[400px] font-poppins text-black/60 text-base font-medium">
          Join thousands of professionals using FlashCV to create stunning
          resumes effortlessly.
        </h1>
        <UniversalButton text="Generate Resume" />
      </div>
      <div className="flex">
        <img
          src={Resume1}
          width={150}
          height={150}
          className="rounded-xl -rotate-12"
        />
        <img
          src={Resume2}
          width={150}
          height={150}
          className="rounded-xl -rotate-12"
        />
        <img
          src={Resume3}
          width={150}
          height={150}
          className="rounded-xl -rotate-12"
        />
      </div>
    </main>
  );
};
