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

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on('slideChange', () => {
      // Determine the direction of the slide change
      const previousIndex = swiper.previousIndex;
      const currentIndex = swiper.realIndex;

      if (previousIndex < currentIndex) {
        console.log('Slide changed to the right');
      } else if (previousIndex > currentIndex) {
        console.log('Slide changed to the left');
      }
    });
  }, []);
 

  const handleSlideClick = (e) => {
    e.preventDefault();
    console.log('1')
  };
  
  return (
    <div>
      <Swiper 
        ref={swiperRef}
        loop={true}
        modules={[Navigation]}
        spaceBetween={30}
        // slidesPerView="auto"
        noSwiping={true}
        
        className="mySwiper"
          >
        <SwiperSlide  >
          <div
            className="background-div bg-cover with-overlay "
            style={{
              backgroundImage: "url('/carousel/first.png')",
              width: "full",
              height: "650px",
            }}
            // 
          >
            <div  className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
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
            
          >
            <div className="w-[100%] h-[100%] bg-gray-500 opacity-30"></div>
            {/* content */}
          </div>
        </SwiperSlide>
        {/* <SwiperNavButtons/> */}
        <div className=" max-w-[1440px] mx-auto">
        <HeroBanner/>
        {/* <BrandMarquee/> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
