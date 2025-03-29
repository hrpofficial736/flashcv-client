import { useLocation, useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useAuthService } from "../services/authService";
import { Loader } from "../../../components/Loader";
import { useUserStore } from "../../../stores/useUserStore";
import removeHashFromUrl from "../../../utils/helpers/removeHashFromUrl";

export const Processor: React.FC<{ provider: string }> = ({ provider }) => {
  const navigate = useNavigate();
  const { resumeCount, username } = useUserStore();
  const { loginService, registerService, signInWithProviderService } =
    useAuthService();
  const location = useLocation();

  useEffect(() => {
    const fetchTokenAndSendToServices = async () => {
      const secretFromProvider =
        provider === "google"
          ? new URLSearchParams(window.location.hash.substring(1)).get(
              "access_token"
            )
          : new URLSearchParams(window.location.search).get("code");

      if (!secretFromProvider) throw new Error("Token not found!");
      removeHashFromUrl();
      if (location.state?.type) {
        location.state?.type === "login"
          ? await loginService(secretFromProvider)
          : await registerService(secretFromProvider);
        return;
      }
     const responseFromService = await signInWithProviderService(provider!, secretFromProvider);
     console.log(responseFromService);
     
     if (responseFromService.accessToken) localStorage.setItem("auth_access_token", responseFromService.accessToken);
    };
    fetchTokenAndSendToServices();
  }, []);

  useEffect(() => {
    console.log(resumeCount, username);
    if (username) {
    if (resumeCount! > 0 && username) {
      navigate(`/${username}/dashboard`);
      return;
    }
    navigate(`/${username}/build-resume`, {relative: "path"});
  }
  }, [resumeCount, username]);

  return (
    <main className="w-screen h-screen column-center-flex">
      <Loader />
    </main>
  );
};
