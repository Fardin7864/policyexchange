"use client";

/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Link from "next/link";
import "./news.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const newsPerPage = 12;

  useEffect(() => {
    // Fetch all news
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const indexOfLastNews = page * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const handlePageChange = (news, value) => {
    setPage(value);
  };
  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/news/cover.jpeg')",
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
      <div className=" max-w-[1440px] mx-auto ">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-16 ">
          {currentNews.map((news, index) => (
            <div
              key={index}
              className=" bg-inherit rounded-xl publication news relative mb-5 flex"
            >
              <Link href={`/news/${news.id}`}>
                <div className="overflow-hidden bg-white">
                  <img
                    src={news.image}
                    alt=""
                    className="rounded-t-xl h-52 w-full news-thumbnail"
                  />
                </div>
                <div className="border-r-2 border-gray-400">
                  <div className="py-3 px-5">
                    <p className="mt-2 mb-10 flex flex-col gap-4">
                      <span className="font-bold text-[#956de6] text-lg">
                        {news.title}
                      </span>
                      <span className="text-sm text-justify">
                        {news.subTitle}
                      </span>
                    </p>
                    <button className="text-[#956de6] font-bold">
                      Read more
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Container>
        <div className="flex justify-center">
          <Pagination
            count={Math.ceil(news.length / newsPerPage)}
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

export default News;
