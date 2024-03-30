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
    <>
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
            className="background-div bg-cover"
            style={{
              backgroundImage: "url('/hero/1.jpg')",
              width: "full",
              height: "500px",
            }}
          >
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover bg-no-repeat"
            style={{
              backgroundImage: "url('/hero/2.jpg')",
              width: "full",
              height: "500px",
            }}
          >
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover"
            style={{
              backgroundImage: "url('/hero/3.jpg')",
              width: "full",
              height: "500px",
            }}
          >
            {/* content */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            className="background-div bg-cover"
            style={{
              backgroundImage: "url('/hero/4.jpg')",
              width: "full",
              height: "500px",
            }}
          >
            {/* content */}
          </div>
        </SwiperSlide>
        {/* <SwiperNavButtons/> */}
        <HeroBanner/>
        <BrandMarquee/>
      </Swiper>
    </>
  );
};

export default Carousel;
