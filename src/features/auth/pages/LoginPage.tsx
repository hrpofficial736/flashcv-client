import React, { useEffect, useState } from "react";
import {LoginComponent, ImageSection} from "../exports/components/exports";
import { useNavigate } from "react-router";
import { useUserStore } from "../../../stores/useUserStore";

export const LoginPage: React.FC = () => {
  const {resumeCount, username} = useUserStore();
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
  useEffect(() => {
    const token = localStorage.getItem("auth_access_token");    
    if (token && username) {    
      resumeCount! > 0
      ? navigate(`/${username}/dashboard`)
      : navigate(`/${username}/build-resume`);
    }
  }, [username]);
  return (
    <main className="w-screen h-screen flex">
      <LoginComponent callback={handleCallback} />
      {(!responsive && !hideImages) && <ImageSection />}
    </main>
  );
};
