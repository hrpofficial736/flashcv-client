import React from 'react';
import ResumeIcon from "../../../assets/resume.svg";
import { FaEye } from "react-icons/fa";
import { ResumeInterface } from '../../../utils/interfaces/resumeInterface';
import { Link } from 'react-router';


export const ResumeComponent : React.FC<ResumeInterface> = ({title, url}) => {
  
  return (
    <div className="px-3 py-2 rounded-lg bg-zinc-50 flex items-center justify-between font-poppins gap-x-3">
      <div className="flex items-center gap-x-3">
        <img src={ResumeIcon} width={40} height={40} />
        {title}
      </div>
      <Link to={url}>
        <button className="flex items-center cursor-pointer transition-colors duration-200 hover:bg-zinc-200 gap-x-2 rounded-xl px-3 py-2 font-poppins">
          <FaEye />
          View
        </button>
      </Link>
    </div>
  );
}

