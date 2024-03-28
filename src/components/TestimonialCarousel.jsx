"use client"
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import HeroBanner from './HeroBanner';

const TestimonialCarousel = () => {
    return (
        <>
        <h2 className=" text-center text-5xl font-bold py-20">What our customers say about us</h2>
            
            {/* Testimonial slider */}
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
            className="background-div bg-cover rounded-3xl"
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
            className="background-div bg-cover bg-no-repeat rounded-3xl"
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
            className="background-div bg-cover rounded-3xl"
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
            className="background-div bg-cover  rounded-3xl"
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
      </Swiper>
        </>
    );
};

export default TestimonialCarousel;