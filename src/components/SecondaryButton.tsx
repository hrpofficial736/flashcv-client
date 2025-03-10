import { UniversalButtonProps } from "./UniversalButton";

export const SecondaryButton: React.FC<UniversalButtonProps> = ({
  text,
  icon,
  onPressed
}) => {
  return (
    <button
      type="submit"
      onClick={() => onPressed!()}
      className="bg-zinc-100 cursor-pointer hover:bg-zinc-200 transition-colors duration-200 border border-black text-black font-semibold px-3 py-2 rounded-xl row-center-flex gap-x-2"
    >
      {icon}
      {text}
    </button>
  );
};
