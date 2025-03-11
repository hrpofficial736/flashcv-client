import React from "react";
import { UniversalButtonProps } from "../../../components/UniversalButton";

export const GenerateWithAIButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
}) => {
  return (
    <button
      type="submit"
      className="mb-2 bg-gradient-to-br from-indigo-400 to-red-400 text-xs cursor-pointer hover:bg-zinc-200 transition-colors duration-200 text-white font-semibold px-2 py-2 rounded-xl row-center-flex gap-x-2"
    >
      {icon}
      {text}
    </button>
  );
};
