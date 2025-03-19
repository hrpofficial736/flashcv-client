import React from "react";
import { Route, Routes } from "react-router";
import {
  DashboardPage,
  LandingPage,
  LoginPage,
  ProcessingPage,
  RegisterPage,
  ResumePage,
} from "./exports/pages/exports";
import { Main } from "./features/resume-creation/components/pdf/Main";
import { SaveAndDownload } from "./features/resume-creation/components/SaveAndDownload";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<ProcessingPage />} path="/auth/callback" />
      <Route element={<DashboardPage />} path="/:username/dashboard" />
      <Route element={<ResumePage />} path="/:username/build-resume" />
      <Route element={<Main />} path="/test" />
      <Route element={<SaveAndDownload />} path="/preview" />
    </Routes>
  );
};

export default App;
