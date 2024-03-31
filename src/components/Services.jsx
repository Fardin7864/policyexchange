import { Container, Typography } from "@mui/material";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const Services = () => {
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
        <div className=" hover:border-2 hover:border-[#a790d5] bg-white hover:text-[#a790d5] flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className=" p-7 rounded-full">
            <Image src={"/gif/search.gif"} 
            width={100}
            height={0}
            alt="search"
            className="  "
            />
          </div>
          <h4 className=" text-xl font-bold text-center">
            Research & Analyticss
          </h4>
        </div>

        <div className="hover:border-2 hover:border-[#a790d5] bg-white hover:text-[#a790d5]  flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className="  p-7 rounded-full">
            <Image src={"/gif/advo.gif"} 
            width={150}
            height={0}
            alt="search"
            />
          </div>
          <h4 className=" text-xl font-bold text-center">
            Advocacy & Dialogue
          </h4>
        </div>

        <div className="hover:border-2 hover:border-[#a790d5] bg-white hover:text-[#a790d5]  flex flex-col justify-center items-center gap-5 p-16 rounded-2xl shadow-xl transition-colors duration-500">
          <div className="rounded-full">
            <Image src={"/gif/invest.gif"} 
            width={100}
            height={0}
            alt="search"
            />
          </div>
          <h4 className=" text-xl font-bold text-center">
            Investment & Market Advisory
          </h4>
        </div>
      </Container>
      {/* Find banner */}
      <Container className=" bg-[#00263a] w-full h-72 rounded-3xl overflow-hidden flex items-center">
        <FaChevronRight className=" text-[#a790d5] text-[56rem] font-extrabold relative -left-[470px]"/>
        <div className=" ">
            <div>
              <p className=" text-white text-3xl font-bold my-4 text-center" >30 + </p>
              <h6 className=" text-white text-xl font-semibold">COLLABORATION</h6>
            </div>
            <div>
              <p className=" text-white text-3xl font-bold my-4 text-center" >50 + </p>
              <h6 className=" text-white text-xl font-semibold">CLIENTS</h6>
            </div>
        </div>
      </Container>
    </Container>
  );
};

export default Services;
