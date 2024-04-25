/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialBanner from "./TestimonialBanner";
import BrandCarouselArrow from "./BrandCarouselArrow";

//
const BrandCarousel = () => {
  //

  return (
    <>
      {" "}
      <div className=" brand-section rounded-lg mb-14 flex items-center z-50">
        <h1 className=" text-white py-8 text-4xl font-bold px-5">
          WHO WE <br /> WORK WITH
        </h1>
        {/* brand slider */}
        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView="auto"
          maxSlides={5}
          centeredSlides={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          // speed={1000}
          className="mySwiper w-[95%] h-min overflow-visible mb-0"
        >
          <div className=" relative -top-[80px] z-20 ">
            <BrandCarouselArrow />
          </div>
          {/* content */}
          <SwiperSlide
            style={{ width: "150px" }}
            className=" relative top-[25px]"
          >
            <img
              className=" mr-10"
              style={{ width: "150px", borderRadius: "4px" }}
              src="/logos/1.png"
              alt="image1"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[60px]"
          >
            <img
              style={{ height: "70px", borderRadius: "4px" }}
              className=" mr-10"
              src="/logos/2.png"
              alt="image2"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              style={{ height: "70px", borderRadius: "4px" }}
              className=" mr-10"
              src="/logos/3.png"
              alt="image3"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              style={{ height: "70px", borderRadius: "4px" }}
              className=" mr-10"
              src="/logos/4.png"
              alt="image4"
            />
          </SwiperSlide>{" "}
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[60px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/6.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/7.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/8.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/9.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/10.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/11.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/12.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/13.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/14.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/15.png"
              alt="image6"
            />
          </SwiperSlide>
          <SwiperSlide
            style={{ height: "70px", width: "auto" }}
            className=" relative top-[65px]"
          >
            <img
              className=" mr-10"
              style={{ height: "70px", borderRadius: "4px" }}
              src="/logos/16.png"
              alt="image6"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BrandCarousel;
