"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight, FaChevronRight } from "react-icons/fa6";
import TestimonialBanner from "./TestimonialBanner";

const TestimonialCarousel = () => {
  const swiperBtn = useSwiper();

  const handlePrevClick = () => {
    swiperBtn.slidePrev(); // Move to the previous slide
  };

  const handleNextClick = () => {
    swiperBtn.slideNext(); // Move to the next slide
  };

  return (
    <>
      <h2 className=" text-center text-5xl font-bold py-20">
        What our customers say about us
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
        <div className=" relative -top-[620px] z-20 ">
          <TestimonialBanner />
        </div>
        <SwiperSlide>
          <div
            className="background-div bg-cover rounded-3xl w-[95%] mx-auto"
            style={{
              backgroundImage: "url('/testimonial/1.webp')",
              width: "full",
              height: "600px",
            }}
          >
            {/* content */}
          </div>
          {/* sub banner / text doc */}
          <div className=" text-md font-medium text-gray-100 bg-[#a790d5] w-[80%] mx-auto py-10 px-14 flex flex-col gap-5 rounded-3xl relative -top-36">
            <p>
              We got a 20 year lease here at Hanover Square, we loved the
              building when we saw the capability of what it could offer us in
              space. The ready to fit concept was definitely the area we wanted
              to focus on for our fit out, it gave us the blank canvas to make a
              much more bespoke design. Work very closely in collaboration with
              everyone on how we design the space down to the finite detail.
            </p>
            <div>
              <p>Simon Booth</p>
              <p>Head of Office Operations for EMEA</p>
              <p>KKR, Customer at Hanover</p>
            </div>
            <div>
              <button className=" hover:bg-gray-100 hover:text-gray-900 flex gap-3 items-center justify-center border-2 py-3 px-5 rounded-full">
                Find out more <FaChevronRight className=" text-xs" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-div bg-cover bg-no-repeat rounded-3xl w-[95%] mx-auto"
            style={{
              backgroundImage: "url('/testimonial/2.webp')",
              width: "full",
              height: "600px",
            }}
          >
            {/* content */}
          </div>
          {/* sub banner / text doc */}
          <div className=" text-md font-medium text-gray-100 bg-[#307fe2] w-[80%] mx-auto py-10 px-14 flex flex-col gap-5 rounded-3xl relative -top-36">
            <p>
              Moving in here has been a really great experience for all of us,
              we’ve been able to move into the space and setup quickly. The fact
              that you can come to a space that’s fitted out already in a such a
              great and modern way, means we have been able to focus on getting
              our jobs done.
            </p>
            <div>
              <p>Tahnee Andreson</p>
              <p>People Experience Manager</p>
              <p>Wunderkind, customer at 16 Dufour’s Place</p>
            </div>
            <div>
              <button className=" hover:bg-gray-100 hover:text-gray-900 flex gap-3 items-center justify-center border-2 py-3 px-5 rounded-full">
                Find out more <FaChevronRight className=" text-xs" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="background-div bg-cover rounded-3xl w-[95%] mx-auto"
            style={{
              backgroundImage: "url('/testimonial/3.webp')",
              width: "full",
              height: "600px",
            }}
          >
            {/* content */}
          </div>
          {/* sub banner / text doc */}
          <div className=" text-md font-medium text-gray-800 bg-[#9de7d7] w-[80%] mx-auto py-10 px-14 flex flex-col gap-5 rounded-3xl relative -top-36">
            <p>
              When we first moved in we expected it to be a minimal service and
              for the guys to not really know us and to be just welcoming
              guests, but they genuinely feel part of our team.
            </p>
            <div>
              <p>Oli Foster</p>
              <p>Chief Executive</p>
              <p>Pagefield, customer at 16 Dufour's Place.</p>
            </div>
            <div>
              <button className=" hover:bg-gray-100 hover:text-gray-900 flex gap-3 items-center justify-center border-2 py-3 px-5 rounded-full">
                Find out more <FaChevronRight className=" text-xs" />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;
