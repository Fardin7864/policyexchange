import FadeFromSide from "@/util/FadeFromSide";
import { Container } from "@mui/material";
import React from "react";
import WhatWedo from "./WhatWedo";
import OurWorks from "./OurWorks";
import Mission from "./Mission";

const about = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <h1 className="text-[#0E1514] text-center text-5xl font-bold mt-52 mb-16">
        About Policy Exchange Bangladesh
      </h1>
      <Container className="px-0">
        <div className=" py-10">
          {/* Our story */}
          <FadeFromSide direction="left" duration={1}>
            <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#79C4E4] gap-5 rounded-3xl shadow-2xl">
              <div
                className="rounded-l-3xl w-1/2"
                style={{
                  backgroundImage: `url("https://i.ibb.co/NYFKNgb/Our-story.webp")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "800px",
                  height: "500px",
                }}
              ></div>
              <div className="pr-16 pl-10  w-1/2">
                <h2 className="text-[#0E1514] text-4xl font-bold pt-5">
                  Our Story:
                </h2>
                <p className="text-[#0E1514] font-medium py-7">
                  Policy Exchange Bangladesh is a distinguished private,
                  independent advisory firm with a singular focus on the private
                  sector economy. Our journey began with a vision to address the
                  economic development challenges in Bangladesh and champion
                  private sector-led growth. The inspiration behind our founding
                  stemmed from recognizing the pivotal role the private sector
                  plays in driving sustainable economic progress. Motivated by a
                  passion for fostering innovation and growth, we set out to
                  create a platform dedicated to ideation, evidence development,
                  and the formulation of policies and market solutions.
                </p>
              </div>
            </div>
          </FadeFromSide>

          {/* Evaluation  */}
          <FadeFromSide direction="right" duration={1}>
            <div className=" flex flex-col mt-16 lg:flex-row justify-between items-center bg-[#79C4E4] gap-5 rounded-3xl shadow-2xl">
              <div className="pl-16 pr-10 w-1/2 mt-5">
                <h2 className="text-[#0E1514] text-4xl font-bold ">
                  Evolution of Policy Exchange Bangladesh:
                </h2>
                <p className="text-[#0E1514] font-medium py-7">
                  Since our inception, Policy Exchange Bangladesh has
                  continuously evolved, overcoming obstacles and embracing
                  opportunities for growth. From our early days, where we
                  focused on establishing ourselves as a premier forum for
                  thought leaders in Bangladesh&apos;s economy, to our present
                  position as a leading advisory firm specializing in key
                  sectors such as trade, investment, industrial and trade
                  infrastructure, financial markets, digital economy, and green
                  growth, our journey has been marked by innovation, resilience,
                  and unwavering dedication to our mission.
                </p>
              </div>
              <div
                className="rounded-r-3xl w-1/2"
                style={{
                  backgroundImage: `url('https://i.ibb.co/n0CG8Yw/Evolution.webp')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "800px",
                  height: "500px",
                }}
              ></div>
            </div>
          </FadeFromSide>

          {/* Our Misson */}
          <Mission />
        </div>
        <WhatWedo />
      </Container>
      <div className="  ">
        <OurWorks />
      </div>
    </div>
  );
};

export default about;
