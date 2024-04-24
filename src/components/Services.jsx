"use client";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import BrandMarquee from "./BrandMarquee";

const Services = () => {
  return (
    <div className=" flex justify-center flex-col gap-12 p-5 md:p-0">
      <Typography className=" text-[#00263a] text-xl font-bold lg:w-[70%] mx-auto text-center mb-8 md:w-[90%] w-full ">
        Welcome to Policy Exchange of Bangladesh, your trusted partner in
        private sector economics. As a private, independent advisory firm, we
        are dedicated to crafting innovative ideas, backed by robust evidence,
        and formulating policies and market solutions that address the economic
        development challenges facing Bangladesh. Our primary focus is on
        catalyzing private sector-led economic growth, contributing to the
        broader development narrative of our nation.
      </Typography>
      <BrandMarquee />
      <h1 className=" text-center text-5xl font-bold text-[#0E1514]">
        Our Services
      </h1>
      <Container className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* card 1 */}
        <div className="">
          <div className="container">
            <div className="card">
              <div className="slide slide3 border-2 border-black bg-white ">
                <div
                  className="slide slide1 text-[#0E1514] bg-white hover:text-[#7393CF] shadow-2xl"
                  style={{ backgroundColor: "white" }}
                >
                  <div className="content">
                    <div className="icon flex flex-col gap-14 justify-center items-center">
                      <Image
                        src={"/icons/1.png"}
                        width={120}
                        height={0}
                        alt="search"
                        className=""
                      />
                      <h4 className=" text-xl font-bold text-center mr-6">
                        Research & Analytics
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide slide4 bg-[#0282B7] shadow-lg">
                <div className="slide slide2 bg-[#0282B7] shadow-lg">
                  <div className="content ">
                    <p className="text-white">
                      We specialize in providing comprehensive services ranging
                      from policy, regulatory, market, and sectoral analysis to
                      developing knowledge products, conducting evaluation,
                      monitoring, and learning activities, as well as
                      administering surveys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}

        <div className="container">
          <div className="card ">
            <div className="slide slide3 border-2 border-black bg-white ">
              <div
                className="slide slide1 text-[#0E1514] bg-white hover:text-[#7393CF]"
                style={{ backgroundColor: "white" }}
              >
                <div className="content">
                  <div className="icon flex flex-col gap-14 justify-center items-center">
                    <Image
                      src={"/icons/2.png"}
                      width={120}
                      height={0}
                      alt="search"
                      className=""
                    />
                    <h4 className=" text-xl font-bold text-center mr-6">
                      Advocacy & Dialogue
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide4 bg-[#0282B7] shadow-lg">
              <div className="slide slide2 bg-[#0282B7] shadow-lg">
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
        </div>

        {/* card 3 */}

        <div className="container">
          <div className="card ">
            <div className="slide slide3 border-2 border-black bg-white ">
              <div
                className="slide slide1 text-[#0E1514] bg-white hover:text-[#7393CF]"
                style={{ backgroundColor: "white" }}
              >
                <div className="content">
                  <div className="icon flex flex-col gap-14 justify-center items-center">
                    <Image
                      src={"/icons/3.png"}
                      width={120}
                      height={0}
                      alt="search"
                      className=" mt-8"
                    />
                    <h4 className=" text-xl font-bold text-center mr-6">
                      Investment & Market Advisory
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide slide4 bg-[#0282B7] shadow-lg">
              <div className="slide slide2 bg-[#0282B7] shadow-lg">
                <div className="content ">
                  <p className="text-white">
                    We provide expert advice on policy, regulation, and
                    institutions, along with insights into economic trends. We
                    facilitate industry connections, resolve regulatory
                    disputes, and provide due diligence supervision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
