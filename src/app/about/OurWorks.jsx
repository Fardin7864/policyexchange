/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const OurWorks = () => {
  const [isshowCollab, setIsshowCollab] = useState(false);
  const [isshowStrategic, setIsshowStrategic] = useState(false);
  const [isshowinnovative, setIsshowinovative] = useState(false);
  const [isshowGlobal, setIsshowGlobal] = useState(false);
  // console.log(isshow)
  return (
    <div className=" my-20">
      <h1 className=" text-center text-4xl font-bold mb-10">
        Our Work / Approach
      </h1>
      <div className=" flex gap-20 ">
        {/* 1st col */}
        <div className=" flex flex-col gap-16 text-black">
          <div
            onMouseEnter={() => setIsshowCollab(true)}
            onMouseLeave={() => setIsshowCollab(false)}
            className="flex items-center relative"
          >
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform pt-5 h-48 bg-[#79C4E4] rounded-l-full px-12 ${
                  isshowCollab
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold pl-6">
                  Collaborative Engagement
                </h3>
                <p className="pl-6 leading-5 pt-2 text-justify">
                  Work together with recognized scholars, leading policymakers,
                  and industry leaders for producing research, advocacy, and
                  dialogue outcomes reflecting innovation and influential policy{" "}
                  {""}
                </p>
              </div>
            </div>
            <div
              className={`  rounded-r-full h-48 ${
                isshowCollab ? "bg-[#79C4E4]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <div
                  className="w-36 h-36 border border-[#57bd7b98] flex justify-center items-center  rounded-full"
                  style={{
                    background:
                      "linear-gradient(99deg, rgba(116,209,148,0.2945553221288515) 3%, rgba(116,209,148,0.5130427170868348) 50%, rgba(116,209,148,0.21332282913165268) 97%)",
                  }}
                >
                  <img className="w-20" src="/about/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div
            onMouseEnter={() => setIsshowStrategic(true)}
            onMouseLeave={() => setIsshowStrategic(false)}
            className="flex items-center relative "
          >
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform h-48  bg-[#79C4E4] pt-6 pb-3 rounded-l-full pl-6 pr-10 ${
                  isshowStrategic
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold pl-16 ">
                  Strategic Outreach
                </h3>
                <p className=" leading-5 pl-16 pt-2 text-justify">
                  Providing practical, market-driven solutions and perspectives
                  to address gaps in the national economic landscape, advocating
                  for innovative approaches to inclusive growth and
                  transformation.
                </p>
              </div>
            </div>
            <div
              className={`  rounded-r-full h-48 ${
                isshowStrategic ? "bg-[#79C4E4]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <div
                  className="w-36 h-36 border border-[#57bd7b98] flex justify-center items-center  rounded-full"
                  style={{
                    background:
                      "linear-gradient(99deg, rgba(116,209,148,0.2945553221288515) 3%, rgba(116,209,148,0.5130427170868348) 50%, rgba(116,209,148,0.21332282913165268) 97%)",
                  }}
                >
                  <img className="w-20" src="/about/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd col */}
        <div className=" flex flex-col gap-16">
          <div
            onMouseEnter={() => setIsshowinovative(true)}
            onMouseLeave={() => setIsshowinovative(false)}
            className="flex items-center relative"
          >
            <div
              className={`  rounded-l-full h-48 ${
                isshowinnovative ? "bg-[#79C4E4]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <div
                  className="w-36 h-36 border border-[#57bd7b98] flex justify-center items-center  rounded-full"
                  style={{
                    background:
                      "linear-gradient(99deg, rgba(116,209,148,0.2945553221288515) 3%, rgba(116,209,148,0.5130427170868348) 50%, rgba(116,209,148,0.21332282913165268) 97%)",
                  }}
                >
                  <img className="w-20" src="/about/3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform h-48  bg-[#79C4E4] p-3 rounded-r-full pl-6 pr-16 ${
                  isshowinnovative
                    ? "transform -translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl pt-4 font-bold ">
                  Innovative Advocacy
                </h3>
                <p className="text-justify leading-5 pt-1 ">
                  Creating awareness and ownership through dissemination work to
                  a national audience of policy-makers, opinion formers and the
                  wider public through briefings, printed and digital
                  publications, infographics and multimedia platforms.
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div
            onMouseEnter={() => setIsshowGlobal(true)}
            onMouseLeave={() => setIsshowGlobal(false)}
            className="flex items-center relative"
          >
            <div
              className={`  rounded-l-full h-48 ${
                isshowGlobal ? "bg-[#79C4E4]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <div
                  className="w-36 h-36 border border-[#57bd7b98] flex justify-center items-center  rounded-full"
                  style={{
                    background:
                      "linear-gradient(99deg, rgba(116,209,148,0.2945553221288515) 3%, rgba(116,209,148,0.5130427170868348) 50%, rgba(116,209,148,0.21332282913165268) 97%)",
                  }}
                >
                  <img className="w-20" src="/about/4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform flex flex-col justify-center  h-48 bg-[#79C4E4] p-3 rounded-r-full pl-10 pr-14 ${
                  isshowGlobal
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold  ">
                  Global Policy Exploration
                </h3>
                <p className="text-justify leading-5 pt-2 pr-8">
                  Conduct comprehensive research and formulate innovative public
                  policy initiatives tailored for Bangladesh and other
                  developing and emerging nations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
