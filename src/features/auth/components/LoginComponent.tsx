import React, { useState } from "react";

import {
  FormButton,
  FormTextField,
  GoogleIcon,
  SocialButton,
} from "../../../exports/components/exports";
import { Link, useNavigate } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { useAuthService } from "../services/authService";
import { Loader } from "../../../components/Loader";
import { useUserStore } from "../../../stores/useUserStore";

export const LoginComponent: React.FC<{ callback: () => void }> = ({ callback }) => {
  const { loginService } = useAuthService();
  const { username, resumeCount } = useUserStore();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });

    const checkInfo = () => {
      if (username)
        resumeCount! > 0
          ? navigate(`/${username}/dashboard`)
          : navigate(`/${username}/build-resume`);
      return;
    }
    
  return (
    <>
    {!showLoader ?
    <section className="lg:w-[70%] mx-auto h-[100%] column-center-flex">
      <div className="lg:px-7 lg:py-3 px-3 py-3 flex flex-col lg:w-[60%] gap-y-5">
        <div>
          <h1 className="lg:text-4xl text-3xl font-poppins font-bold">
            Welcome Back to FlashCV!
          </h1>
          <p className="lg:text-base text-sm font-poppins">
            Log in to access your resumes, edit them anytime, and download with
            ease.
          </p>
        </div>
        <div className="column-center-flex gap-y-2">
          <SocialButton
            provider="google"
            text="Continue with Google"
            icon={<GoogleIcon />}
          />
          <SocialButton
            provider="twitter"
            text="Continue with X"
            icon={<FaXTwitter size={30} />}
          />
        </div>
        <div className="flex items-center justify-center gap-x-2 font-poppins font-light text-xs">
          <div className="bg-zinc-200 w-[30%] max-w-[30%] h-[1px]"></div>
          <p>or continue with</p>
          <div className="bg-zinc-200 w-[30%] max-w-[30%] h-[1px]"></div>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            localStorage.setItem('type', 'jwt');
            callback();
            setShowLoader(true);
            const response = await loginService(formData);
            if (response) {
              checkInfo();
              return;
            }
            setShowLoader(false);
            alert("Invalid Login!");
          }}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-4 mt-2 mb-3">
            <FormTextField
              name="email"
              value={formData.email}
              label="Email"
              placeholder="Email"
              type="email"
              changeHandler={handleChange}
            />
            <FormTextField
              name="password"
              value={formData.password}
              label="Password"
              placeholder="Password"
              type="password"
              changeHandler={handleChange}
            />
          </div>
          <FormButton text="Login" />
        </form>
        <div>
          <p className="text-black/60 text-center text-sm font-poppins">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-orange-400">
              Register
            </Link>{" "}
            instead.
          </p>
        </div>
      </div>
    </section>
    : <div className="w-screen h-screen row-center-flex"><Loader /></div>
    }
        </>
  );
};
