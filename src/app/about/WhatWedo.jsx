/* eslint-disable @next/next/no-img-element */
"use client";
import WhatWeDoCard from "./WhatWeDocard";

const WhatWedo = () => {
  return (
    <div className="grid grid-cols-7 gap-3 mt-14 bg-[#74D194] rounded-2xl pt-8 px-16">
      <h1 className="col-span-2 text-6xl font-extrabold mb-10">
        WHAT <br /> WE <br /> DO
      </h1>
      <div className=" col-span-5">
        <WhatWeDoCard
          icon={<img src="/about/5.png" className="h-8 w-8" alt="" />}
          title="Perform policy research"
          details="Perform policy research on a wide range of policy areas: from the economy and finance to better regulations, the digital economy and trade, innovation and entrepreneurship, energy and climate, among other areas."
        />
        <WhatWeDoCard
          icon={<img src="/about/6.png" className="h-8 w-8" alt="" />}
          title="Creating consensus and actions"
          details="Creating consensus and actions for required policy and market solutions by convening the policy makers, practitioners, industry players, and other stakeholders."
        />
        <WhatWeDoCard
          icon={<img src="/about/7.png" className="h-8 w-8" alt="" />}
          title="Advisor to policy-makers and investors"
          details="We act as trusted, expert advisers to policy-makers and investors. Provide advisory to market and  keen investors in Bangladesh markets and specific sectors, and bring together enterprises interested in data, venture formation and growth."
        />
        <WhatWeDoCard
          icon={<img src="/about/8.png" className="h-8 w-8" alt="" />}
          title="Organizing and Facilitating High Level Dialogues"
          details="Policy Exchange holds regular dialogue on important economic and business issues through targeted round tables, seminars, and conclaves."
        />
      </div>
    </div>
  );
};

export default WhatWedo;
