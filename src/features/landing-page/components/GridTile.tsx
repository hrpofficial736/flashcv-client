import React from "react";

interface GridTileProps {
  image: string;
  text: string;
  caption: string;
}

export const GridTile: React.FC<GridTileProps> = ({ image, text, caption }) => {
  return (
    <div className="flex flex-col justify-start items-center shadow-sm shadow-black/20 gap-y-2 bg-zinc-100 rounded-xl w-[30%] h-full hover:shadow-md hover:shadow-black/80 transition-all duration-300">
      <img src={image} className="rounded-tl-xl rounded-tr-xl w-full h-[70%]" />
      <h3 className="font-poppins z-20 font-semibold text-lg">{text}</h3>
      <h6 className="font-poppins font-normal text-sm text-center">
        {caption}
      </h6>
    </div>
  );
};
