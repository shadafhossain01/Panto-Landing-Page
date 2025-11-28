import React from "react";
import Container from "../components/Container"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const footerBox = [
      {
        heading: "Services",
        icon: false,
        links: ["Email Marketing", "Campaigns", "Branding"],
      },
      {
        heading: "Furniture",
        icon: false,
        links: ["Beds ", "Chair", "All"],
      },
      {
        heading: "Follow Us",
        icon: true,
        links: [ {text :"Facebook ", icon:FaFacebookF}, {text :"Twitter ", icon:FaTwitter},{text :"Instagram ", icon:FaInstagram}]
      }
    ]

  return (
    <div className="bg-[#F7F7F7] pt-[118px] pb-[55px]">
      <Container>
        <div className="flex  justify-between items-center flex-col text-center md:flex-row md:text-left">

        {/* Footer Logo & Text */}
          <div className="mb-[25px] lg:mb-0">
            <h3 className="font-['Poppins'] text-[28px] font-bold text-[#1E1E1E] mb-[22px]">
              Panto
            </h3>
            <p className="w-[293px] font-['Poppins'] font-medium text-[15px] leading-[160%] text-[#1E1E1E]">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>

          {/*  Footer links */}
          {footerBox.map((item) =>
            item.icon ? (
              <div>
                <h3 className="font-['Poppins'] text-[17px] font-bold mb-[16px] text-[#F6973F]">
                  {item.heading}
                </h3>
                <ul>
                  {item.links.map((link) => (
                    <li className="text-[#1E1E1E] font-['Poppins'] text-[15px] font-medium mb-4 flex gap-x-2 items-center cursor-pointer">
                      <link.icon />
                      <span className="font-['Poppins'] text-[15px] font-medium text-[#1E1E1E]">
                        {link.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="font-['Poppins'] text-[17px] font-bold mb-[16px] text-[#F6973F]">
                  {item.heading}
                </h3>
                <ul>
                  {item.links.map((link) => (
                    <li
                      key={link}
                      className="text-[#1E1E1E] font-['Poppins'] text-[15px] font-medium mb-4 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/*  Footer Bottom Text */}
        <div className="flex justify-between mt-[50px] text-center xl:mt-[118px] flex-col md:flex-row">
          <h3 className="font-['Poppins'] text-[#1E1E1E] text-[15px] leading-[160%]">
            Copyright © 2026
          </h3>
          <ul className="flex gap-x-[26px]">
            <li className="font-['Poppins'] text-[#1E1E1E] text-[15px] leading-[160%] cursor-pointer">
              Terms & Conditions
            </li>
            <li className="font-['Poppins'] text-[#1E1E1E] text-[15px] leading-[160%] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
