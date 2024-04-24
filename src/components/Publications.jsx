/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Container } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useForm } from "@formspree/react";
import { PiBookOpenText } from "react-icons/pi";
import Button from "@mui/material/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import TestimonialBanner from "./TestimonialBanner";
const Publications = () => {
  const [open, setOpen] = useState(false);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredId, setIsHoveredId] = useState(null);

  const [publicationData, setPublicationData] = useState([]);

  useEffect(() => {
    // Fetch all publications
    fetch("/publications.json")
      .then((res) => res.json())
      .then((data) => setPublicationData(data));
  }, []);

  const handleClickOpen = (publication) => {
    setSelectedPublication(publication);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewPublication = () => {
    if (selectedPublication && selectedPublication.driveLink) {
      window?.open(selectedPublication.driveLink, "_blank");
    }
  };

  const [state, handleSubmit, reset] = useForm("xvoewezp");
  if (state.succeeded) {
    reset();
    setOpen(false);
  }

  return (
    <>
      <h2 className="text-[#0E1514] text-center text-5xl font-bold py-20">
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
          <div className="background-div bg-cover rounded-3xl w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* content */}
            {publicationData.slice(0, 3).map((publication, index) => (
              <div
                key={index}
                className="shadow-2xl bg-white rounded-xl publication relative mb-5"
              >
                <div
                  className="overflow-hidden bg-black bg-cover w-full h-80"
                  style={{ backgroundImage: `url(${publication.image})` }}
                ></div>
                <div className="publications-container">
                  <div className="py-3 px-5">
                    <p className="mt-2 mb-10 text-sm flex flex-col gap-2 ">
                      <span className="font-bold text-[#7393CF]">
                        {publication.title}
                      </span>
                      <span className="">{publication.subtitle}</span>
                    </p>

                    <div
                      className="flex justify-center my-2 border-t -ml-5 pt-2 absolute bottom-0 w-full duration-300"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setIsHoveredId(index);
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <button
                        onClick={() => handleClickOpen(publication)}
                        className="flex gap-1 text-sm items-center justify-center font-semibold text-black hover:text-[#7393CF] w-36 duration-300"
                      >
                        {isHovered && isHoveredId === index ? (
                          <img
                            src="/images/Read.gif"
                            className="h-4 w-4"
                            alt=""
                          />
                        ) : (
                          <PiBookOpenText className="text-lg text-[#7393CF]" />
                        )}
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover rounded-3xl w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* content */}
            {publicationData.slice(3, 6).map((publication, index) => (
              <div
                key={index}
                className="shadow-2xl bg-white rounded-xl publication relative mb-5"
              >
                <div
                  className="overflow-hidden bg-black bg-cover w-full h-80"
                  style={{ backgroundImage: `url(${publication.image})` }}
                ></div>
                <div className="publications-container">
                  <div className="py-3 px-5">
                    <p className="mt-2 mb-10 text-sm flex flex-col gap-2 ">
                      <span className="font-bold text-[#7393CF]">
                        {publication.title}
                      </span>
                      <span className="">{publication.subtitle}</span>
                    </p>

                    <div
                      className="flex justify-center my-2 border-t -ml-5 pt-2 absolute bottom-0 w-full duration-300"
                      onMouseEnter={() => {
                        setIsHovered(true);
                        setIsHoveredId(index);
                      }}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <button
                        onClick={() => handleClickOpen(publication)}
                        className="flex gap-1 text-sm items-center justify-center font-semibold text-black hover:text-[#7393CF] w-36 duration-300"
                      >
                        {isHovered && isHoveredId === index ? (
                          <img
                            src="/images/Read.gif"
                            className="h-4 w-4"
                            alt=""
                          />
                        ) : (
                          <PiBookOpenText className="text-lg text-[#7393CF]" />
                        )}
                        Read
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" w-full flex justify-center items-center">
        <Link href={"/publications"}>
          <button className=" bg-[#74D194] hover:bg-[#179A44] active:opacity-60 py-3 px-5 rounded-full duration-300 text-white font-bold">
            {" "}
            Vew All Publications{" "}
          </button>
        </Link>
      </div>
      {/* Modal for open pdf */}
      <Dialog open={open} onClose={handleClose} className="z-10">
        <form onSubmit={handleSubmit}>
          <DialogContent className="flex flex-col items-center p-10 bg-[#00263a]">
            <div className="mb-4">
              <label htmlFor="name" className="ml-2 font-normal text-white">
                Name *
              </label>
              <br />
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="ml-2 font-normal text-white">
                Email *
              </label>
              <br />
              <input
                required
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
            <div>
              <label htmlFor="number" className="ml-2 font-normal text-white">
                Phone Number *
              </label>
              <br />
              <input
                required
                type="text"
                id="number"
                name="number"
                placeholder="Enter Your Phone No."
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
          </DialogContent>
          <DialogActions className="bg-[#00263a] border-t">
            <Button onClick={handleClose} className="text-white">
              Cancel
            </Button>
            <Button
              type="submit"
              className="text-white"
              onClick={handleViewPublication}
            >
              View Publication
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Publications;
