import React from "react";
import Button from "./Button";

const ContentBox = ({ content }) => {
  return (
    <div>
      <h5 className="text-[#E58411] font-['Poppins'] font-semibold text-[18px] uppercase tracking-wider ">
        {content.subhead}
      </h5>
      <h3 className="mt-[15px] mb-2 font-['Poppins'] font-bold text-[20px] lg:text-[42px] lg:w-[500px] capitalize lg:leading-[63px]  text-[#1E1E1E] dark:text-white">
        {content.mainHead}
      </h3>
      <p className=" font-['Poppins'] w-full lg:w-[555px] text-[18px]  leading-[185%] text-[#1E1E1E] mb-[20px] dark:text-[#ffffffaf]">
        {content.pera}
      </p>
      <Button text={"More Info"} />
    </div>
  );
};

export default ContentBox;
