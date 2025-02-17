import React from "react";
import {LoginComponent, ImageSection} from "../exports/components/exports";

export const LoginPage: React.FC = () => {
  return (
    <main className="w-screen h-screen flex">
      <LoginComponent />
      {window.innerWidth > 1024 && <ImageSection />}
    </main>
  );
};
