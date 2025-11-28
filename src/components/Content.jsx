import React from "react";
import { contents } from "../utils/Content";
import img1 from "../assets/expricences.png";
import img2 from "../assets/material1.png";
import img3 from "../assets/material2.png";
import img4 from "../assets/material3.png";
import ContentBox from "./ContentBox";

const Content = () => {
  return (
    <div className="py-[100px] px-2 xl:px-0">
      {/* First Box */}
      <div className="flex items-center flex-col xl:flex-row ">
        <img src={img1} className="xl:mr-[80px]" />
        <ContentBox content={contents[0]} />
      </div>
      <div className="flex items-center xl:pl-[310px] justify-end mt-[50px] flex-col-reverse xl:flex-row">
        <ContentBox content={contents[1]} />
        <div className="flex justify-end items-end xl:ml-[94px] mt-[35px] xl:mt-0">
          <div>
            <img src={img2} />
            <img src={img3} />
          </div>
          <div className=" col-span-2">
            <img src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
