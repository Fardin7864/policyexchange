import React from "react";
import HorizontalScrollCarousel from "./HorizontalCarousel";
import TeamList from "./TeamList";

const page = () => {
  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/banners/about.webp')",
          width: "full",
          height: "400px",
        }}
      >
        <div className="w-[100%] absolute h-[400px] bg-gray-600 opacity-20"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white text-center text-5xl absolute font-bold pt-52 opacity-100 z-50">
            Meet Out Team
          </h3>
        </div>
        {/* content */}
      </div>

      <div className=" max-w-[1440px] mx-auto ">
        <div className=" w-3/5 mx-auto">
          <p className=" mt-10 text-xl text-center font-bold">
          At Policy Exchange Bangladesh, we are a team of seasoned professionals driven by a shared commitment to catalyze positive change in Bangladesh&apos;s economic landscape. Our founding team brings together expertise from diverse backgrounds, including academia, public sector, industry, and various countries. This diversity enriches our perspectives and insights, ensuring that our solutions are not only theoretically sound but also practically viable
          </p>
        </div>
        <HorizontalScrollCarousel />

        <TeamList />
      </div>
    </div>
  );
};

export default page;
