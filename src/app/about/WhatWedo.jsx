"use client";
import WhatWeDoCard from "./WhatWeDocard";
import { FaSearch } from "react-icons/fa";
import { FaBookmark, FaChartPie, FaCrown } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { FaDisplay } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";

const WhatWedo = () => {
  return (
    <div>
      <h1 className=" text-center text-4xl font-bold mb-10">WHAT WE DO</h1>
      <div className="grid grid-cols-3 gap-8 mt-5 ">
        <WhatWeDoCard
          icon={<FaSearch className="text-7xl text-center text-white" />}
          title="Policy Research"
          details="Policy Exchange Bangladesh primarily conducts policy research in the areas of trade, investment, industrial and trade infrastructure, financial markets, digital economy, and green growth. The firm advises on topics such as the economy and finance to better regulations, the digital economy and trade, innovation and entrepreneurship, energy and climate."
        />
        <WhatWeDoCard
          icon={<FaBookmark className="text-7xl text-center text-white" />}
          title="Industry Reports"
          details="Industry reports are essential tools for businesses to stay informed about the latest trends, emerging markets, and competition in their field. Policy Exchange Bangladesh, we specialize in preparing comprehensive industry reports for businesses across a range of sectors. Our reports are carefully researched, unbiased, and tailored to meet the unique needs of each client."
        />
        <WhatWeDoCard
          icon={<FaChartPie className="text-7xl text-center text-white" />}
          title="Facilitated Policy Industry and Market Actions"
          details="Policy Exchange Bangladesh specialized in facilitating industry policy and market actions that drive growth and development for businesses across a range of sectors. Our team of experts has extensive knowledge of the regulatory landscape and market trends, and we work closely with clients to develop customized solutions that align with their goals and objectives."
        />

        {/* 2nd row */}

        <WhatWeDoCard
          icon={<FaCrown className="text-7xl text-center text-white" />}
          title="Expert Advisers"
          details="We act as trusted, expert advisers to policy-makers and investors. Provide advisory to market and keen investors in Bangladesh markets and specific sectors, and bring together enterprises interested in data, venture formation and growth"
        />
        <WhatWeDoCard
          icon={<FaDisplay className="text-7xl text-center text-white" />}
          title="Dialogues"
          details="Policy Exchange serves as a premier forum for thought leaders of Bangladesh’s economy, facilitating the exchange of diverse views, opinions, and knowledge, and thereby acts as a catalyst for innovation in ideas and solutions critical for economic growth and market creation."
        />
        <WhatWeDoCard
          icon={<BsBank2 className="text-7xl text-center text-white" />}
          title="Consensus & Actions"
          details="Creating consensus and actions for required policy and market solutions by convening the policy makers, practitioners, industry players, and other stakeholders"
        />
      </div>
      <div className=" my-10 max-w-96 mx-auto">
        <WhatWeDoCard
          icon={<BsPeopleFill className="text-7xl text-center text-white" />}
          title="Industry Advisory "
          details="Bangladesh presents both opportunities and challenges for businesses seeking to enter or expand their operations in the country. Policy Exchange Bangladesh, we offer industry advisory services to help businesses navigate the complex landscape of the Bangladeshi market and make informed decisions that drive growth and profitability."
        />
      </div>
    </div>
  );
};

export default WhatWedo;
