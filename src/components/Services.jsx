"use client";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

import { MdChevronRight } from "react-icons/md";

import AnimatedNumber from "animated-number-react";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVisible(true);
    }
  };

  const value = 30;
  const formatValue = (value) => value.toFixed(0);
  return (
    <Container className=" flex justify-center flex-col gap-12 p-5 md:p-0">
      <Typography className=" text-[#00263a] text-xl font-bold lg:w-[70%] mx-auto text-center mb-8 md:w-[90%] w-full ">
        Welcome to Policy Exchange of Bangladesh, your trusted partner in
        private sector economics. As a private, independent advisory firm, we
        are dedicated to crafting innovative ideas, backed by robust evidence,
        and formulating policies and market solutions that address the economic
        development challenges facing Bangladesh. Our primary focus is on
        catalyzing private sector-led economic growth, contributing to the
        broader development narrative of our nation.
      </Typography>
      <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="container">
          <div className="card ">
            <div
              className="slide slide1 bg-white hover:text-[#a790d5]"
              style={{ backgroundColor: "white" }}
            >
              <div className="content">
                <div className="icon flex flex-col gap-14 justify-center items-center">
                  <Image
                    src={"/gif/search.gif"}
                    width={100}
                    height={0}
                    alt="search"
                    className=" mr-5"
                  />
                  <h4 className=" text-xl font-bold text-center mr-6">
                    Research & Analyticss
                  </h4>
                </div>
              </div>
            </div>
            <div className="slide slide2 bg-[#307fe2] shadow-lg">
              <div className="content ">
                <p className="text-white">
                  We specialize in providing comprehensive services ranging from
                  policy, regulatory, market, and sectoral analysis to
                  developing knowledge products, conducting evaluation,
                  monitoring, and learning activities, as well as
                  administering surveys.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="container">
          <div className="card ">
            <div
              className="slide slide1 bg-white hover:text-[#a790d5]"
              style={{ backgroundColor: "white" }}
            >
              <div className="content">
                <div className="icon flex flex-col gap-14 justify-center items-center">
                  <Image
                    src={"/gif/advo.gif"}
                    width={150}
                    height={0}
                    alt="search"
                    className=" mr-5"
                  />
                  <h4 className=" text-xl font-bold text-center mr-6">
                    Advocacy & Dialogue
                  </h4>
                </div>
              </div>
            </div>
            <div className="slide slide2 bg-[#307fe2] shadow-lg">
              <div className="content ">
                <p className="text-white">
                  We execute systematic and targeted efforts, focusing on
                  theme-specific agendas and ensuring regular engagement with
                  policy-makers. Additionally, we strategically engage through
                  media channels for effective evidence dissemination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className="container">
          <div className="card ">
            <div
              className="slide slide1 bg-white hover:text-[#a790d5]"
              style={{ backgroundColor: "white" }}
            >
              <div className="content">
                <div className="icon flex flex-col gap-14 justify-center items-center">
                  <Image
                    src={"/gif/invest.gif"}
                    width={100}
                    height={0}
                    alt="search"
                    className=" mr-5"
                  />
                  <h4 className=" text-xl font-bold text-center mr-6">
                    Investment & Market Advisory
                  </h4>
                </div>
              </div>
            </div>
            <div className="slide slide2 bg-[#307fe2] shadow-lg">
              <div className="content ">
                <p className="text-white">
                  We provide expert advice on policy, regulation, and
                  institutions, along with insights into economic trends. We
                  facilitate industry connections, resolve regulatory disputes,
                  and provide due diligence supervision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Find banner */}
      <div>
        <img
          src="/star.png"
          className="w-[300px] h-[320px] absolute z-50 top-[1960px]"
        />
        <div>
          <Container className=" bg-[#00263a] w-full h-72 rounded-3xl overflow-hidden flex justify-center items-center">
            <div className=" w-1/5 relative -top-2">
              <MdChevronRight className=" text-[#a790d5] text-[90rem] font-extrabold hidden md:block relative -left-[745px]" />
            </div>
            <div className=" relative flex justify-between w-[4000px] px-8">
              <div>
                <VisibilitySensor onChange={handleVisibilityChange}>
                  <p className=" text-[#a790d5] text-[90px] font-bold my-4 text-center leading-9">
                    {isVisible && (
                      <AnimatedNumber
                        value={30}
                        duration={2500}
                        formatValue={formatValue}
                      />
                    )}
                    +
                  </p>
                </VisibilitySensor>
                <h6 className=" text-white text-center text-xl font-semibold pt-4">
                  COLLABORATION
                </h6>
              </div>
              <div>
                <VisibilitySensor onChange={handleVisibilityChange}>
                  <p className=" text-[#a790d5] text-[90px] font-bold my-4 leading-9">
                    {isVisible && (
                      <AnimatedNumber
                        value={50}
                        duration={3500}
                        formatValue={formatValue}
                      />
                    )}
                    +
                  </p>
                </VisibilitySensor>
                <h6 className=" text-white text-2xl font-semibold pt-4 pl-5">
                  CLIENTS
                </h6>
              </div>
              <div>
                <VisibilitySensor onChange={handleVisibilityChange}>
                  <p className=" text-[#a790d5] text-[90px] font-bold my-4 text-center leading-9">
                    {isVisible && (
                      <AnimatedNumber
                        value={100}
                        duration={4000}
                        formatValue={formatValue}
                      />
                    )}
                    B
                  </p>
                </VisibilitySensor>
                <h6 className=" text-white text-2xl text-center font-semibold pt-4">
                  INDUSTRY SIZE
                </h6>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Services;
