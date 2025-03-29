import React, { useEffect } from "react";
import { Logo } from "../../../exports/assets/exports";
import { MyResumes } from "../components/MyResumes";
import { AccountInfo } from "../components/AccountInfo";
import { useNavigate, useParams } from "react-router";
import useUserService from "../services/useUserService";
import { useUserStore } from "../../../stores/useUserStore";

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { username } = useParams<{username: string}>();
  const { imageUrl } = useUserStore();
  const {fetchUserData} = useUserService();
  useEffect(() => {
    const token = localStorage.getItem("auth_access_token");
    fetchUserData(username!);
    if (!token && !imageUrl) navigate("/login");
  }, [])
  return (
    <div className="md:px-3 px-3 py-2 w-screen h-screen">
      <img
        src={Logo}
        className={`w-[140px] h-[40px]`}
      />
      <section className="h-[70%] mt-10 md:mx-10 md:px-3 py-3">
        <h1 className="font-poppins text-2xl md:text-3xl font-semibold">Dashboard</h1>
        <div className="flex flex-col gap-y-5 md:flex-row items-center mt-5 md:gap-x-10 md:px-2 py-2 md:h-[80%]">
          <AccountInfo />
          <span className="w-[0.5px] h-[90%] bg-zinc-300"></span>
          <MyResumes />
        </div>
      </section>
    </div>
  );
};
