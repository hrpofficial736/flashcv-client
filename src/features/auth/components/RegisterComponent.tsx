import React, { useEffect, useState } from "react";
import {
  FormTextField,
  FormButton,
  SocialButton,
  GoogleIcon,
} from "../../../exports/components/exports";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { useAuthService } from "../services/authService";
import { useUserStore } from "../../../stores/useUserStore";
import { Loader } from "../../../components/Loader";

export const RegisterComponent: React.FC<{callback: () => void;}> = ({callback} ) => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const username = useUserStore((state) => state.username);
  const { registerService } = useAuthService();
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (username) navigate(`/${username}/build-resume`);
  }, [username])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  return (
    <>
    {!showLoader ?
    <section className="lg:w-[60%] w-[90%] mx-auto h-[90%] lg:h-full column-center-flex">
      <div className="lg:px-7 lg:py-3 px-3 py-3 flex flex-col lg:w-[60%] gap-y-3 lg:gap-y-5">
        <div className="flex flex-col items-start gap-y-2">
          <h1 className="lg:text-4xl text-3xl font-poppins font-bold">
            Welcome aboard!
          </h1>
          <p className="lg:text-base text-sm font-poppins">
            Sign up now and let AI help you craft a professional, job-winning
            resume effortlessly.
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
          <div className="bg-zinc-200 w-[30%] h-[1px]"></div>
          <p>or continue with</p>
          <div className="bg-zinc-200 w-[30%] h-[1px]"></div>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            callback();
            setShowLoader(true);
            await registerService(formData);
          }}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col gap-y-4 mb-3">
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
        </form>
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
    : <div className="w-screen h-screen row-center-flex"><Loader /></div>
}
    </>
  );
};
