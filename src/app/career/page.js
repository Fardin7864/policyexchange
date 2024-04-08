"use client";
import FadeFromSide from "@/util/FadeFromSide";
import { Container } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./career.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GrCloudComputer } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch all jobs
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div>
        <div
          className="background-div bg-no-repeat bg-cover with-overlay"
          style={{
            backgroundImage: "url('/images/Cover.jpg')",
            // backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "400px",
          }}
        >
          <div className="w-[100%] absolute h-[400px] bg-black opacity-50"></div>
          <div className=" flex justify-center h-full">
            <h3 className=" text-white  text-5xl absolute font-bold pt-52 opacity-100 z-50">
              Join us. You won&apos;t regret it.
            </h3>
            <p className=" text-white  text-xl absolute font-semibold pt-64 opacity-100 z-50">
              Career page by Policy Exchange of Bangladesh
            </p>
          </div>
        </div>

        {/*  */}
        <Container className=" pt-16">
          <h2 className="text-center text-lg font-semibold">
            Welcome to the Career Opportunities page at Policy Exchange
            Bangladesh. Here, we offer a gateway to meaningful roles in policy
            research, analysis, and advocacy. Dive into our diverse array of
            positions and discover how you can contribute to shaping the future
            of Bangladesh. Explore our vacancies and join us in our mission to
            drive positive change through informed policy decisions. Your career
            starts here, where innovation meets impact.
          </h2>
          <div className=" pt-16 pb-10">
            {/* Our story */}
            <FadeFromSide direction="left" duration={1}>
              <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#7b5db8] gap-5 rounded-3xl shadow-2xl">
                <Image
                  src={"/about/1.webp"}
                  width={600}
                  height={0}
                  alt="career image"
                  className=" rounded-l-3xl w-1/2"
                />
                <div className="px-5 w-1/2">
                  <h2 className=" text-4xl font-bold text-white">
                    Become a part of our Team
                  </h2>
                  <p className=" font-medium py-7 text-white">
                    Policy Exchange Bangladesh is a distinguished private,
                    independent advisory firm with a singular focus on the
                    private sector economy. Our journey began with a vision to
                    address the economic development challenges in Bangladesh
                    and champion private sector-led growth. The inspiration
                    behind our founding stemmed from recognizing the pivotal
                    role the private sector plays in driving sustainable
                    economic progress. Motivated by a passion for fostering
                    innovation and growth, we set out to create a platform
                    dedicated to ideation, evidence development, and the
                    formulation of policies and market solutions.
                  </p>
                </div>
              </div>
            </FadeFromSide>

            {/* Our Background */}
            <FadeFromSide direction="right" duration={1}>
              <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#00263a] gap-5 rounded-3xl mt-16 mb-10  shadow-2xl">
                <div className="px-5 w-1/2">
                  <h2 className=" text-4xl font-bold text-white">
                    We learn and grow from each other
                  </h2>
                  <p className=" font-medium pt-7 text-white">
                    At Policy Exchange Bangladesh, we are a team of seasoned
                    professionals driven by a shared commitment to catalyze
                    positive change in Bangladesh&apos;s economic landscape. Our
                    founding team brings together expertise from diverse
                    backgrounds, including academia, public sector, industry,
                    and various countries. This diversity enriches our
                    perspectives and insights, ensuring that our solutions are
                    not only theoretically sound but also practically viable.
                  </p>
                </div>
                <Image
                  src={"/about/2.webp"}
                  width={600}
                  height={0}
                  alt="about image"
                  className=" rounded-r-3xl w-1/2"
                />
              </div>
            </FadeFromSide>
          </div>

          <h2 className="text-center text-4xl font-bold">Jobs for you</h2>

          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white py-5 px-10 rounded-xl  jobs-container"
                >
                  <h2 className="font-bold text-xl">{job.title}</h2>
                  <h3 className="text-[#5620c2] font-semibold mt-1">
                    {job.subTitle}
                  </h3>
                  <button className="rounded-full border px-4 py-2 border-[#a790d5] bg-[#efeaf8] text-[#6634c9] hover:bg-[#6634c9] hover:text-white duration-300 mt-3">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            <button className="rounded-full border px-5 py-3 border-[#a790d5] bg-[#6634c9] text-white duration-300  block mx-auto mt-5">
              View all openings
            </button>
          </div>

          {/*  */}

          <div className="mt-16">
            <h2 className="text-center text-4xl font-bold">
              Learn Our Recruitment{" "}
              <span className="text-[#6634c9]">Process</span>{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-16 gap-5">
              <div className="bg-white p-5 rounded-xl shadow-2xl">
                <IoDocumentTextOutline className="text-5xl font-bold text-[#6634c9] mb-3" />
                <h4 className="font-bold text-xl">CV Submission</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Submit your CV through our online portal or via email. Ensure
                  your CV highlights your qualifications.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-2xl">
                <FiPhoneCall className="text-5xl font-bold text-[#6634c9] mb-3" />
                <h4 className="font-bold text-xl mb-1">Phone Screening</h4>
                <p className="text-gray-700 text-justify mt-2">
                  After reviewing your CV, selected candidates will undergo a
                  brief phone screening.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-2xl">
                <GrCloudComputer className="text-5xl font-bold text-[#6634c9] mb-3" />
                <h4 className="font-bold text-xl mb-1">Skill Assessment</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Qualified candidates will be invited to complete an assessment
                  tailored to the role.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-2xl">
                <RiTeamLine className="text-5xl font-bold text-[#6634c9] mb-3" />
                <h4 className="font-bold text-xl mb-1">Final Interview</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Successful candidates from the assessment stage will progress
                  to the final interview.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CareerPage;
