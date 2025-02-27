import React from "react";
import { UniversalButtonProps } from "./UniversalButton";

export const FormButton: React.FC<UniversalButtonProps> = ({ text, icon }) => {
  return (
    <button
      type="submit"
      className="w-full mx-auto font-poppins cursor-pointer rounded-3xl bg-orange-400 text-white px-3 py-3 hover:bg-orange-300 transition-colors duration-200"
    >
      {icon && icon}
      {text}
    </button>
  );
};
