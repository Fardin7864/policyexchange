import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import ActionAreaCard from "./Card";

const Featured = () => {
  return ( 
    <>
    <h1 className=" text-center text-5xl font-bold mt-20 mb-3">Latest News</h1>
    <Container>
      <div className="lg:px-0 py-10 flex lg:flex-nowrap flex-wrap lg:grid lg:grid-cols-4 gap-5 justify-center items-center px-5 ">
      <div className=" flex flex-col lg:flex-row h-full md:col-span-1 lg:col-span-2 shadow-xl rounded-xl">
        <Image
          src={"/hero/card5.webp"}
          width={800}
          height={0}
          alt="card"
          className=" rounded-t-xl lg:rounded-r-none lg:rounded-l-xl lg:w-[300px]"
        />
        <div className=" bg-white flex justify-center items-start py-8 px-5 lg:px-8 flex-col gap-8 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl w-full">
          <h5 className=" text-xs font-extrabold text-[#307fe2]">
            Greater Together
          </h5>
          <h3 className=" text-[#00263A] text-xl font-bold">Research & Analytics</h3>
            <p className=" text-gray-500">Fuly Managed</p>
        </div>
      </div>
      <ActionAreaCard image="/hero/card7.webp" title="Driving Innovation" details="Fully Managed" />
      <ActionAreaCard image="/hero/card6.webp" title="Trusted Pardner" details="Fully Managed" />
      </div>
      <div className=" w-72 h-72 bg-[#a790d5] relative -top-[580px] left-[1000px] rounded-full z-0">
      </div>
    </Container>
    </>
  );
};

export default Featured;
