import React from "react"; 
import herobg from "../../assets/banner.png"
import { IoSearchOutline } from "react-icons/io5";
import Tooltip from "../../components/Tooltip";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-screen md:h-[120vh] bg-no-repeat w-full relative"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/*  content Section */}
      <div className="text-center pt-[180px]">
        <h1 className="font-['Poppins'] font-medium text-[25px] md:text-[50px] lg:text-[64px] leading-[130%] text-white mb-10 md:mb-14">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className="font-['Poppins'] text-[15px] md:text-[24px] leading-[160%] text-[#cacaca] mb-[45px]">
          Turn your room with panto into a lot more <br /> minimalist and modern
          with ease and speed
        </p>

        <div className="w-[300px] md:w-[344px] mx-auto relative">
          <input
            placeholder="Search furniture"
            className="rounded-[42px] w-full py-[15px] px-[25px] font-['Poppins'] text-[18px] leading-[150%] text-[#ffffff] border border-[rgb(255,255,255)] focus:outline-none bg-white/25 backdrop-blur-[2px] placeholder-white "
          />
          <div className="w-10 h-10 rounded-full text-white bg-[#E58411] flex justify-center items-center absolute right-[9px] top-2.5">
            <IoSearchOutline className="text-[18px]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 h-[300px]  left-0 bg-linear-to-t from-white via-transparent to-transparent w-full dark:from-[#1A1A1A]"></div>

      {/*  tooltips section */}
      <div
        className={`hidden xl:flex w-[56px] absolute h-[56px] bottom-[345px] left-[400px]  rounded-full justify-center items-center bg-white/20 backdrop-blur-sm cursor-pointer group`}
      >
        <Tooltip size={"18px"} />
      </div>
      <div
        className={`hidden xl:flex w-[32px] absolute h-[32px] bottom-[290px] left-[140px]  rounded-full justify-center items-center bg-white/20 backdrop-blur-sm cursor-pointer group`}
      >
        <Tooltip size={"10px"} />
      </div>
      <div
        className={`hidden xl:flex w-[37px] absolute h-[37px] bottom-[160px] right-[55px]  rounded-full justify-center items-center bg-white/20 backdrop-blur-sm cursor-pointer group`}
      >
        <Tooltip size={"12px"} />
      </div>
      <div
        className={`hidden xl:flex w-[32px] absolute h-[32px] bottom-[225px] right-[43%]  rounded-full justify-center items-center bg-white/20 backdrop-blur-sm cursor-pointer group`}
      >
        <Tooltip size={"10px"} />
      </div>
    </section>
  );
};

export default Hero;
