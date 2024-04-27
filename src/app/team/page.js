import React from "react";
import TeamList from "./TeamList";
import { Typography } from "@mui/material";
import TeamCarousel from "@/components/TeamCarousel";

const TeamPage = () => {
  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/images/career.JPG')",
          width: "full",
          height: "400px",
        }}
      >
        <div className="w-[100%] absolute h-[400px] bg-black opacity-50"></div>
        <div className=" flex justify-center h-full">
          <h3 className=" text-white text-center text-5xl absolute font-bold pt-52 opacity-100 z-50">
            Meet Our Team
          </h3>
        </div>
        {/* content */}
      </div>

      <div className=" max-w-[1440px] mx-auto ">
        <div className=" w-3/5 mx-auto">
          <Typography className="mt-16 mb-20 text-[#00263a] text-xl font-bold mx-auto text-center  w-full">
            At Policy Exchange Bangladesh, we are a team of seasoned
            professionals driven by a shared commitment to catalyze positive
            change in Bangladesh&apos;s economic landscape. Our founding team
            brings together expertise from diverse backgrounds, including
            academia, public sector, industry, and various countries. This
            diversity enriches our perspectives and insights, ensuring that our
            solutions are not only theoretically sound but also practically
            viable
          </Typography>
        </div>
        {/* <HorizontalScrollCarousel /> */}
        <TeamCarousel />

        <TeamList />
      </div>
    </div>
  );
};

export default TeamPage;
