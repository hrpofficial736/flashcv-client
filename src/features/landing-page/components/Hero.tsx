import React from "react";
import { useNavigate } from "react-router";
import Logo from "../../../components/Logo";
import { UniversalButton } from "../../../components/UniversalButton";
import { SecondaryButton } from "../../../components/SecondaryButton";
import { CiLocationArrow1 } from "react-icons/ci";
import ImageStack from "./ImageStack";



export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-screen h-max mb-10 bg-gradient-to-b rounded-b-xl from-orange-50 to-white">
      <Logo />
      <div className="md:flex md:flex-col md:items-center md:pt-20 md:gap-y-8 md:h-[80%] lg:h-[70%]">
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
              onPressed={() => {
                const username = localStorage.getItem("username");
                if (username) navigate(`/${username}/dashboard`);
              }}
            />
          ) : (
            <UniversalButton onPressed={() => {
              navigate("/login");
            }} text="Get started for free" />
          )}
        </div>
        
          <ImageStack />
      </div>
    </section>
  );
};
