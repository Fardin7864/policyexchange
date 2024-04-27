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
        {/* 1 */}
        <SwiperSlide className="w-[85%]">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/ceo.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Dr. M. Masrur Reaz</span> <br />
                Chairman & CEO
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 2 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Hasnat.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Hasnat Alam</span> <br />
                Senior Manager & Economist
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 3 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Ziaur.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Ziaur Rahman</span> <br />
                Senior Policy Analyst
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Pinaky.JPG)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Pinaky Shankar (Rahul)</span> <br />
                Senior Analyst
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 5 */}

        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Rodoshee.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Rodoshee Tahsin</span> <br />
                Senior Associate and Project Coordinator
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* 6 */}

        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Sadia.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Sadia Sultana</span> <br />
                Analyst & Programme Coordinatior
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* 7 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/hassib.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Md. Hasib Hassan</span> <br />
                Analyst & Programme Coordinatior
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 8 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Zahrah.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Zahrah Rahman</span> <br />
                Research Assistant
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* 9 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Naziba.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Naziba Nawrin</span> <br />
                Research Associate
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 10 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Rahmina.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Rahmina Ahmed</span> <br />
                Programme Analyst
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 11 */}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Rafid.jpeg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Rafid Tanmoy</span> <br />
                Research Assistant
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* 12*/}
        <SwiperSlide className="w-[85%]  ">
          <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 rounded-md">
            <div
              style={{
                backgroundImage: `url(/Team/Ashraful.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110 rounded-md hover:rounded-md"
            ></div>
            <div className="absolute inset-0 z-10 grid place-items-end w-full">
              <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-lg font-black text-white backdrop-blur-lg  w-full text-center">
                <span className=" text-2xl">Ashraful Alam</span> <br />
                Administrative Assistant
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TeamCarousel;
