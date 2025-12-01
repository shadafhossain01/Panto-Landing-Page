import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

import { reviews } from "../utils/reviews";
import Rating from "./Rating";

const Slider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={39}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.name}
            className="bg-cover relative p-[18px]"
            style={{ backgroundImage: `url(${review.coverImg})` }}
          >
            <div className="bg-white absolute left-[50%]  -translate-x-[50%] bottom-[18px]  px-[40px] pb-[20px] rounded-[20px] w-[90%] lg:w-[334px]">
              <img
                src={review.image}
                className="w-[60px] h-[60px] relative -top-[25px] left-[50%] -translate-x-[50%]"
              />
              <h4 className="font-['Poppins'] font-semibold text-[18px] text-[#1E1E1E] mb-[10px]">
                {review.name}
              </h4>
              <p className="font-['Poppins'] text-[12px] lg:text-[14px] text-[#1E1E1E] leading-[21px]">
                “{review.review}“
              </p>
              <div className="flex justify-center mt-[15px]">
                <Rating rate={review.rating} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
