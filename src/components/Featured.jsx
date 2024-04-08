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
    <Card
      className={`shadow-2xl rounded-xl w-full z-10 ${classes}`}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          // height="40"
          image={image}
          alt="green iguana"
          className={``}
        />
        <div
          className={`h-2 w-full`}
          style={{ backgroundColor: `${bottomBorder}` }}
        ></div>
        <Container className=" py-5">
          <div className="border-l border-blue-500">
          <h3 className=" p-6  h-full">
            {title}
          </h3>
          <button className="text-blue-600 pl-6 font-semibold underline-from-left ">READ MORE</button>
          </div>
        </Container>
      </CardActionArea>
    </Card>
  );
};

const Featured = () => {
  return (
    <div className="  mt-16 rounded-3xl py-10 pb-10 ">
      <Container className=" flex justify-between w-full">
        <h2 className=" text-6xl font-titillium mb-3 text-gray-800 w-full">
          Let’s create a better web together
        </h2>
        <p className=" text-2xl">
          We love to learn and share our best practices from over 10 years of
          developing and using WordPress.
        </p>
      </Container>
      <Container>
      <button class="relative overflow-hidden bg-transparent border border-blue-500 text-blue-500 hover:text-white hover:border-transparent hover:bg-blue-500 transition duration-200 ease-in-out button-blue p-3 px-5 text-xl ">
    All Articles
  </button>
      </Container>
      <div className="flex flex-col lg:flex-row justify-center gap-5 py-10 w-9/12 mx-auto ">
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
      <div className=" w-full flex justify-center items-center">
        <Link href={"/publications"}>
          <button className=" bg-[#a790d5] hover:bg-[#307fe2] active:opacity-60 py-3 px-5 rounded-full text-white font-bold">
            Vew All News{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
