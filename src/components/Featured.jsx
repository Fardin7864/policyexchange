import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import ActionAreaCard from "./Card";

const Featured = () => {
  return ( 
    <>
    <h1 className=" text-center text-5xl font-bold mt-20 mb-3">Featured properties</h1>
    <Container className="px-0 py-10 grid grid-cols-1 lg:grid-cols-4 gap-5">
      <div className=" flex col-span-2 shadow-xl rounded-xl">
        <Image
          src={"/hero/card5.webp"}
          width={300}
          height={0}
          alt="card"
          className=" rounded-l-xl"
        />
        <div className=" bg-white flex justify-center items-start px-12 flex-col gap-8 rounded-r-xl">
          <h5 className=" text-xs font-extrabold text-[#307fe2]">
            Greater Together
          </h5>
          <h3 className=" text-[#00263A] text-xl font-bold">Research & Analytics</h3>
            <p className=" text-gray-500">Fuly Managed</p>
        </div>
      </div>
      <ActionAreaCard image="/hero/card7.webp" title="Driving Innovation" details="Fully Managed" />
      <ActionAreaCard image="/hero/card6.webp" title="Trusted Pardner" details="Fully Managed" />
    </Container>
    </>
  );
};

export default Featured;
