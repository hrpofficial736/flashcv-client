import React from "react";
import { Resume1, Resume2, Resume3, Resume4 } from "../exports/assets/exports";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <main className="font-poppins relative px-40 py-10 flex flex-col gap-y-3 justify-center items-center w-screen h-[100vh] bg-gradient-to-b from-white to-orange-200 rounded-bl-3xl rounded-br-3xl">
      <div className="z-20">
        <h1 className="text-7xl font-bold font-poppins text-black">
          Create Your Resume in a Flash!
        </h1>
        <h1 className="text-2xl font-light font-poppins text-black text-center">
          Effortlessly create a professional, job-winning resume with AI-powered
          suggestions, stunning templates, and instant PDF downloads – all in
          just a few clicks!
        </h1>
      </div>
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          duration: 2,
        }}
        className="z-10"
      >
        <img
          src={Resume1}
          width={150}
          height={150}
          className="absolute top-10 left-20"
        />
        <img
          src={Resume2}
          width={150}
          height={150}
          className="absolute top-10 right-20"
        />
        <img
          src={Resume3}
          width={150}
          height={150}
          className="absolute bottom-10 left-20"
        />
        <img
          src={Resume4}
          width={150}
          height={150}
          className="absolute bottom-10 right-20"
        />
      </motion.div>
    </main>
  );
};
