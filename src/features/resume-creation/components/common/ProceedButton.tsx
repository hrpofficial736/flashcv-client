import { UniversalButtonProps } from "../../../../components/UniversalButton";

interface ProceedButtonProps extends UniversalButtonProps {
  type?: "submit" | "reset" | "button";
}

export const ProceedButton: React.FC<ProceedButtonProps> = ({
  text,
  icon,
  onPressed,
  type
}) => {
  return (
    <button
      type={type === "button" ? "button" : "submit"}
      onClick={onPressed}
      className="bg-orange-400 max-w-[200px] text-white font-bold px-3 py-2 rounded-xl row-center-flex gap-x-2 cursor-pointer hover:bg-orange-300 transition-colors duration-200"
    >
      {text}
      {icon}
    </button>
  );
};
