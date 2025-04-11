import React from "react";
import { UniversalButtonProps } from "../../../components/UniversalButton";
import useClerkAuth from "../hooks/useCustomAuth";

interface SocialButtonProps extends UniversalButtonProps {
  provider: "google" | "twitter";
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  text,
  icon,
  provider,
}) => {
  const { signInWithProvider } = useClerkAuth();
  return (
    <button
      onClick={async () => {
        await signInWithProvider(provider);
        localStorage.setItem('type', 'oauth');
        localStorage.setItem('provider', provider);
      } }
      className="w-full max-w-[500px] row-center-flex gap-x-3 border border-zinc-600 mx-auto font-poppins font-bold cursor-pointer rounded-3xl bg-white text-black px-3 py-3 hover:bg-zinc-100 transition-colors duration-200"
    >
      {icon && icon}
      {text}
    </button>
  );
};
