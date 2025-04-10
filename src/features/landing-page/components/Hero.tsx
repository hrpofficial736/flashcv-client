import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../../components/Logo";
import { UniversalButton } from "../../../components/UniversalButton";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { CiLocationArrow1 } from "react-icons/ci";
import HeroImage from "../../../assets/hero-image.png";
import HeroImageSecond from "../../../assets/hero-image-2.png";
import HeroImageThird from "../../../assets/hero-image-3.png";


export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen min-h-screen md:min-h-[60%] bg-gradient-to-b rounded-b-xl from-orange-50 to-white">
      <Logo />
      <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-y-5 min-h-[80vh]">
        <div className="column-center-flex gap-y-2 p-2">
          <h1 className="font-bold font-poppins text-2xl md:text-5xl text-center">
            Create your resume in a Fla🗲h
          </h1>
          <p className="text-zinc-500 font-poppins text-sm md:text-xl text-center mb-3">
            Effortlessly create a professional, job winning resume with
            AI-powered suggestions and instant PDF downloads, all in just a few
            clicks!
          </p>
          {localStorage.getItem("auth_access_token") ? (
            <SecondaryButton
              icon={<CiLocationArrow1 className="w-5 h-5" />}
              text="Go to Dashboard"
            />
          ) : (
            <UniversalButton text="Get started for free" />
          )}
        </div>

        {/* Image Block */}
        <div className="flex justify-center relative min-h-[500px] w-full overflow-visible z-10">
          <img
            src={HeroImage}
            className="w-40 h-60 md:w-72 md:h-96 border-2 border-black rounded-lg absolute top-5 left-1/2 transform -translate-x-[80%]"
          />
          <img
            src={HeroImageThird}
            className="w-40 h-60 md:w-72 md:h-96 border border-black rounded-lg absolute top-12 left-1/2 transform -translate-x-1/2"
          />
          <img
            src={HeroImageSecond}
            className="w-40 h-60 md:w-72 md:h-96 border-2 border-black rounded-lg absolute top-20 left-1/2 transform -translate-x-[20%]"
          />
        </div>
      </div>
    </section>
  );
};
