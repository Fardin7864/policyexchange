"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import HeroBanner from "./HeroBanner";

const Carousel = () => {
  const swiperRef = useRef(null);
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    swiper.on("slideChange", () => {
      const currentIndex = swiper.realIndex;
      setSwiperIndex(currentIndex);
    });
  }, []);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        loop={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        // slidesPerView="auto"
        noSwiping={true}
        className="mySwiper"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="background-div bg-cover with-overlay "
            style={{
              backgroundImage: "url('/logos/banner.png')",
              width: "full",
              height: "650px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            //
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
        <div className=" max-w-[1440px] mx-auto">
          <HeroBanner currentSlideIndex={swiperIndex} />
          {/* <BrandMarquee/> */}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
