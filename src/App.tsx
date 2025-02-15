import React from "react";
import { Route, Routes } from "react-router";
import { LandingPage, LoginPage, RegisterPage } from "./exports/pages/exports";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<LoginPage />} path="/login" />
    </Routes>
  );
};

export default App;
