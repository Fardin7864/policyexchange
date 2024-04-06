"use client";

/* eslint-disable @next/next/no-img-element */
import { Container } from "@mui/material";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoDownloadOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useForm } from "@formspree/react";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { PiBookOpenText } from "react-icons/pi";

const PublicationsPage = () => {
  const [open, setOpen] = useState(false);
  const [publicationData, setPublicationData] = useState([]);
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredId, setIsHoveredId] = useState(null);

  //
  useEffect(() => {
    fetch("/publications.json")
      .then((res) => res.json())
      .then((data) => setPublicationData(data));
  }, []);

  //
  const handleClickOpen = (publication) => {
    setSelectedPublication(publication);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewPublication = () => {
    if (selectedPublication && selectedPublication.driveLink) {
      window.open(selectedPublication.driveLink, "_blank");
    }
  };

  const [state, handleSubmit, reset] = useForm("xjvlbeen");
  if (state.succeeded) {
    reset();
    setOpen(false);
  }

  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="">
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
              Publications
            </h3>
            <p className=" text-white  text-xl absolute font-semibold pt-64 opacity-100 z-50">
              All publications by Policy Exchange of Bangladesh
            </p>
          </div>
        </div>

        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-16">
          {publicationData.map((publication, index) => (
            <div
              key={index}
              className="shadow-2xl bg-white rounded-xl publication relative mb-5"
            >
              <div className="overflow-hidden bg-black">
                <img
                  src={publication.image}
                  alt=""
                  className="rounded-t-xl h-64 w-full publication-thumbnail"
                />
              </div>
              <div className="publications-container">
                <div className="py-3 px-5">
                  <p className="mt-2 mb-10 text-sm flex flex-col gap-2 ">
                    <span className="font-bold text-[#956de6]">
                      {publication.title}
                    </span>
                    <span className="">{publication.subtitle}</span>
                  </p>

                  <div
                    className="flex justify-center my-2 border-t -ml-5 pt-2 absolute bottom-0 w-full duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <button
                      onClick={() => handleClickOpen(publication)}
                      className="flex gap-1 text-sm items-center justify-center font-semibold text-black hover:text-[#7d4bdf] w-36 duration-300"
                    >
                      {isHovered ? (
                        <img
                          src="/images/Read.gif"
                          className="h-4 w-4"
                          alt=""
                        />
                      ) : (
                        <PiBookOpenText className="text-lg text-[#7d4bdf]" />
                      )}
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogContent className="flex flex-col items-center p-10 bg-[#00263a]">
            <div className="mb-4">
              <label htmlFor="name" className="ml-2 font-normal text-white">
                Name *
              </label>
              <br />
              <input
                required
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="ml-2 font-normal text-white">
                Email *
              </label>
              <br />
              <input
                required
                type="text"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
            <div>
              <label htmlFor="number" className="ml-2 font-normal text-white">
                Phone Number *
              </label>
              <br />
              <input
                required
                type="text"
                id="number"
                name="number"
                placeholder="Enter Your Phone No."
                className="rounded-xl border-2 border-gray-300 w-full mt-2 placeholder:text-sm"
              />
            </div>
          </DialogContent>
          <DialogActions className="bg-[#00263a] border-t">
            <Button onClick={handleClose} className="text-white">
              Cancel
            </Button>
            <Button
              type="submit"
              className="text-white"
              onClick={handleViewPublication}
            >
              View Publication
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default PublicationsPage;
