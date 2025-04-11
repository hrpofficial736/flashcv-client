import React from "react";

export interface UniversalButtonProps {
  text: string;
  icon?: React.ReactElement;
  onPressed?: () => void;
}

export const UniversalButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
  onPressed
}) => {
  return (
    <button
    onClick={onPressed}
      className="cursor-pointer max-w-[200px] max-h-10 px-3 py-2 rounded-2xl row-center-flex gap-x-3 bg-orange-400 hover:bg-orange-300 text-white font-semibold transition-colors duration-200"
    >
      {icon && <div>{icon}</div>}
      {text}
    </button>
  );
};
