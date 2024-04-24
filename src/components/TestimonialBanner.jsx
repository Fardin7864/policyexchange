"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const TestimonialBanner = () => {
  const swiper = useSwiper();

  const handlePrevClick = () => {
    swiper.slidePrev(); // Move to the previous slide
  };

  const handleNextClick = () => {
    swiper.slideNext(); // Move to the next slide
  };

  return (
    <div className="w-full flex justify-between">
      <div
        onClick={handlePrevClick}
        className={` rounded-full border-2 flex justify-center items-center hover:border-[#7393CF]`}
      >
        <button
          className={` bg-[#00263a] rounded-full p-2 border-[5px] border-white hover:border-[#7393CF]`}
        >
          <FaAngleLeft className=" text-2xl text-[#74D194] font-bold" />
        </button>
      </div>
      <div
        onClick={handleNextClick}
        className={` rounded-full border-2 flex justify-center items-center hover:border-[#7393CF] `}
      >
        <button
          className={` bg-[#00263A] rounded-full p-2 border-[5px] border-white hover:border-[#7393CF]`}
        >
          <FaAngleRight className=" text-2xl text-[#74D194] font-bold" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialBanner;
