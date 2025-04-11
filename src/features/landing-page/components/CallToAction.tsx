import React from "react";
import { UniversalButton } from "../../../components/UniversalButton";
import { useNavigate } from "react-router";

export const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-2 px-7 mb-12 mx-auto rounded-lg flex flex-col md:flex-row lg:gap-x-40 md:items-center justify-center">
      <div>
        <h1 className="text-lg font-poppins text-black lg:text-2xl font-semibold">
          Start Your Resume in Seconds!
        </h1>
        <h1 className="text-zinc-600 text-sm max-lg:max-w-[450px] font-poppins mb-3">
          Join thousands of professionals using FlashCV to create stunning
          resumes effortlessly.
        </h1>
      </div>
      <UniversalButton text="Get started" onPressed={() => {
        navigate("/login");
      }} />
    </div>
  );
};
