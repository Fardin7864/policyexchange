/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialBanner from "./TestimonialBanner";

//
const TeamCarousel = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch all publications
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data?.team_members));
  }, []);

  //

  return (
    <>
      {/* Testimonial slider */}
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        // speed={1000}
        className="mySwiper w-[95%] overflow-visible"
      >
        <div className=" relative -top-[270px] z-20 ">
          <TestimonialBanner />
        </div>

        {/* content */}
        {teams.map((team, index) => (
          <SwiperSlide key={index} className="w-[85%]  ">
            <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
              <div
                style={{
                  backgroundImage: `url(${team.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
              ></div>
              <div className="absolute inset-0 z-10 grid place-items-end w-full">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                  <span className=" text-2xl">{team.name}</span> <br />
                  {team.designation}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TeamCarousel;
