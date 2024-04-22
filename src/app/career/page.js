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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

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

  //
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

          <h2 className="text-center text-4xl font-bold mt-16">Jobs for you</h2>

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
                  <button
                    onClick={handleClickOpen}
                    className="rounded-full border px-4 py-2 border-[#98c3f7] bg-[#f3f8ff] text-[#307fe2] hover:bg-[#307fe2] hover:text-white duration-300 mt-3 font-bold"
                  >
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
                    <button
                      onClick={handleClickOpen}
                      className="rounded-full border px-4 py-2 border-[#98c3f7] bg-[#f3f8ff] text-[#307fe2] hover:bg-[#307fe2] hover:text-white duration-300 mt-3 font-bold"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
            </div>
            <button
              className="rounded-full border px-5 py-3 border-[#a790d5] hover:bg-[#A790D5] bg-[#307fe2] text-white  duration-300  block mx-auto mt-10 font-semibold"
              onClick={toggleShowAllJobs}
            >
              {showAllJobs ? "Hide" : "View all openings"}
            </button>
          </div>

          {/*  */}

          <div className="mt-16">
            <h2 className="text-center text-4xl font-bold">
              Learn Our Recruitment{" "}
              <span className="text-[#A790D5]">Process</span>{" "}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-16 gap-5">
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <IoDocumentTextOutline className="text-5xl font-bold text-[#A790D5] mb-3" />
                <h4 className="font-bold text-xl">CV Submission</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Submit your CV through our online portal or via email. Ensure
                  your CV highlights your qualifications.
                </p>
              </div>
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <FiPhoneCall className="text-5xl font-bold text-[#A790D5] mb-3" />
                <h4 className="font-bold text-xl mb-1">Phone Screening</h4>
                <p className="text-gray-700 text-justify mt-2">
                  After reviewing your CV, selected candidates will undergo a
                  brief phone screening.
                </p>
              </div>
              <div className="bg-white py-5 px-8 rounded-xl shadow-2xl">
                <GrCloudComputer className="text-5xl font-bold text-[#A790D5] mb-3" />
                <h4 className="font-bold text-xl mb-1">Skill Assessment</h4>
                <p className="text-gray-700 text-justify mt-2">
                  Qualified candidates will be invited to complete an assessment
                  tailored to the role.
                </p>
              </div>
              <div className="bg-white py-5 px-8  rounded-xl shadow-2xl">
                <RiTeamLine className="text-5xl font-bold text-[#A790D5] mb-3" />
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
      <Dialog open={open} onClose={handleClose} className="z-0">
        <DialogContent className="py-10 px-16 bg-[#00263a] text-white">
          <h3 className="font-bold mb-2 text-lg uppercase">Job Context</h3>
          <ul className="list-disc mb-5">
            <li>
              We are looking for an experienced and passionate Expert Social
              Media Manager who has practical experience in social media
              marketing, and the digital marketing sector as well expert in
              video editing, and graphic designing.
            </li>
            <li>
              The candidate must be willing to stay long-term, be willing to
              grow with the company, and increase his or her expertise in the
              field through learning about Digital Marketing & Social Media
              Marketing
            </li>
          </ul>
          <h3 className="font-bold mb-2 text-lg uppercase">
            Job Responsibilities
          </h3>
          <ul className="list-disc mb-5">
            <li>
              Have in-depth knowledge of infographics and how to publish them.
            </li>
            <li>Must have knowledge in using Meta Business Suite.</li>
            <li>Able to do Digital marketing for ASL BPO and its clients.</li>
            <li>
              Able to create attractive content for Facebook, Instagram, and
              Twitter Post for Products and Blogs.
            </li>
            <li>
              Increasing brand recognition to generate audience attention.
            </li>
            <li>You must help drive the companys online/digital sales.</li>
            <li>
              Preparing promotional presentations and organizing promotional
              even
            </li>
          </ul>
          <h3 className="font-bold mb-2 text-lg uppercase">
            Educational Requirements
          </h3>
          <ul className="list-disc mb-5">
            <li>Bachelor degree in any discipline</li>
            <li>
              Skills Required: Digital Marketing, Social Media Management,
              Social Media Marketing
            </li>
          </ul>
          <h3 className="font-bold mb-2 text-lg uppercase">Salary</h3>
          <ul className="list-disc mb-5">
            <li>Tk. 25000 - 30000 (Monthly)</li>
            <li> Day Shift 9 AM to 6 PM. 6 days a week job</li>
          </ul>
          <h5 className="font-bold">Apply here</h5>
          <a
            href="https://docs.google.com/forms"
            target="blank"
            className="text-blue-400"
          >
            https://docs.google.com/forms
          </a>
        </DialogContent>
        <DialogActions className="bg-[#00263a] border-t">
          <Button onClick={handleClose} className="text-white">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CareerPage;
