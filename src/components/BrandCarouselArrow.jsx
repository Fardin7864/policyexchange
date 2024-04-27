"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const BrandCarouselArrow = () => {
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
        className={`rounded-full flex justify-center items-center`}
      >
        <button className={` bg-[#0282B7] rounded-full p-1  `}>
          <FaAngleLeft className=" text-2xl text-black font-bold" />
        </button>
      </div>
      <div
        onClick={handleNextClick}
        className={` rounded-full  flex justify-center items-center  `}
      >
        <button className={` bg-[#0282B7] rounded-full p-1 `}>
          <FaAngleRight className=" text-2xl text-black font-bold" />
        </button>
      </div>
    </div>
  );
};

export default BrandCarouselArrow;
