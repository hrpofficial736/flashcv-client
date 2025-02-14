import React from "react";
import { Resume1, Resume2, Resume3, Resume4 } from "../exports/assets/exports";
import { motion } from "motion/react";
import { UniversalButton } from "../../../components/UniversalButton";
import { FaRocket } from "react-icons/fa6";
import { Logo } from "../../../exports/assets/exports";

export const Hero: React.FC = () => {
  return (
    <main className="font-poppins relative px-3 py-3 lg:px-40 lg:py-10 flex flex-col items-center justify-end lg:column-center-flex gap-y-3 w-full h-[50%] lg:w-screen lg:h-[100vh] bg-gradient-to-b from-orange-50 to-orange-400 rounded-bl-3xl rounded-br-3xl">
      <img
        src={Logo}
        className="absolute top-2 left-2 lg:top-5 lg:left-10"
        width={window.innerWidth > 1024 ? 150 : 80}
        height={window.innerWidth > 1024 ? 150 : 80}
      />
      {/* <div className="z-20">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl lg:text-7xl font-bold font-poppins text-black text-center"
        >
          Create Your Resume in a Fla🗲h
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm lg:text-2xl font-light font-poppins text-black text-center"
        >
          Effortlessly create a professional, job-winning resume with AI-powered
          suggestions, stunning templates, and instant PDF downloads – all in
          just a few clicks!
        </motion.h1>
      </div>
      {window.innerWidth > 1024 && (
        <>
          <motion.img
            src={Resume1}
            width={150}
            height={150}
            className="absolute bottom-5 left-auto rounded-xl -rotate-12"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Optional delay for sequential animations
          />
          <motion.img
            src={Resume2}
            width={150}
            height={150}
            className="absolute top-10 right-20 rotate-6 rounded-xl"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Optional delay for sequential animations
          />
          <motion.img
            src={Resume3}
            width={150}
            height={150}
            className="absolute bottom-10 left-20 rotate-6 rounded-xl"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Optional delay for sequential animations
          />
          <motion.img
            src={Resume4}
            width={150}
            height={150}
            className="absolute bottom-10 right-20 -rotate-6 rounded-xl"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Optional delay for sequential animations
          />
        </>
      )}
      <UniversalButton text="Get Started" icon={<FaRocket />} /> */}
    </main>
  );
};
