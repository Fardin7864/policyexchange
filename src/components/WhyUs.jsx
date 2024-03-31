import Image from "next/image";
import React from "react";

export const RoundedCard = ({ image, title, details }) => {
  return (
    <div className=" flex flex-col gap-5 items-center">
      <Image
        src={image}
        width={200}
        height={200}
        alt="card"
        className=" rounded-full w-[200px] h-[200px]"
      />
      <h3 className=" text-[#00263a] text-2xl font-bold">{title}</h3>
      <p className="lg:w-[70%] text-center" dangerouslySetInnerHTML={{ __html: details }} />
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="bg-[#9de7d7] px-24 pb-20 pt-14 rounded-2xl relative -top-20">
      <h1 className=" text-center text-5xl font-bold mb-20">Our Services</h1>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <RoundedCard
          image="/services/2.jpg"
          title="Research & Analytics"
          details={`We specialize in providing comprehensive services ranging from policy, regulatory, market, and sectoral analysis to developing knowledge products, conducting evaluation, monitoring, and learning activities, as well as administering surveys.`}
        />

        <RoundedCard
          image="/services/3.jpg"
          title="Advocacy & Dialogue"
          details="We execute systematic and targeted efforts, focusing on theme-specific agendas and ensuring regular engagement with policy-makers. Additionally, we strategically engage through media channels for effective evidence dissemination."
        />

        <RoundedCard
          image="/services/1.jpg"
          title="Investment & Market Advisory"
          details="We provide expert advice on policy, regulation, and institutions, along with insights into economic trends. We facilitate industry connections, resolve regulatory disputes, and provide due diligence supervision."
        />
      </div>
    </div>
  );
};

export default WhyUs;
