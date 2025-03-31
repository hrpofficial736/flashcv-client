import React from "react";

interface WorkingGridTileProps {
  image: string;
  text: string;
  caption: string;
}

export const WorkingGridTile: React.FC<WorkingGridTileProps> = ({
  image,
  text,
  caption,
}) => {
  return (
    <main className="column-center-flex gap-y-2 rounded-xl w-[100%] transition-all duration-300">
      <img src={image} className="rounded-tl-xl rounded-tr-xl w-full h-[60%]" />
      <div className="column-center-flex w-full">
      <h3 className="font-poppins z-20 font-semibold text-lg">{text}</h3>
      <h6 className="font-poppins font-normal text-sm text-center mx-2 mb-2">
        {caption}
      </h6>
      </div>
    </main>
  );
};
