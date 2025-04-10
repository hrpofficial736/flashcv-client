import React from 'react';
import LogoImage from "../assets/logo.svg";

const Logo : React.FC = () => {
  return (
    <div className="font-bold font-poppins flex items-center text-lg text-black p-3">
        <img src={LogoImage} className='w-10 h-10' />
        FlashCV
    </div>
  )
}

export default Logo;