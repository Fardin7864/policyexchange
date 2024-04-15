import React from "react";
import ActionAreaCard from "./Card";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import '../styles/button.css'

const NewsCard = ({ image, title, details, bottomBorder, classes }) => {
  return (
    <div
      className={` rounded-none w-full z-10 bg-none ${classes}`}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          // height="60"
          image={image}
          alt="green iguana"
          className={``}
        />
        {/* <div
          className={`h-2 w-full`}
          style={{ backgroundColor: `${bottomBorder}` }}
        ></div> */}
        <Container className=" py-5 bg-none">
          <div className="border-l border-blue-500 pt-16 relative -top-14">
          <h3 className=" p-6  h-full text-3xl">
            {title}
          </h3>
          <button className="text-blue-600 pl-6 font-semibold underline-from-left ">READ MORE</button>
          </div>
        </Container>
      </CardActionArea>
    </div>
  );
};

const Featured = () => {
  return (
    <div className="  mt-16 rounded-3xl pt-10">
      <Container className=" flex justify-between w-full items-start">
        <h2 className=" text-6xl font-titillium mb-3 text-gray-800 w-full ">
          Let’s create a better web together
        </h2>
        <p className=" text-2xl pt-3">
          We love to learn and share our best practices from over 10 years of
          developing and using WordPress.
        </p>
      </Container>
      <Container>
      <Link  href={"/publications"}>
      <button class="relative overflow-hidden bg-transparent border border-blue-500 text-blue-500 hover:text-white hover:border-transparent hover:bg-blue-500 transition duration-200 ease-in-out button-blue p-3 px-5 text-xl ">
    All Articles
  </button>
      </Link>

      </Container>
      <div className="flex flex-col lg:flex-row justify-center py-10  gap-16 w-10/12 mx-auto px-8">
        <NewsCard
          image="/news/1.jpg"
          title="গ্যাসের অভাবে কতোটা সংকটে শিল্প ও অর্থনীতি? | অর্থনীতির সংলাপ | DBC NEWS"
          bottomBorder={"#8D87F9"}
        />
        <NewsCard
          image="/news/2.png"
          title="“Insights On NPL Challenges And Government Initiatives: A Perspective From M. Masrur Reaz,..”"
          bottomBorder={"#F5CC00"}
        />
      </div>
    </div>
  );
};

export default Featured;
