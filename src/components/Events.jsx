import Link from "next/link";
import React from "react";

const Events = () => {
  return (
    <div className="relative my-16 h-screen">
      <div className="relative parallax z-10 flex justify-center items-center h-full px-28">
        <div className="">
          <h3 className=" text-7xl font-bold text-white">A different kind <br /> of design house. </h3>
          <p className=" text-white mt-8 text-4xl font-bold ">Get to know a bit about us.</p>
        </div>
        <div className=" w-1/2 flex justify-end items-center">
            <Link href={"/"} className=" ">
            <button className="text-white text-2xl font-bold border-8 border-white rounded-full w-60 h-60 hover:bg-[#00263a] hover:border-[#00263a] transition-all duration-700">MORE</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Events;
