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
    <div className="rounded-xl bg-white/80 p-2 column-center-flex">
      <img src={ image } className="bg-transparent size-20"/>
      <h1 className="font-poppins mt-2 text-base font-semibold text-center">{ text }</h1>
      <p className="font-poppins text-sm font-light text-center">{ caption }</p>
    </div>
  );
};
