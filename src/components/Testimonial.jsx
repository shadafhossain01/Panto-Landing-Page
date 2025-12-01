import React from "react";
import Container from "./Container";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className=" pb-[50px] lg:pb-[200px]">
      <Container>
        {/* Testimonial Header */}
        <h5 className="text-[#E58411] font-['Poppins'] text-center font-semibold text-[18px] uppercase tracking-wider leading-[27px]">
          Testimonials
        </h5>
        <h3 className="mt-[15px] mb-[49px] font-['Poppins'] text-center font-bold text-[20px] lg:text-[42px] capitalize lg:leading-[63px]  text-[#1E1E1E] dark:text-white">
          Our Client Reviews
        </h3>
        {/* Testimonial Slider */}
        <Slider/>
      </Container>
    </div>
  );
};

export default Testimonial;
