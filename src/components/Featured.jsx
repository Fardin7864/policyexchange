
import React from "react";
import ActionAreaCard from "./Card";

const Featured = () => {
  return ( 
    <>
    <h1 className=" text-center text-5xl font-bold mt-20 mb-3">Latest News</h1>
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">

      <ActionAreaCard image="/news/1.jpg" title="গ্যাসের অভাবে কতোটা সংকটে শিল্প ও অর্থনীতি? | অর্থনীতির সংলাপ | DBC NEWS" details="Dr. M Masrur Reaz, Chairman, of Policy Exchange Bangladesh,…" />
      <ActionAreaCard image="/news/2.png" title="“Insights On NPL Challenges And Government Initiatives: A Perspective From M. Masrur Reaz, Chairman And CEO Of Policy Exchange Bangladesh”" details="M Masrur Reaz, Chairman and CEO of Policy…" />
      <ActionAreaCard image="/news/3.png" title="Media Coverage Of The Event “Advancing Circular Textile Policies In Bangladesh.”" details="Policy Exchange Bangladesh, an economic think-tank in…" />
      <ActionAreaCard image="/news/4.jpeg" title="SheSTEM: Advancing Women In STEM Supported By The Embassy Of The Kingdom Of The Netherlands" details="Policy Exchange Bangladesh is pleased to be…" />
      </div>
      {/* <div className=" hidden w-72 h-72 bg-[#a790d5] lg:relative -top-[580px] left-[1000px] rounded-full z-0">
      </div> */}
    </div>
    </>
  );
};

export default Featured;
