import React from "react";
import Container from "../../components/Container";

const Whyus = () => {

    const chosseUsText = [
      {
        heading: "Luxury facilities",
        content:
          "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
      },
      {
        heading: "Affordable Price",
        content:
          "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
      },
      {
        heading: "Many Choices",
        content:
          "We provide many unique work space choices so that you can choose the workspace to your liking.",
      },
    ];

  return (
    <Container>
      <div className=" py-[15px] md:py-[120px] flex-col  xl:flex-row flex justify-between items-center ">
        <div>
          <h2 className=" font-bold text-[#1E1E1E] font-['Poppins'] text-[42px] leading-[53px] mb-7 xl:mb-0 dark:text-white">
            Why <br /> Choosing Us
          </h2>
        </div>
        <div className="flex-col md:flex-row flex-wrap flex justify-between gap-x-[28px]">
          {chosseUsText.map((item) => (
            <div key={item.heading} className="w-[284px] mt-[25px] md:mt-0">
              <h3 className=" font-semibold text-[#1E1E1E] font-['Poppins'] text-[24px] leading-[36px] mb-[14px] dark:text-[#E58411] ">
                {item.heading}
              </h3>
              <p className=" text-[#1E1E1E] font-['Poppins'] text-[16px] leading-[185%] dark:text-[#ffffffaf] ">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Whyus;
