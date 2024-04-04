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
      <div className=" flex gap-20">
        {/* 1st col */}
        <div className=" flex flex-col gap-10">
          <div
            onMouseEnter={() => setIsshowCollab(true)}
            onMouseLeave={() => setIsshowCollab(false)}
            className="flex gap-10 items-center relative h-36"
          >
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform  p-3 rounded-xl ${
                  isshowCollab
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold ">
                  Collaborative Engagement
                </h3>
                <p>
                  Work together with recognized scholars, leading policymakers,
                  and industry leaders and analysts for producing research,
                  advocacy, and dialogue outcomes reflecting innovation and
                  influential policy and strategy debate
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white w-32 h-32 flex justify-center items-center rounded-full shadow-2xl">
                <FaChartLine className="text-5xl" />
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div
            onMouseEnter={() => setIsshowStrategic(true)}
            onMouseLeave={() => setIsshowStrategic(false)}
            className="flex gap-10 items-center relative h-36"
          >
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform  p-3 rounded-xl ${
                  isshowStrategic
                    ? "transform translate-x-0"
                    : "transform translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold ">
                Strategic Outreach
                </h3>
                <p>
                Market-oriented, pragmatic, evidence-based role and voice to fill  gaps in the national landscape by bringing to the fore bold, well-informed alternative approaches to strategies for achieving inclusive economic growth and transformation
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white w-32 h-32 flex justify-center items-center rounded-full shadow-2xl">
                <RiLuggageCartFill className="text-5xl" />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd col */}
        <div className=" flex flex-col gap-10">
          <div
            onMouseEnter={() => setIsshowinovative(true)}
            onMouseLeave={() => setIsshowinovative(false)}
            className="flex gap-10 items-center relative h-36"
          >
            <div>
              <div className="bg-white w-32 h-32 flex justify-center items-center rounded-full shadow-2xl">
                <FcAdvertising className="text-5xl" />
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform p-3 rounded-xl ${
                  isshowinnovative
                    ? "transform -translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold ">
                Innovative Advocacy
                </h3>
                <p>
                Creating awareness and ownership through dissemination work to a national audience of policy-makers, opinion formers and the wider public through briefings, printed and digital publications, infographics and multimedia platforms
                </p>
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div
            onMouseEnter={() => setIsshowGlobal(true)}
            onMouseLeave={() => setIsshowGlobal(false)}
            className="flex gap-10 items-center relative h-36"
          >
            <div>
              <div className="bg-white w-32 h-32 flex justify-center items-center rounded-full shadow-2xl">
                <RiMenuAddLine className="text-5xl" />
              </div>
            </div>
            <div className="w-full overflow-hidden ">
              <div
                className={`transition-transform  p-3 rounded-xl ${
                  isshowGlobal
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                }`}
              >
                <h3 className="text-2xl font-bold ">
                Global Policy Exploration
                </h3>
                <p>
                Study and generate public policy ideas in Bangladesh and other developing and emerging countries
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
