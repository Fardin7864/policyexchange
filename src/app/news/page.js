"use client";

/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

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

        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16">
          {currentNews.map((news, index) => (
            <div
              key={index}
              className="shadow-2xl bg-white rounded-xl publication relative mb-5"
            >
              <div className="overflow-hidden bg-black">
                <img
                  src={news.image}
                  alt=""
                  className="rounded-t-xl h-52 w-full publication-thumbnail"
                />
              </div>
              <div className="publications-container">
                <div className="py-3 px-5">
                  <p className="mt-2 mb-10 flex flex-col gap-4">
                    <span className="font-bold text-[#956de6] text-lg">
                      {news.title}
                    </span>
                    <span className="text-sm text-justify">
                      {news.subTitle}
                    </span>
                  </p>
                </div>
              </div>
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
