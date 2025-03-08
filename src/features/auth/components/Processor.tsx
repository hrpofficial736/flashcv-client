import { useNavigate } from "react-router";
import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { PuffLoader } from "react-spinners";
import removeHashFromUrl from "../../../utils/helpers/removeHashFromUrl";
import { useAuthService } from "../services/authService";
import { useUserStore } from "../../../stores/useUserStore";
import { GlobalUser } from "../../../utils/interfaces/globalUserInterface";
import { supabaseClient } from "../../../services/supabaseClient";

export const Processor: React.FC = () => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const { loginService, registerService, signInWithProviderService } =
    useAuthService();
  const updateUser = useUserStore((state) => state.updateUser);
  const { mutate: authMutation } = useMutation({
    mutationFn: async (token: string) => {
      if (queryParams.get("type") === "login") return await loginService(token);
      else if (queryParams.get("type") === "register")
        return await registerService(token);
      else {
        const responseFromAuthService = await signInWithProviderService(
          new URLSearchParams(window.location.search).get("provider")!,
          token,
        );
        return responseFromAuthService;
      }
    },
    onSuccess: (data: GlobalUser) => {
      updateUser(data.name, data.email, data.username);
      if (data.resumeCount! > 0) navigate(`/${data.username}/dashboard`);
      else navigate(`/${data.username}/build-resume`);
    },
  });
  useEffect(() => {
    async function getSession() {
      const { data, error } = await supabaseClient.auth.getSession();
      if (error || !data.session) {
        console.error("No session found");
        navigate("/login");
        return;
      }
      authMutation(data.session.access_token);
    }
    removeHashFromUrl();
    getSession();
  }, []);
  return (
    <div className="column-center-flex gap-y-2">
      <PuffLoader />
      <h1 className="text-xl font-poppins font-semibold text-black/60">
        Hang on...
      </h1>
    </div>
  );
};
