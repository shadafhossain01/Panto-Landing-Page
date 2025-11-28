import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const Button = ({text,size,fn}) => {
  return (
    <div onClick={fn}
    className="flex items-center cursor-pointer ">
      <h6
        className="font-bold font-['Poppins'] text-[#E58411]"
        style={{ fontSize: size }}
      >
        {text}
      </h6>
      <HiArrowLongRight className="text-[#E58411] text-[27px]" />
    </div>
  );
};

export default Button;
