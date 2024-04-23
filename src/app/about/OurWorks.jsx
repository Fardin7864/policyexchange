"use client";
import { useState } from "react";
import { FaChartLine } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";
import { RiLuggageCartFill } from "react-icons/ri";
import { RiMenuAddLine } from "react-icons/ri";

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
                className={`transition-transform pt-6 h-48 bg-[#a2bcd6] p-3 rounded-l-full px-14 ${
                  isshowCollab
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold pl-8">
                  Collaborative Engagement
                </h3>
                <p className="pl-8 leading-5 pt-2">
                  Work together with recognized scholars, leading policymakers,
                  and industry leaders and analysts for producing research,
                  advocacy, and dialogue outcomes reflecting innovation and
                  influential policy and strategy debate
                </p>
              </div>
            </div>
            <div
              className={`  rounded-r-full h-48 ${
                isshowCollab ? "bg-[#a2bcd6]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <img className="w-16" src="/about/1.png" alt="" />
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
                className={`transition-transform h-48  bg-[#a2bcd6] p-3 rounded-l-full px-14 ${
                  isshowStrategic
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold pl-16 ">
                  Strategic Outreach
                </h3>
                <p className=" leading-5 pl-16 pt-2">
                  Providing practical, market-driven solutions and perspectives
                  to address gaps in the national economic landscape, advocating
                  for innovative approaches to inclusive growth and
                  transformation.
                </p>
              </div>
            </div>
            <div
              className={`  rounded-r-full h-48 ${
                isshowStrategic ? "bg-[#a2bcd6]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <img className="w-16" src="/about/2.png" alt="" />
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
                isshowinnovative ? "bg-[#a2bcd6]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <img className="w-16" src="/about/3.png" alt="" />
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform h-48  bg-[#a2bcd6] p-3 rounded-r-full px-14 ${
                  isshowinnovative
                    ? "transform -translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold ">Innovative Advocacy</h3>
                <p className=" leading-5 pt-2 ">
                  Creating awareness and ownership through dissemination work to
                  a national audience of policy-makers, opinion formers and the
                  wider public through briefings, printed and digital
                  publications, infographics and multimedia platforms
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
                isshowGlobal ? "bg-[#a2bcd6]" : " "
              }`}
            >
              <div className="bg-white w-48 h-48 flex justify-center items-center rounded-full shadow-2xl">
                <img className="w-16" src="/about/4.png" alt="" />
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform flex flex-col justify-center items-center h-48 bg-[#a2bcd6] p-3 rounded-r-full px-14 ${
                  isshowGlobal
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold relative -left-12">
                  Global Policy Exploration
                </h3>
                <p className=" leading-5 pt-2 pr-8">
                  Conduct comprehensive research and formulate innovative public
                  policy initiatives tailored for Bangladesh and other
                  developing and emerging nations
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
