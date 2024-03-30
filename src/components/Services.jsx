import { Container, Typography } from "@mui/material";
import React from "react";
import { FaBalanceScale, FaSearch } from "react-icons/fa";
import ActionAreaCard from "./Card";
import { FaPlus } from "react-icons/fa";

const Services = () => {
  return (
    <Container className=" flex justify-center flex-col gap-12 p-5 md:p-0">
      <Typography className=" text-[#00263a] text-2xl font-bold lg:w-[70%] mx-auto text-center mb-8 md:w-[90%] w-full ">
        We unlock potential, creating sustainable space for London to thrive. We
        believe in the power of innovation and partnership to deliver a greater
        choice of adaptable, climate resilient places fit for London's future,
        creating space for every London story.
      </Typography>
      <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className=" hover:bg-[#a790d5] hover:text-white flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className=" bg-[#9de7d7] p-7 rounded-full">
          <FaSearch className=" text-4xl text-[#00263a]"/>
          </div>
          <h4 className=" text-xl font-bold text-center">Research & Analyticss</h4>
        </div>


        <div className=" hover:bg-[#a790d5] hover:text-white flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className=" bg-[#9de7d7] p-7 rounded-full">
          <FaBalanceScale className=" text-4xl text-[#00263a]"/>
          </div>
          <h4 className=" text-xl font-bold text-center">Advocacy & Dialogue</h4>
        </div>
        
        <div className=" hover:bg-[#a790d5] hover:text-white flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className=" bg-[#9de7d7] p-7 rounded-full">
          <FaSearch className=" text-4xl text-[#00263a]"/>
          </div>
          <h4 className=" text-xl font-bold text-center">Investment & Market Advisory</h4>
        </div>
      </Container>
      {/* Find banner */}
      <Container className=" bg-[#00263a] w-full h-72 rounded-3xl overflow-hidden flex justify-between items-center">
        <Container className=" bg-[#a790d5] w-96 h-80 transform rotate-45 relative -left-[6.3rem] -bottom-2 flex justify-start items-center">
          <div className="bg-[#00263a] w-32 h-32 relative -bottom-20 -left-7"></div>
        </Container>
        <Container></Container>
      </Container>
    </Container>
  );
};

export default Services;
