"use client";
/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
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
          <h3 className=" text-white  text-5xl absolute font-bold pt-52 opacity-100 z-50">
            News
          </h3>
          <p className=" text-white text-lg absolute font-semibold pt-64 opacity-100 z-50">
            All news organized and participated by Policy Exchange of Bangladesh
            are listed here, starting with <br />{" "}
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
                  <span className="font-bold text-[#A790D5] text-lg">
                    {newsDetail?.title}
                  </span>
                  <span className="text-sm text-justify">
                    {newsDetail?.detail}
                  </span>
                </p>
                {/* youtube link */}
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

                {/* news paper link */}
                {newsDetail?.link2 && (
                  <>
                    <a
                      href={newsDetail?.link2}
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold underline mx-1"
                    >
                      News Link
                    </a>
                  </>
                )}
                {newsDetail?.link3 && (
                  <>
                    <a
                      href={newsDetail?.link3}
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold mx-1 underline"
                    >
                      News Link
                    </a>
                  </>
                )}
                {newsDetail?.link4 && (
                  <>
                    <a
                      href={newsDetail?.link4}
                      target="blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 font-semibold mx-1 underline"
                    >
                      News Link
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-10">
            {newsDetail?.images?.map((img, index) => (
              <div key={index}>
                <img src={img} alt="" className="rounded-xl h-72 w-full" />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewsDetail;
