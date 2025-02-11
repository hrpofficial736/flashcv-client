import React from "react";
import { Route, Routes } from "react-router";
import { LandingPage } from "./exports/components/exports";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
    </Routes>
  );
};

export default App;
