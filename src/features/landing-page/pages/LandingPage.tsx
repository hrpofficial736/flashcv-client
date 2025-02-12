import React from "react";
import { Hero, Features, HowItWorks } from "../exports/components/exports";

export const LandingPage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
};
