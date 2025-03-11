import React from "react";

export interface UniversalButtonProps {
  text: string;
  icon?: React.ReactElement;
  onPressed?: () => void;
}

export const UniversalButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
}) => {
  return (
    <button
      className="mt-5 cursor-pointer px-3 py-2 rounded-lg row-center-flex gap-x-3 bg-orange-300 border border-black hover:bg-white/60 transition-colors duration-200 text-black font-medium font-poppins"
    >
      {icon && <div>{icon}</div>}
      {text}
    </button>
  );
};
