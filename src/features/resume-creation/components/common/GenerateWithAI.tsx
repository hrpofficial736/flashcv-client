import React, { useState } from "react";
import { UniversalButtonProps } from "../../../../components/UniversalButton";
import useOpenRouterService from "../../services/useOpenRouterService";
import { ClipLoader } from "react-spinners";


interface GenerateWithAIButtonProps extends UniversalButtonProps {
  prompt: string;
  callback: (output: string, index: number) => void;
  contentTypeToGenerate: "personal" | "job";
  index: number;
}

export const GenerateWithAIButton: React.FC<GenerateWithAIButtonProps> = ({
  text,
  icon,
  prompt,
  contentTypeToGenerate,
  index,
  callback
}) => {
  const {generateText} = useOpenRouterService();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  return (
    <button
    type="button"
      onClick={async () => {
        setShowLoader(true);
        const response = await generateText(prompt, contentTypeToGenerate);
        if (response) setShowLoader(false)
        callback(response, index);
      }}
      className="mb-2 bg-gradient-to-br from-indigo-400 to-red-400 text-xs cursor-pointer hover:bg-zinc-200 transition-colors duration-200 text-white font-semibold px-2 py-2 rounded-xl row-center-flex gap-x-2"
    >
      {showLoader ? <ClipLoader size={20} className="text-white" /> : icon}
      {showLoader ? "Generating..." : text}
    </button>
  );
};
