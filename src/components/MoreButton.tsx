import React from "react";
import { UniversalButtonProps } from "./UniversalButton";

export const MoreButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
  onPressed,
}) => {
  return (
    <button
      onClick={onPressed}
      className="font-poppins max-lg:text-sm mx-auto hover:bg-zinc-100 transition-colors duration-300 rounded-lg cursor-pointer row-center-flex gap-x-3 px-3 py-2 text-black/80 font-bold"
    >
      {icon}
      {text}
    </button>
  );
};
