/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

const BrandMarquee = () => {
  return (
    <div className=" brand-section rounded-lg mb-14 flex">
      <h1 className=" text-white py-8 text-4xl font-bold px-5">
        WHO WE <br /> WORK WITH
      </h1>
      <Marquee autoFill="true">
        <img
          className=" mr-10"
          style={{ width: "150px", borderRadius: "4px" }}
          src="/logos/1.png"
          alt="image1"
        />

        <img
          style={{ height: "70px", borderRadius: "4px" }}
          className=" mr-10"
          src="/logos/2.png"
          alt="image2"
        />

        <img
          style={{ height: "70px", borderRadius: "4px" }}
          className=" mr-10"
          src="/logos/3.png"
          alt="image3"
        />

        <img
          style={{ height: "70px", borderRadius: "4px" }}
          className=" mr-10"
          src="/logos/4.png"
          alt="image4"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/6.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/7.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/8.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/9.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/10.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/11.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/12.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/13.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/14.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/15.png"
          alt="image6"
        />

        <img
          className=" mr-10"
          style={{ height: "70px", borderRadius: "4px" }}
          src="/logos/16.png"
          alt="image6"
        />
      </Marquee>
    </div>
  );
};

export default BrandMarquee;
