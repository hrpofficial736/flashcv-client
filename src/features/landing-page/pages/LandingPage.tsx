import React from "react";
import {
  Hero,
  Features,
  Footer,
  HowItWorks,
  CallToAction
} from "../exports/components/exports";

export const LandingPage: React.FC = () => {
  return (
    <main className="w-screen h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </main>
  );
};
