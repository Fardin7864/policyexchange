/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";

const PublicationsPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="">
        <div className="h-[400px] bg-blue-300 p-44 px-40">
          <h2 className=" text-4xl font-bold">Publications</h2>
          <p>All publications by Policy Exchange of Bangladesh</p>
        </div>
        {/*  */}
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {/* 1 */}
          <div className="shadow-2xl bg-white rounded-xl publication ">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/1.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" publications-container">
              <div className="py-3 px-5">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Catalyzing greater FDI for Vision 2041
                  </span>
                  <span className="">
                    Priorities for building a conductive Tax system in
                    Bangladesh
                  </span>
                </p>
                <hr />
                <div className="flex justify-between my-2">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  {/* <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="h-full shadow-2xl bg-white rounded-xl publication">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/2.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" rounded-b-xl publications-container">
              <div className="py-3 px-5">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Threads of Progress
                  </span>
                  <span className="">
                    A Comprehensive Landscape Study of the Apparel Industry and
                    the Future for Women Workers
                  </span>
                </p>
                <hr />
                <div className="flex justify-between my-2">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="h-full shadow-2xl bg-white rounded-xl publication relative">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/3.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className="h-full publications-container">
              <div className="py-3 px-5 ">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Bangladesh Business Climate
                  </span>
                  <span className="">
                    Bangladesh Business Climate Index-2022-23
                  </span>
                </p>

                <div className=" flex justify-between my-2 absolute gap-5 bottom-4 pt-1 border-t">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="h-full shadow-2xl bg-white rounded-xl publication relative">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/4.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className="h-full publications-container ">
              <div className="py-3 px-5">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Report – Responding to Economic Challenges
                  </span>
                  <span className="">
                    New sectors to diversify Bangladesh’s exports
                  </span>
                </p>
                <hr />
                <div className=" flex justify-between my-2 absolute gap-5 bottom-4 pt-1 border-t">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* 2nd */}

        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 mb-20">
          {/* 5 */}
          <div className=" shadow-2xl bg-white rounded-xl publication ">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/5.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" publications-container">
              <div className="py-3 px-5">
                <p className="my-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    COVID Stimulus and Links to Employment
                  </span>
                  <span className="">
                    COVID Stimulus and Links to Employment, Consumption, and
                    InvestmentCOVID Stimulus and Links to Employment,
                    Consumption, and Investment
                  </span>
                </p>
                <hr />
                <div className=" flex justify-between my-2  gap-5 ">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="relative shadow-2xl bg-white rounded-xl publication">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/6.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" h-full publications-container">
              <div className="py-3 px-5">
                <p className="my-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Bangladesh Business Climate Index Report
                  </span>
                  <span className="">
                    Bangladesh Business Climate Index Report
                  </span>
                </p>

                <div className=" flex justify-between my-2 absolute gap-5 bottom-4 pt-1 border-t">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 7 */}
          <div className="relative shadow-2xl bg-white rounded-xl publication">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/7.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" h-full publications-container">
              <div className="py-3 px-5">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    USA-Bangladesh Trade & Investment
                  </span>
                  <span className="">
                    USA-Bangladesh Trade & Investment – Next Generation
                    Priorities
                  </span>
                </p>
                <div className=" flex justify-between my-2 absolute gap-5 bottom-4 pt-1 border-t">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 8 */}
          <div className="relative shadow-2xl bg-white rounded-xl publication">
            <div className="overflow-hidden bg-black">
              <img
                src="/publications/8.png"
                alt=""
                className="rounded-t-xl h-64 w-full publication-thumbnail"
              />
            </div>

            <div className=" h-full publications-container">
              <div className="py-3 px-5">
                <p className="mt-2 mb-4 text-sm flex flex-col gap-2 ">
                  <span className="font-bold text-[#956de6]">
                    Growth Driver for Bangladesh
                  </span>
                  <span className="">
                    Growth Driver for Bangladesh – Accelerating Investment
                    Opportunities on Agribusiness, Digital Economy and Green
                    Finance
                  </span>
                </p>
                <div className=" flex justify-between my-2 absolute gap-5 bottom-4 pt-1 border-t">
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <MdOutlineRemoveRedEye className="text-[#956de6]" />
                    View Details
                  </button>
                  <button className="flex gap-1 text-sm items-center font-semibold">
                    <IoDownloadOutline className="text-[#956de6]" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PublicationsPage;
