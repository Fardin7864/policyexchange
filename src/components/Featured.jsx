
import React from "react";
import ActionAreaCard from "./Card";
import Link from "next/link"

const Featured = () => {
  return ( 
    <>
    <h1 className=" text-center text-5xl font-bold mt-20 mb-3">Latest News</h1>
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">

        <div className=" col-span-2 h-[130px] shadow-2xl rounded-lg hover:opacity-85">
        <img
        src={"/news/1.jpg"}
        className=""
        />
        <div className=" bg-white h-full p-4 rounded-b-xl shadow-2xl">
          <h4 className=" text-xl font-medium">গ্যাসের অভাবে কতোটা সংকটে শিল্প ও অর্থনীতি? | অর্থনীতির সংলাপ | DBC NEWS</h4>
          <p className=" text-gray-600">Dr. M Masrur Reaz, Chairman, of Policy Exchange Bangladesh,…</p>
        </div>
        </div>

      {/* <ActionAreaCard image="/news/1.jpg" title="গ্যাসের অভাবে কতোটা সংকটে শিল্প ও অর্থনীতি? | অর্থনীতির সংলাপ | DBC NEWS" details="Dr. M Masrur Reaz, Chairman, of Policy Exchange Bangladesh,…" /> */}
      {/* <ActionAreaCard image="/news/2.png" title="“Insights On NPL Challenges And Government Initiatives: A Perspective From M. Masrur Reaz, Chairman And CEO Of Policy Exchange Bangladesh”" details="M Masrur Reaz, Chairman and CEO of Policy…" /> */}
      <ActionAreaCard image="/news/3.png" title="Media Coverage Of The Event “Advancing Circular Textile Policies In Bangladesh.”" details="Policy Exchange Bangladesh, an economic think-tank in…" />
      <ActionAreaCard image="/news/4.jpeg" title="SheSTEM: Advancing Women In STEM Supported By The Embassy Of The Kingdom Of The Netherlands" details="Policy Exchange Bangladesh is pleased to be…" />
      </div>
      {/* <div className=" hidden w-72 h-72 bg-[#a790d5] lg:relative -top-[580px] left-[1000px] rounded-full z-0">
      </div> */}
    </div>
    <div className=" w-full flex justify-center items-center">
      <Link href={"/publications"}><button className=' bg-[#a790d5] hover:bg-[#307fe2] active:opacity-60 py-3 px-5 rounded-full text-white font-bold'> Vew All News </button></Link>
      </div>
    </>
  );
};

export default Featured;
