"use client";

/* eslint-disable @next/next/no-img-element */

import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const eventsPerPage = 12;

  useEffect(() => {
    // Fetch all events
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const indexOfLastEvent = page * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/event/cover.jpeg')",

          width: "full",
          height: "400px",
        }}
      >
        <div className="w-[100%] absolute h-[400px] bg-black opacity-60"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white  text-5xl absolute font-bold pt-52 opacity-100 z-50">
            Events
          </h3>
          <p className=" text-white text-lg absolute font-semibold pt-64 opacity-100 z-50">
            All events organized and participated by Policy Exchange of
            Bangladesh are listed here, starting with <br />{" "}
            <span className="ml-40">
              the upcoming events, followed by our previous event history.
            </span>
          </p>
        </div>
      </div>
      <div className=" max-w-[1440px] mx-auto ">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
          {currentEvents.map((event, index) => (
            <Link href={`/events/${event.id}`} key={index}>
              <div className="shadow-2xl bg-white rounded-xl publication relative mb-5 h-96">
                <div className="overflow-hidden bg-black">
                  <img
                    src={event.image}
                    alt=""
                    className="rounded-t-xl h-56 w-full publication-thumbnail"
                  />
                </div>
                <div className="publications-container">
                  <div className="py-3 px-5">
                    <p className="mt-2 mb-10 text-sm flex flex-col gap-2 ">
                      <span className="font-bold text-[#7393CF]">
                        {event.title}
                      </span>
                    </p>

                    <div className=" my-2 border-t pt-2 absolute pb-1 bottom-1 w-full">
                      <p className="flex gap-1 items-center justify-start font-light text-xs text-gray-700 ">
                        <FaRegCalendarAlt /> {event.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Container>
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(events.length / eventsPerPage)}
            page={page}
            // slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            color="primary"
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
