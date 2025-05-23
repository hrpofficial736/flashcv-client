import React, { ReactElement, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {
  BasicInfo,
  Timeline,
  EducationSection,
  ExperienceSection,
  SaveAndDownload,
  ContactInfo,
  SkillsAndAchievements,
} from "../exports/components/exports";
import { useResumeSectionIndexStore } from "../../../stores/useResumeSectionIndexStore";
import { useUserStore } from "../../../stores/useUserStore";
import useUserService from "../../dashboard/services/useUserService";
import Logo from "../../../components/Logo";

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  const currentSectionToDisplay = useResumeSectionIndexStore((state) => state.currentIndex);
  const sectionsArray: Array<ReactElement> = [
    <BasicInfo />,
    <EducationSection />,
    <SkillsAndAchievements />,
    <ExperienceSection />,
    <ContactInfo />,
    <SaveAndDownload />,
  ];
  const { username } = useParams<{username: string}>();
    const { imageUrl } = useUserStore();
    const {fetchUserData} = useUserService();
    useEffect(() => {
      const token = localStorage.getItem("auth_access_token");
      if (!token) navigate("/login");
      fetchUserData(username!);
      if (!imageUrl) navigate("/login");
    }, [])
  return (
    <main className="px-3 py-2 font-poppins w-screen h-screen">
      <Logo />
      <div className="lg:px-10 lg:py-5 mt-5">
        <h1 className="lg:text-4xl text-xl font-bold">
          Let's build your resume!
        </h1>
        <p className="lg:text-xl text-sm font-light">
          Craft Your Future, One Section at a Time!
        </p>

        <div className="flex lg:flex-col">
          <Timeline />
          {sectionsArray[currentSectionToDisplay]}
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
