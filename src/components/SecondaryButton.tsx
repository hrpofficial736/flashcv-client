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
      className="bg-white shadow-sm ring ring-zinc-400 cursor-pointer hover:bg-zinc-200 transition-colors duration-200 text-black/90 font-semibold px-7 py-2 rounded-3xl row-center-flex gap-x-2"
    >
      {icon}
      {text}
    </button>
  );
};
