import React, { useEffect, useState } from "react";
import {ImageSection, RegisterComponent} from "../exports/components/exports";

import { useNavigate } from "react-router";
import { useUserStore } from "../../../stores/useUserStore";
import useUserService from "../../dashboard/services/useUserService";

export const RegisterPage: React.FC = () => {
  const { imageUrl, username } = useUserStore();
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
    if (username) fetchUserData(username);
    if (token && imageUrl && username) navigate(`/${username}/dashboard`);
  }, []);
  return (
    <main className="w-screen h-screen flex">
      <RegisterComponent callback={handleCallback} />
      {(!responsive && !hideImages) && <ImageSection />}
    </main>
  );
};
