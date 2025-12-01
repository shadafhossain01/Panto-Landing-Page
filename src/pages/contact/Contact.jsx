import React from "react";
import ContactBg from "../../assets/contact-background.jpg";
import Testimonial from "../../components/Testimonial";

const Contact = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `URL(${ContactBg})` }}
        className="w-full relative top-0 h-[45vh] bg-center bg-no-repeat bg-cover"
      >
        <h2 className="text-white font-['Poppins'] text-center relative top-[50%] text-[42px]  font-bold">
          Contact Us
        </h2>
      </div>
      <div className="mt-[100px]">
        <Testimonial />
      </div>
    </>
  );
};

export default Contact;
