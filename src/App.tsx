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

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<ProcessingPage />} path="/auth/callback" />
      <Route element={<DashboardPage />} path="/:username/dashboard" />
      <Route element={<ResumePage />} path="/:username/build-resume" />
    </Routes>
  );
};

export default App;
