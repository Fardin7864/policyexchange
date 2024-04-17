"use client"
import { MdChevronRight } from "react-icons/md";
import { Container } from "@mui/material";

import AnimatedNumber from "animated-number-react";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const AchivmentBoard = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
      if (isVisible) {
        setIsVisible(true);
      }
    };
  
    const value = 30;
    const formatValue = (value) => value.toFixed(0);
  return (
    <Container className=" mb-28">
      <div>
        <Container className=" px-0 bg-[#00263a] w-full h-72 rounded-3xl overflow-hidden flex justify-center items-center">
          <div className=" relative w-full h-full ">
          <img src={"/star.png"} alt="" 
          className=" w-full h-[500px] relative -top-28 -left-5" />
          </div>
          <div className=" relative flex justify-between w-[4000px] px-8 -left-12">
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
    </Container>
  );
};

export default AchivmentBoard;
