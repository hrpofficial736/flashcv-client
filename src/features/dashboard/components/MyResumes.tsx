import React, { useEffect, useState } from "react";
import { ResumeComponent } from "./ResumeComponent";
import { FaPlus } from "react-icons/fa6";
import { useUserStore } from "../../../stores/useUserStore";
import { useNavigate, useParams } from "react-router";
import { Loader } from "../../../components/Loader";

export const MyResumes: React.FC = () => {
  const resumes = useUserStore((state) => state.resumes);
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [responsive, setResponsive] = useState<boolean>(
    window.innerWidth < 400
  );

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);
  return (
    <div className="flex flex-col w-[90%] gap-y-5 overflow-y-scroll no-scrollbar md:w-[50%] h-[90%] px-3 py-3">
      <div className="flex justify-between">
        <div>
          <h1 className="font-poppins text-lg md:text-xl font-medium flex flex-col justify-center">
            My Resumes{" "}
            <p className="text-sm font-light">
              Scroll to bottom to see all resumes
            </p>
          </h1>
        </div>

        {!responsive && (
          <button
            onClick={() => navigate(`/${username}/build-resume`)}
            className="font-poppins max-h-[50px] max-md:text-xs px-2 cursor-pointer hover:bg-orange-300 transition-colors duration-200 font-bold text-white bg-orange-400 flex items-center gap-x-3 rounded-xl"
          >
            <FaPlus /> Create a resume
          </button>
        )}
      </div>
      {resumes?.length! > 0 ? (
        <div className="flex flex-col gap-y-2 overflow-y-scroll no-scrollbar">
          {resumes?.map((resume, index) => {
            return (
              <ResumeComponent
                key={index}
                title={resume.title}
                url={resume.url}
              />
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
      {responsive && (
        <button
          onClick={() => navigate(`/${username}/build-resume`)}
          className="font-poppins px-2 py-2 cursor-pointer hover:bg-orange-300 transition-colors duration-200 font-bold text-white bg-orange-400 row-center-flex gap-x-3 rounded-xl"
        >
          <FaPlus /> Create a Resume
        </button>
      )}
    </div>
  );
};
