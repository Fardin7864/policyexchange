"use client";
import React, { useRef, useState } from "react";
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
  return (
    <div>
      <Swiper 
        loop={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
          >
        <SwiperSlide>
          <div
            className="background-div bg-cover with-overlay "
            style={{
              backgroundImage: "url('/carousel/Catalyzin growth.jpg')",
              width: "full",
              height: "650px",
            }}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover with-overlay bg-no-repeat"
            style={{
              backgroundImage: "url('/carousel/Driving innovation.jpg')",
              width: "full",
              height: "650px",
            }}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover with-overlay"
            style={{
              backgroundImage: "url('/carousel/Think tank.jpg')",
              width: "full",
              height: "650px",
            }}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover with-overlay"
            style={{
              backgroundImage: "url('/carousel/Trusted partner.jpg')",
              width: "full",
              height: "650px",
            }}
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        {/* <SwiperNavButtons/> */}
        <HeroBanner/>
        <BrandMarquee/>
      </Swiper>
    </div>
  );
};

export default Carousel;
