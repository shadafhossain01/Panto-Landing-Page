import React from "react"; 
import aboutBg from "../../assets/about-background.jpg";
import Content from "../../components/Content";

const About = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `URL(${aboutBg})` }}
        className="w-full relative top-0 h-[45vh] bg-top bg-no-repeat bg-cover"
      >
        <h2 className="text-white font-['Poppins'] text-center relative top-[50%] text-[42px]  font-bold">
          About Us
        </h2>
      </div>
      <Content/>
    </>
  );
};

export default About;
