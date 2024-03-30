import Image from "next/image";
import React from "react";

export const RoundedCard = ({ image, title, details }) => {
  return (
    <div className=" flex flex-col gap-5 items-center">
      <Image
        src={image}
        width={210}
        height={210}
        alt="card"
        className=" rounded-full w-[210px] h-[210px]"
      />
      <h3 className=" text-[#00263a] text-2xl font-bold">{title}</h3>
      <p className=" text-justify">{details}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <div className="bg-[#9de7d7] px-24 pb-20 pt-14 rounded-2xl">
      <h1 className=" text-center text-5xl font-bold mb-20">Our Services</h1>
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        <RoundedCard
          image="/hero/card7.webp"
          title="Greater Choice"
          details="We unlock the potential for thriving, sustainable communities to experience great choice in London's most exceptional places."
        />

        <RoundedCard
          image="/hero/card6.webp"
          title="Trusted Partner"
          details="We believe in the power of people and partnerships to create exceptional, climate-conscious places that deliver for our customers."
        />

        <RoundedCard
          image="/hero/card4.webp"
          title="Driving Innovation"
          details="We consistently prove our ability to think and act differently in everything we do, embracing change and championing technology."
        />

        <RoundedCard
          image="/hero/card1.webp"
          title="Future London"
          details="We are building a sustainable legacy for this great city, with a positive social impact at the heart of it and a thriving economy for London's future."
        />
      </div>
    </div>
  );
};

export default WhyUs;
