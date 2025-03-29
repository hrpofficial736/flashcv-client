import React, { useEffect, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { useUserStore } from "../../../stores/useUserStore";
import { Loader } from "../../../components/Loader";
import { useNavigate } from "react-router";
import useAvatarPhoto from "../services/useAvatarPhoto";

export const AccountInfo: React.FC = () => {
  const navigate = useNavigate();
  const { getAvatar, highQualityAvatarUrl } = useAvatarPhoto();
  const [avatar, setAvatar] = useState<string>(getAvatar(highQualityAvatarUrl!));
  const [responsive, setResponsive] = useState<boolean>(window.innerWidth < 400);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 400);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth])
  useEffect(() => {
    if (highQualityAvatarUrl) {
      console.log(highQualityAvatarUrl);
      
      setAvatar(getAvatar(highQualityAvatarUrl));
    }
  }, [highQualityAvatarUrl]);

  const { name, email, resumeCount } = useUserStore();
  return (
    <div className="flex flex-col w-[90%] gap-y-9 md:w-[50%] h-[90%] px-3 py-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-xl font-poppins font-medium">
            Account Information
          </h1>
          
          <p className="font-poppins font-light text-xs md:text-sm">
            Manage your account details and subscription
          </p>
        </div>
        {!responsive && 
        <button
          onClick={() => {
            localStorage.removeItem("twitter_oauth_state");
            localStorage.removeItem("twitter_code_verifier");
            localStorage.removeItem("auth_access_token");
            navigate("/login");
          }}
          className={`font-poppins cursor-pointer px-2 py-2 hover:bg-orange-100 transition-colors duration-200 text-orange-400 rounded-xl bg-white row-center-flex gap-x-3`}
        >
          <CiLogout /> {!responsive && "Log Out"}
        </button>
}
      </div>

      <div className="column-center-flex">
        {avatar && name && email && resumeCount ? (
          <>
            <img
              src={avatar}
              referrerPolicy="no-referrer"
              className="rounded-full w-28 h-28 border-[4px] border-orange-400"
            />
            <h1 className="md:text-3xl text-2xl font-poppins font-semibold mt-3">
              {name}
            </h1>
            <p className="md:text-base text-sm font-normal">{email}</p>
            <p className="md:text-base text-sm font-normal">
              Total resumes created: {resumeCount}
            </p>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
