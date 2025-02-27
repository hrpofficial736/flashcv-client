import React from "react";
import { PuffLoader } from "react-spinners";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { supabaseClient } from "../../../services/supabaseClient";

export const Processor: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const removeHashFromUrl = () => {
      if (window.location.hash) {
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search,
        );
      }
    };

    const handleAuthRedirect = async () => {
      const { data, error } = await supabaseClient.auth.getSession();

      if (error || !data.session) {
        console.error("Auth error:", error?.message || "No session found.");
        navigate("/login");
        return;
      }
      removeHashFromUrl();
      navigate("/new/dashboard");
    };

    setTimeout(handleAuthRedirect, 3000);
  }, [navigate]);
  return (
    <div className="column-center-flex gap-y-2">
      <PuffLoader />
      <h1 className="text-xl font-poppins font-semibold text-black/60">
        Hang on...
      </h1>
    </div>
  );
};
