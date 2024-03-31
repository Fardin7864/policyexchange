"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa6";
import TestimonialBanner from "./TestimonialBanner";
import ActionAreaCard from "./Card";
const Publications = () => {
  return (
    <>
      <h2 className=" text-center text-5xl font-bold py-20">
      Our Publications
      </h2>

      {/* Testimonial slider */}
      <Swiper
        loop={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper w-[80%] overflow-visible"
      >
        {/* <SwiperNavButtons/> */}
        <div className=" relative -top-[320px] z-20 ">
          <TestimonialBanner />
        </div>
        <SwiperSlide>
          <div
            className="background-div bg-cover rounded-3xl w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
           
          >
            {/* content */}
            <ActionAreaCard image="/publications/1.png"  title="Catalyzing Greater FDI for Vision 2041: Priorities for Building a Conducive Tax System in Bangladesh"   />
            <ActionAreaCard classes="hidden lg:block" image="/publications/2.png"  title="Threads Of Progress: A Comprehensive Landscape Study Of The Apparel Industry And The Future For Women Workers"   />
            <ActionAreaCard classes="hidden lg:block" image="/publications/3.png"  title="Bangladesh Business Climate Index-2022-23"   />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-div bg-cover rounded-3xl w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
           
          >
            {/* content */}
            <ActionAreaCard image="/publications/4.png"  title="COVID Stimulus and Links to Employment, Consumption, and Investment"   />
            <ActionAreaCard image="/publications/5.png"  title="Bangladesh Business Climate Index Report"   />
            <ActionAreaCard image="/publications/6.png"  title="USA-Bangladesh Trade & Investment – Next Generation Priorities"   />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-div bg-cover rounded-3xl w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {/* content */}
            <ActionAreaCard image="/publications/7.png"  title="Growth Driver for Bangladesh – Accelerating Investment Opportunities on Agribusiness, Digital Economy and Green Finance"   />
            <ActionAreaCard image="/publications/1.png"  title="Catalyzing Greater FDI for Vision 2041: Priorities for Building a Conducive Tax System in Bangladesh"   />
            <ActionAreaCard image="/publications/2.png"  title="Threads Of Progress: A Comprehensive Landscape Study Of The Apparel Industry And The Future For Women Workers"   />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Publications;
