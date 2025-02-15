import React, { useState } from "react";
import {
  FormTextField,
  FormButton,
  SocialButton,
  GoogleIcon
} from "../../../exports/components/exports";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";

export const RegisterComponent: React.FC = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
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
  return (
    <section className="w-[60%] h-full column-center-flex">
      <div className="px-7 py-3 flex flex-col w-[60%] gap-y-3">
        <div>
          <h1 className="text-4xl font-poppins font-bold">Welcome aboard!</h1>
          <p className="text-base font-poppins">
            Sign up now and let AI help you craft a professional, job-winning
            resume effortlessly.
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
            name="name"
            value={formData.name}
            label="Name"
            placeholder="Name"
            type="text"
            changeHandler={handleChange}
          />
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
        <FormButton text="Register" />
        <div>
          <p className="text-black/60 text-center text-sm font-poppins">
            Already have an account?{" "}
            <Link to={"/login"} className="text-orange-400">
              Login
            </Link>{" "}
            instead.
          </p>
          <p className="text-black/40 text-center text-xs font-poppins mt-4">
            By signing up, You agree to our Terms and Conditions and Privacy
            Policy.
          </p>
        </div>
      </div>
    </section>
  );
};
