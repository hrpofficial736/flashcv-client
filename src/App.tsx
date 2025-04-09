import React from "react";
import { Route, Routes } from "react-router";
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  Processor,
  RegisterPage,
  ResumePage,
} from "./exports/pages/exports";
import { SaveAndDownload } from "./features/resume-creation/components/SaveAndDownload";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<Processor provider="google" />} path="/auth/callback/google" />
      <Route element={<Processor provider="twitter" />} path="/auth/callback/twitter" />
      <Route element={<DashboardPage />} path="/:username/dashboard" />
      <Route element={<ResumePage />} path="/:username/build-resume" />
      <Route element={<SaveAndDownload />} path="/preview" />
    </Routes>
  );
};

export default App;
