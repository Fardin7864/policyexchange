import FadeFromSide from "@/util/FadeFromSide";
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhatWedo from "./WhatWedo";
import OurWorks from "./OurWorks";

const about = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <h1 className=" text-center text-5xl font-bold mt-36">
        About Policy Exchange Bangladesh
      </h1>
      <Container className="px-0">
        <div className=" py-10">
          {/* Our story */}
          <FadeFromSide direction="left" duration={1}>
            <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#F5CC00] gap-5 rounded-3xl shadow-2xl">
              {/* <Image
                src={"https://i.ibb.co/NYFKNgb/Our-story.webp"}
                width={600}
                height={0}
                alt="about image"
                className=" rounded-l-3xl w-1/2"
              /> */}
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
                <h2 className=" text-4xl font-bold pt-5">Our Story:</h2>
                <p className=" font-medium py-7">
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

          {/* Our Background */}
          {/* <FadeFromSide direction="right" duration={1}>
            <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#307FE2] gap-5 rounded-3xl mt-16 shadow-2xl">
              <div className="px-5 w-1/2">
                <h2 className=" text-4xl font-bold">
                  Our Background and Team:
                </h2>
                <p className=" font-medium py-7">
                  At Policy Exchange Bangladesh, we are a team of seasoned
                  professionals driven by a shared commitment to catalyze
                  positive change in Bangladesh&apos;s economic landscape. Our
                  founding team brings together expertise from diverse
                  backgrounds, including academia, public sector, industry, and
                  various countries. This diversity enriches our perspectives
                  and insights, ensuring that our solutions are not only
                  theoretically sound but also practically viable.
                </p>
              </div>
              <Image
                src={"https://i.ibb.co/HCF7q0x/bg-and-team.jpg"}
                width={900}
                height={0}
                alt="about image"
                className=" rounded-r-3xl w-1/2"
              />
            </div>
          </FadeFromSide> */}

          {/* Evaluation  */}
          <FadeFromSide direction="right" duration={1}>
            <div className=" flex flex-col mt-16 lg:flex-row justify-between items-center bg-[#3DAB52] gap-5 rounded-3xl shadow-2xl">
              <div className="pl-16 pr-10 w-1/2">
                <h2 className=" text-4xl font-bold ">
                  Evolution of Policy Exchange Bangladesh:
                </h2>
                <p className=" font-medium py-7">
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
          <FadeFromSide direction="left" duration={1}>
            <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#8D87F9] gap-5 rounded-3xl my-16 mt-16 shadow-2xl">
              <div
                className="rounded-l-3xl w-1/2"
                style={{
                  backgroundImage: `url("https://i.ibb.co/XFh0K7r/Whats-App-Image-2023-08-27-at-9-45-37-PM-1.webp")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "800px", 
                  height: "500px",
                }}
              ></div>
              <div className="pl-16 pr-10 w-1/2">
                <h2 className=" text-4xl font-bold">Our Mission and Vision:</h2>
                <p className=" font-medium py-7">
                  At Policy Exchange Bangladesh, our mission is clear - to
                  contribute to the economic development of Bangladesh by
                  fostering a profound understanding of the private sector and
                  championing policies and market solutions that drive growth
                  and prosperity. Our vision is to be the trusted partner and
                  advisor for businesses, policymakers, investors, and
                  stakeholders seeking to navigate the complexities of
                  Bangladesh&apos;s economy and seize its vast potential for
                  sustainable
                </p>
              </div>
              
              
            </div>
          </FadeFromSide>
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
