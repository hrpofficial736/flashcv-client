import React from "react";

interface FeaturesTileProps {
  image: string;
  text: string;
  caption: string;
}

export const FeaturesTile: React.FC<FeaturesTileProps> = ({
  image,
  text,
  caption,
}) => {
  return (
    <div className="column-center-flex-with-start shadow-sm shadow-black/20 gap-y-2 bg-zinc-100 rounded-xl lg:w-[30%] h-full hover:shadow-md hover:shadow-black/80 transition-all duration-300">
      <img src={image} className="rounded-tl-xl rounded-tr-xl w-full h-[70%]" />
      <h3 className="font-poppins z-20 font-semibold text-lg">{text}</h3>
      <h6 className="font-poppins font-normal text-sm text-center mx-2 mb-2">
        {caption}
      </h6>
    </div>
  );
};
