import React, { useEffect, useState } from "react";
import {LoginComponent, ImageSection} from "../exports/components/exports";
import { useNavigate } from "react-router";
import useUserService from "../../dashboard/services/useUserService";
import { useUserStore } from "../../../stores/useUserStore";

export const LoginPage: React.FC = () => {
  const resumeCount = useUserStore((state) => state.resumeCount);
  const [responsive, setResponsive] = useState<boolean>(window.innerWidth < 1024);
    useEffect(() => {
      const handleResize = () => setResponsive(window.innerWidth < 1024);
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, [])
   const [hideImages, setHideImages] = useState<boolean>(responsive);
    const navigate = useNavigate();
    const handleCallback = () => {
      setHideImages(true);
    }
  const { fetchUserData } = useUserService();
  useEffect(() => {
    const token = localStorage.getItem("auth_access_token");
    const username = localStorage.getItem("username");
    if (username) fetchUserData(username!);
    if (token && username) {
      console.log(token, username, resumeCount);
      
      resumeCount! > 0
      ? navigate(`/${username}/dashboard`)
      : navigate(`/${username}/build-resume`);
    }
  }, []);
  return (
    <main className="w-screen h-screen flex">
      <LoginComponent callback={handleCallback} />
      {(!responsive && !hideImages) && <ImageSection />}
    </main>
  );
};
