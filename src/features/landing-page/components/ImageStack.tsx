import React from 'react';
import HeroImage from "../../../assets/hero-image.png";
import HeroImageSecond from "../../../assets/hero-image-2.png";
import HeroImageThird from "../../../assets/hero-image-3.png";

const ImageStack : React.FC = () => {
  return (
    <div className="flex justify-center relative h-[350px] md:h-[450px] rounded-3xl w-full">
      <img
        src={HeroImage}
        className="w-40 h-60 md:w-60 md:h-80 border-2 border-black rounded-lg absolute top-5 left-1/2 transform -translate-x-[80%]"
      />
      <img
        src={HeroImageThird}
        className="w-40 h-60 md:w-60 md:h-80 border border-black rounded-lg absolute top-12 left-1/2 transform -translate-x-1/2"
      />
      <img
        src={HeroImageSecond}
        className="w-40 h-60 md:w-60 md:h-80 border-2 border-black rounded-lg absolute top-20 left-1/2 transform -translate-x-[20%]"
      />
    </div>
  );
}

export default ImageStack