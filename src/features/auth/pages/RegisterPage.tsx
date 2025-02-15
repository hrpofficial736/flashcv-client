import React from "react";
import {ImageSection, RegisterComponent} from "../exports/components/exports";

export const RegisterPage: React.FC = () => {
  return (
    <main className="w-screen h-screen flex">
      <RegisterComponent />
      <ImageSection />
    </main>
  );
};
