"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import HeroBanner from "./HeroBanner";
import BrandMarquee from "./BrandMarquee";

 
const Carousel = () => {
 

  const handleSlideClick = (e) => {
    e.preventDefault();
    console.log('1')
  };
  
  return (
    <div>
      <Swiper 
        // loop={true}
        modules={[Navigation]}
        spaceBetween={30}
        // slidesPerView="auto"
        className="mySwiper"
          >
        <SwiperSlide >
          <div
            className="background-div bg-cover with-overlay "
            style={{
              backgroundImage: "url('/carousel/first.png')",
              width: "full",
              height: "650px",
            }}
            onClick={handleSlideClick}
          >
            {/* <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div> */}
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div
            className="background-div bg-cover with-overlay bg-no-repeat"
            style={{
              backgroundImage: "url('/carousel/Driving innovation.jpg')",
              width: "full",
              height: "650px",
            }}
            onClick={handleSlideClick}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div
            className="background-div bg-cover with-overlay"
            style={{
              backgroundImage: "url('/carousel/Think tank.jpg')",
              width: "full",
              height: "650px",
            }}
            onClick={handleSlideClick}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide >
        <div
            className="background-div bg-cover with-overlay"
            style={{
              backgroundImage: "url('/carousel/Trusted partner.jpg')",
              width: "full",
              height: "650px",
            }}
            onClick={handleSlideClick}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        {/* <SwiperNavButtons/> */}
        <div className=" max-w-[1440px] mx-auto">
        <HeroBanner/>
        <BrandMarquee/>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
