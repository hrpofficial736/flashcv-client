import React from 'react';
import LogoImage from "../assets/logo.svg";

const Logo : React.FC = () => {
  return (
    <div className="font-bold font-poppins flex items-center text-lg lg:text-xl text-black p-3">
        <img src={LogoImage} className='size-10 lg:size-14' />
        FlashCV
    </div>
  )
}

export default Logo;