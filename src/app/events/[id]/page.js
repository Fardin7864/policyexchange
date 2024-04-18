"use client";
/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const EventDetail = (params) => {
  const [router, setRouter] = useState(null);
  const [events, setEvents] = useState();
  const [eventsDetail, setEventsDetail] = useState();

  useEffect(() => {
    import("next/router").then((nextRouter) => {
      setRouter(nextRouter);
    });
  }, []);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  useEffect(() => {
    const eventsDetails = events?.find((event) => event.id == params.params.id);
    setEventsDetail(eventsDetails);
  }, [events, params.params.id]);

  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/news/cover.jpeg')",
          // backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          width: "100%",
          height: "400px",
        }}
      >
        <div className="w-[100%] absolute h-[400px] bg-black opacity-60"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white  text-5xl absolute font-bold pt-48 opacity-100 z-50">
            Events
          </h3>
          <p className=" text-white text-lg absolute font-semibold pt-64 opacity-100 z-50">
            All events organized and participated by Policy Exchange of
            Bangladesh are listed here, starting with <br />{" "}
            <span className="ml-40">
              the upcoming news, followed by our previous news history.
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ">
        <Container className=" gap-5 py-16 ">
          <div className="  rounded-xl publication news relative mb-8 grid grid-cols-7 ">
            <div className="overflow-hidden col-span-3 flex items-center">
              <img
                src={eventsDetail?.image}
                alt=""
                className="rounded-t-xl h-80 w-full news-thumbnail"
              />
            </div>
            <div className="border-r-2 border-gray-400 col-span-4">
              <div className=" p-5">
                <p className="flex gap-1 items-center justify-start font-light text-xs text-gray-700 mt-5">
                  <FaRegCalendarAlt /> {eventsDetail?.date}
                </p>
                <p className="mt-2 mb-10 flex flex-col gap-4">
                  <span className="font-bold text-[#956de6] text-lg">
                    {eventsDetail?.title}
                  </span>
                  <span className="text-sm text-justify">
                    {eventsDetail?.detail}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {eventsDetail?.images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default EventDetail;
