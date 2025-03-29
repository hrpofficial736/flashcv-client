import React from "react";
import {
  Hero,
  Features,
  HowItWorks,
  CallToAction,
  Footer,
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
