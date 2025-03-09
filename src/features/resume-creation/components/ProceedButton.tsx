import { UniversalButtonProps } from "../../../components/UniversalButton";

export const ProceedButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
}) => {
  return (
    <button
      type="submit"
      className="bg-orange-400 text-white font-bold px-3 py-2 rounded-xl row-center-flex gap-x-2 cursor-pointer hover:bg-orange-300 transition-colors duration-200"
    >
      {icon}
      {text}
    </button>
  );
};
