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
    <main className="column-center-flex-with-start shadow-sm shadow-black/20 gap-y-2 bg-zinc-100 rounded-xl w-[100%] hover:shadow-md hover:shadow-black/80 transition-all duration-300">
      <img src={image} className="rounded-tl-xl rounded-tr-xl w-full h-[70%]" />
      <div className="column-center-flex w-full h-full">
      <h3 className="font-poppins z-20 font-semibold text-lg">{text}</h3>
      <h6 className="font-poppins font-normal text-sm text-center mx-2 mb-2">
        {caption}
      </h6>
      </div>
    </main>
  );
};
