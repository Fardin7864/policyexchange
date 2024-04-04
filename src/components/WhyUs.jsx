import Image from "next/image";
import React from "react";
import "../styles/Whyus.css";
import img1 from "../../public/services/1.jpg";

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
      <p
        className="lg:w-[70%] text-center"
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </div>
  );
};

const WhyUs = () => {
  return (
    <div
      className=" px-24 pb-20 pt-14 rounded-2xl relative top-5
    "
    >
      <h1 className=" text-center text-5xl font-bold mb-20">Our Services</h1>
      <ul className="cards">
        <li>
          <a href="" className="card">
            <img
              src="https://i.ibb.co/J3P0T0f/1.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">Research & Analytics</h3>
                </div>
              </div>
              <p className="card__description">
              We specialize in providing comprehensive services ranging from policy, regulatory, market, and sectoral analysis to developing knowledge products, conducting evaluation, monitoring, and learning activities, as well as administering surveys.
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="" className="card">
            <img
              src="https://i.ibb.co/bbWjtPt/2.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">Advocacy & Dialogue</h3>
                </div>
              </div>
              <p className="card__description">
              We execute systematic and targeted efforts, focusing on theme-specific agendas and ensuring regular engagement with policy-makers. Additionally, we strategically engage through media channels for effective evidence dissemination.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="" className="card">
            <img
              src="https://i.ibb.co/nggq5MH/3.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <div className="card__header-text">
                  <h3 className="card__title">Investment & Market Advisory</h3>
                </div>
              </div>
              <p className="card__description">
              We provide expert advice on policy, regulation, and institutions, along with insights into economic trends. We facilitate industry connections, resolve regulatory disputes, and provide due diligence supervision.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WhyUs;
