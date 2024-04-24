"use client";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const HeroBanner = ({ currentSlideIndex }) => {
  const colors = ["#79C4E4", "#79C4E4", "#79C4E4", "#79C4E4"]; // Array of colors
  const titles = [
    "Catalyzing growth",
    "Driving innovation",
    "Think tank",
    "Trusted partner",
  ];
  const details = [
    "With a focus on fostering sustainable development and prosperity, Policy Exchange acts as a catalyst for economic growth, leveraging expertise and insights to propel businesses and industries forward.",
    "Policy Exchange pioneers innovative solutions, leading the way towards a brighter future with groundbreaking ideas and forward-thinking strategies.",
    "As a dynamic hub of creativity and intellect, Policy Exchange is where ideas are incubated, refined, and transformed into actionable policies and strategies, shaping the landscape of tomorrow.",
    "Policy Exchange is more than an advisory firm; we're your trusted partner on the journey to success, providing reliable guidance, strategic counsel, and unwavering support every step of the way.",
  ];
  const [colorIndex, setColorIndex] = useState(0); // Initial color index
  const [titleIndex, setTitleIndex] = useState(0); // Initial title index
  const [detailsIndex, setDetailIndex] = useState(0);
  //
  const swiper = useSwiper();

  //
  useEffect(() => {
    advanceHeroBannerSlide();
  }, [currentSlideIndex]);

  const advanceHeroBannerSlide = () => {
    setColorIndex(currentSlideIndex);
    setTitleIndex(currentSlideIndex);
    setDetailIndex(currentSlideIndex);
  };

  //
  const handlePrevClick = () => {
    swiper.slidePrev(); // Move to the previous slide
    setColorIndex((prevIndex) =>
      prevIndex === 0 ? colors.length - 1 : prevIndex - 1
    ); // Update color index
    setTitleIndex((prevIndex) =>
      prevIndex === 0 ? titles.length - 1 : prevIndex - 1
    ); // Update title index
    setDetailIndex((prevIndex) =>
      prevIndex === 0 ? details.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    swiper.slideNext(); // Move to the next slide
    setColorIndex((prevIndex) =>
      prevIndex === colors.length - 1 ? 0 : prevIndex + 1
    ); // Update color index
    setTitleIndex((prevIndex) =>
      prevIndex === titles.length - 1 ? 0 : prevIndex + 1
    ); // Update title index
    setDetailIndex((prevIndex) =>
      prevIndex === details.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" w-[90%] mx-auto relative -top-28 z-10">
      <div
        className=" h-52 w-[100%] flex rounded-l-full rounded-r-full"
        style={{ backgroundColor: colors[colorIndex] }} // Set background color dynamically
      >
        <div className=" w-[60%] bg-[#00263a] rounded-l-full rounded-r-full">
          <div className=" flex flex-col justify-center h-full text-white pl-20 pr-28">
            <h3 className=" text-4xl font-bold mb-5">{titles[titleIndex]}</h3>
            <p className=" font-normal">{details[detailsIndex]}</p>
          </div>
        </div>
        <div className="swiper-nav-btns flex gap-8 items-center w-[40%] justify-center">
          <button
            onClick={handlePrevClick}
            className=" flex items-center text-black hover:text-white gap-8 font-semibold"
          >
            <FaAngleLeft className=" text-xl" /> {titles[titleIndex]}
          </button>
          <p className=" text-black hover:text-white text-xl">|</p>
          <button
            onClick={handleNextClick}
            className=" flex items-center text-black hover:text-white gap-8 font-semibold"
          >
            {titleIndex === titles.length - 1
              ? titles[0]
              : titles[titleIndex + 1]}{" "}
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
