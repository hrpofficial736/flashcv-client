import React, { useEffect } from "react";
import getSession from "../../../utils/getters/getSession";
import { useNavigate } from "react-router";
import { Logo } from "../../../exports/assets/exports";
import { FirstSection, Timeline } from "../exports/components/exports";

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function checkForSession() {
      const session = await getSession();
      if (!session) navigate("/login");
    }
    checkForSession();
  }, []);
  return (
    <main className="px-3 py-2 font-poppins w-screen h-screen">
      <img src={Logo} className="w-36 h-10" />
      <div className="h-full px-10 py-5 border border-black mt-5">
        <h1 className="text-4xl font-bold">Let's build your resume!</h1>
        <p className="text-xl font-light">
          Craft Your Future, One Section at a Time!
        </p>
        <Timeline />
        <FirstSection />
      </div>
    </main>
  );
};

export default ResumePage;
