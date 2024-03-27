"use client";
import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HeroBanner = () => {
  const colors = ["#9de7d7", "#a790d5", "#307fe2", "#7fd349"]; // Array of colors
  const [colorIndex, setColorIndex] = useState(0); // Initial color index
  const swiper = useSwiper();

  const handlePrevClick = () => {
    swiper.slidePrev(); // Move to the previous slide
    setColorIndex((prevIndex) => (prevIndex === 0 ? colors.length - 1 : prevIndex - 1)); // Update color index
  };

  const handleNextClick = () => {
    swiper.slideNext(); // Move to the next slide
    setColorIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)); // Update color index
  };

  return (
    <div className=" w-[90%] mx-auto relative -top-28 z-10">
      <div
        className=" h-52 w-[100%] flex rounded-l-full rounded-r-full"
        style={{ backgroundColor: colors[colorIndex] }} // Set background color dynamically
      >
        <div className=" w-[60%] bg-[#00263a] rounded-l-full rounded-r-full">
          <div className=" flex flex-col justify-center h-full text-white pl-20 pr-28">
            <h3 className=" text-4xl font-bold mb-5">Future London</h3>
            <p className=" font-normal">
              Building a sustainable legacy for this great city, creating space
              for a thriving economy with positive social impact at the very
              heart of it.
            </p>
          </div>
        </div>
        <div className="swiper-nav-btns flex gap-8 items-center w-[40%] justify-center">
          <button
            onClick={handlePrevClick}
            className=" flex items-center text-black hover:text-white gap-8 font-semibold"
          >
            <FaAngleLeft className=" text-xl" /> Driving Innovation
          </button>
          <p className=" text-black hover:text-white text-xl">|</p>
          <button
            onClick={handleNextClick}
            className=" flex items-center text-black hover:text-white gap-8 font-semibold"
          >
            Trusted Partner
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
