"use client";
/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const NewsDetail = (params) => {
  const [router, setRouter] = useState(null);
  const [news, setNews] = useState();
  const [newsDetail, setNewsDetail] = useState();

  useEffect(() => {
    import("next/router").then((nextRouter) => {
      setRouter(nextRouter);
    });
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  useEffect(() => {
    const newsDetails = news?.find((news) => news.id == params.params.id);
    setNewsDetail(newsDetails);
  }, [news, params.params.id]);

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="">
        <div
          className="background-div bg-no-repeat bg-cover with-overlay"
          style={{
            backgroundImage: "url('/images/Cover.jpg')",
            // backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px",
          }}
        >
          <div className="w-[100%] absolute h-[400px] bg-black opacity-50"></div>
          <div className=" flex justify-center h-full">
            <h3 className=" text-white  text-5xl absolute font-bold pt-48 opacity-100 z-50">
              News
            </h3>
            <p className=" text-white text-lg absolute font-semibold pt-64 opacity-100 z-50">
              All news organized and participated by Policy Exchange of
              Bangladesh are listed here, starting with <br />{" "}
              <span className="ml-40">
                the upcoming news, followed by our previous news history.
              </span>
            </p>
          </div>
        </div>

        <Container className=" gap-5 my-16 ">
          <div className=" bg-inherit rounded-xl publication news relative mb-5 grid grid-cols-7 bg-gray-100">
            <div className="overflow-hidden bg-black col-span-3">
              <img
                src={newsDetail?.image}
                alt=""
                className="rounded-t-xl h-80 w-full news-thumbnail"
              />
            </div>
            <div className="border-r-2 border-gray-400 col-span-4">
              <div className=" p-5">
                <p className="flex gap-1 items-center justify-start font-light text-xs text-gray-700 mt-5">
                  <FaRegCalendarAlt /> {newsDetail?.date}
                </p>
                <p className="mt-2 mb-10 flex flex-col gap-4">
                  <span className="font-bold text-[#956de6] text-lg">
                    {newsDetail?.title}
                  </span>
                  <span className="text-sm text-justify">
                    {newsDetail?.detail}
                  </span>
                </p>
                {newsDetail?.link && (
                  <>
                    <a
                      href={newsDetail?.link}
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold"
                    >
                      Watch Now
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsDetail;
