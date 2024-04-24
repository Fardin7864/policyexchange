/* eslint-disable @next/next/no-img-element */
"use client";
import WhatWeDoCard from "./WhatWeDocard";

const WhatWedo = () => {
  return (
    <div
      className="grid grid-cols-8 gap-3 mt-2  rounded-2xl pt-20 pb-7 px-20 shadow-2xl"
      style={{
        background:
          "linear-gradient(99deg, rgba(116,209,148,0.8855917366946778) 35%, rgba(116,209,148,0.48783263305322133) 100%)",
      }}
    >
      <div className="col-span-3">
        <h1 className="text-[#0E1514] text-5xl font-extrabold mb-10">
          WHAT WE DO
        </h1>
      </div>

      <div className=" col-span-5">
        <WhatWeDoCard
          icon={
            <img
              src="/about/5.png"
              className="h-12 w-12 text-[#0E1514]"
              alt=""
            />
          }
          title="Perform policy research"
          details="Perform policy research on a wide range of policy areas: from the economy and finance to better regulations, the digital economy and trade, innovation and entrepreneurship, energy and climate, among other areas."
        />
        <WhatWeDoCard
          icon={
            <img
              src="/about/6.png"
              className="h-12 w-12 text-[#0E1514]"
              alt=""
            />
          }
          title="Creating consensus and actions"
          details="Creating consensus and actions for required policy and market solutions by convening the policy makers, practitioners, industry players, and other stakeholders."
        />
        <WhatWeDoCard
          icon={
            <img
              src="/about/7.png"
              className="h-12 w-12 text-[#0E1514]"
              alt=""
            />
          }
          title="Advisor to policy-makers and investors"
          details="We act as trusted, expert advisers to policy-makers and investors. Provide advisory to market and  keen investors in Bangladesh markets and specific sectors, and bring together enterprises interested in data, venture formation and growth."
        />
        <WhatWeDoCard
          icon={
            <img
              src="/about/8.png"
              className="h-12 w-12 text-[#0E1514]"
              alt=""
            />
          }
          title="Organizing and Facilitating High Level Dialogues"
          details="Policy Exchange holds regular dialogue on important economic and business issues through targeted round tables, seminars, and conclaves."
        />
      </div>
    </div>
  );
};

export default WhatWedo;
