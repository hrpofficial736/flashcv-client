import React, { useState } from 'react';

import {FormButton, FormTextField, GoogleIcon, SocialButton} from "../../../exports/components/exports";
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';

export const LoginComponent : React.FC = () => {
    const [formData, setFormData] = useState<{
        email: string;
        password: string;
    }>({
        email: "",
        password: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData((prevData) => {
          return {
            ...prevData,
            [e.target.name]: e.target.value,
          };
        });
  return (
    <section className="w-[60%] h-full column-center-flex">
      <div className="px-7 py-3 flex flex-col w-[60%] gap-y-5">
        <div>
          <h1 className="text-4xl font-poppins font-bold">
            Welcome Back to FlashCV!
          </h1>
          <p className="text-base font-poppins">
            Log in to access your resumes, edit them anytime, and download with
            ease.
          </p>
        </div>
        <SocialButton text="Continue with Google" icon={<GoogleIcon />} />
                <SocialButton text="Continue with X" icon={<FaXTwitter size={30} />} />
                <div className="flex items-center justify-center gap-x-2 font-poppins font-light text-xs">
                  <div className="bg-zinc-200 w-[30%] h-[1px]"></div>
                  <p>or continue with</p>
                  <div className="bg-zinc-200 w-[30%] h-[1px]"></div>
                </div>
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
  );
}

