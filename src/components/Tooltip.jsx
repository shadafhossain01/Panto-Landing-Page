import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Tooltip = ({size}) => {
  return (
    <>
      <div className="rounded-full bg-white" style={{width:size, height:size}}></div>

      <div className="bg-white/20 backdrop-blur-sm w-[112px] hidden group-hover:flex absolute justify-between p-3 rounded-[42px] -top-[80px] -left-[25px]">
        <div className="w-[24px] h-[24px] rounded-full border-2 border-white bg-[#E58411] cursor-pointer"></div>
        <div className="w-[24px] h-[24px] rounded-full border-2 border-white bg-[#00D6C9] cursor-pointer"></div>
        <div className="w-[24px] h-[24px] rounded-full border-2 border-white bg-[#7C7C7C] cursor-pointer"></div>
        <RiArrowDownSFill className="absolute text-[60px] top-[23px] text-white/20 " />
      </div>
    </>
  );
};

export default Tooltip;
