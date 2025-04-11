import React from "react";
import AuthImage from "../../../assets/auth.png";

export const ImageSection: React.FC = () => {
  return (
    <section className="w-[40%] row-center-flex">
      <img src={AuthImage} className="h-full min-w-max" />
    </section>
  );
};
