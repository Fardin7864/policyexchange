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
  const [showAllJobs, setShowAllJobs] = useState(false);

  const toggleShowAllJobs = () => {
    setShowAllJobs(!showAllJobs);
  };

  useEffect(() => {
    // Fetch all jobs
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="bg-custom">
      <div
        className="background-div bg-no-repeat bg-cover with-overlay"
        style={{
          backgroundImage: "url('/images/career.jpg')",

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
      <div className="max-w-[1440px] mx-auto ">
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
              <div className=" flex flex-col lg:flex-row justify-between items-center bg-[#9de7d7] gap-5 rounded-3xl shadow-2xl">
                <Image
                  src={"/images/career2.jpg"}
                  width={600}
                  height={0}
                  alt="career image"
                  className=" rounded-l-3xl w-1/2"
                />
                <div className="p-5 w-1/2">
                  <h2 className=" text-4xl font-bold">
                    Become a part of our Team
                  </h2>
                  <p className=" font-medium py-7">
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
          </div>

          <h2 className="text-center text-4xl font-bold">Jobs for you</h2>

          <div className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              {jobs.slice(0, 3).map((job) => (
                <div
                  key={job.id}
                  className="bg-white py-5 px-10 rounded-xl  jobs-container"
                >
                  <h2 className="font-bold text-xl">{job.title}</h2>
                  <h3 className="text-[#307fe2] font-semibold mt-1">
                    {job.subTitle}
                  </h3>
                  <button className="rounded-full border px-4 py-2 border-[#98c3f7] bg-[#f3f8ff] text-[#307fe2] hover:bg-[#307fe2] hover:text-white duration-300 mt-3 font-bold">
                    Apply Now
                  </button>
                </div>
              ))}

              {showAllJobs &&
                jobs.slice(3).map((job) => (
                  <div
                    key={job.id}
                    className="bg-white py-5 px-10 rounded-xl  jobs-container"
                  >
                    <h2 className="font-bold text-xl">{job.title}</h2>
                    <h3 className="text-[#307fe2] font-semibold mt-1">
                      {job.subTitle}
                    </h3>
                    <button className="rounded-full border px-4 py-2 border-[#98c3f7] bg-[#f3f8ff] text-[#307fe2] hover:bg-[#307fe2] hover:text-white duration-300 mt-3 font-bold">
                      Apply Now
                    </button>
                  </div>
                ))}
            </div>
            <button
              className="rounded-full border px-5 py-3 border-[#a790d5] hover:bg-[#956de6] bg-[#307fe2] text-white  duration-300  block mx-auto mt-10 font-semibold"
              onClick={toggleShowAllJobs}
            >
              {showAllJobs ? "Hide" : "View all openings"}
            </button>
          </div>

          {/*  */}

          <div className="mt-16">
            <h2 className="text-center text-4xl font-bold">
              Learn Our Recruitment{" "}
              <span className="text-[#956de6]">Process</span>{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-16 gap-5">
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <IoDocumentTextOutline className="text-5xl font-bold text-[#956de6] mb-3" />
                <h4 className="font-bold text-xl">CV Submission</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Submit your CV through our online portal or via email. Ensure
                  your CV highlights your qualifications.
                </p>
              </div>
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <FiPhoneCall className="text-5xl font-bold text-[#956de6] mb-3" />
                <h4 className="font-bold text-xl mb-1">Phone Screening</h4>
                <p className="text-gray-700 text-justify mt-2">
                  After reviewing your CV, selected candidates will undergo a
                  brief phone screening.
                </p>
              </div>
              <div className="bg-white py-5 px-8 rounded-xl shadow-2xl">
                <GrCloudComputer className="text-5xl font-bold text-[#956de6] mb-3" />
                <h4 className="font-bold text-xl mb-1">Skill Assessment</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Qualified candidates will be invited to complete an assessment
                  tailored to the role.
                </p>
              </div>
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <RiTeamLine className="text-5xl font-bold text-[#956de6] mb-3" />
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
