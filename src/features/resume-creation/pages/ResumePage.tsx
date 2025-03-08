import React, { useEffect } from "react";
import getSession from "../../../utils/getters/getSession";
import { useNavigate } from "react-router";

const ResumePage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function checkForSession() {
      const session = await getSession();
      if (!session) navigate("/login");
    }
    checkForSession();
  }, []);
  return (
    <main>
      <h1>hello</h1>
    </main>
  );
};

export default ResumePage;
