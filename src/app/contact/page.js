import React from "react";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoIosArrowForward } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div>
        <div className="h-[400px] bg-blue-300">
          <h2 className="pt-44 px-40 text-4xl font-bold">Contact us</h2>
        </div>

        <Container className="flex md:flex-row flex-col-reverse justify-between  gap-5 mt-20">
          <div className="w-full md:w-1/2">
            <div>
              <h4 className="text-xl">5th floor, House 14/C, Road 95,</h4>

              <h4 className="text-xl my-2">
                Gulshan 2 Dhaka,
                <br /> Bangladesh 1216
              </h4>
              <h4 className="text-xl">
                Phone: <span className="font-semibold">+8801844-5827</span>
                <br /> Telephone:
                <span className="font-semibold">+88-02-8881834</span>
              </h4>
            </div>
            <div className="mt-10 rounded-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.732897647114!2d90.4161236!3d23.792524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c791057bb9a9%3A0xdba2ac182b0f77c7!2sPolicy%20Exchange%20of%20Bangladesh!5e0!3m2!1sen!2sbd!4v1712212254543!5m2!1sen!2sbd"
                width="500"
                height="500"
                style={{ border: "0", borderRadius: "20px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Typography
              variant="h5"
              component="h2"
              className="text-center font-bold"
            >
              Submit an enquiry
            </Typography>

            <h6 className="font-bold mt-4 text-[12px]">
              {" "}
              * Indicates mandatory field
            </h6>

            <h4 className="font-semibold my-3 text-[24px]">Contact Us</h4>

            <form>
              <div className="grid grid-cols-2 gap-3 mb-5 w-full">
                <div>
                  <label for="name" className="ml-2 font-light">
                    Name *
                  </label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="rounded-full border-2 border-gray-300 w-full mt-2"
                  />
                </div>
                {/*  */}
                <div>
                  <label for="surname" className="ml-2 font-light">
                    Surname *
                  </label>
                  <br />
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="rounded-full border-2 border-gray-300 w-full mt-2"
                  />
                </div>
              </div>

              {/*  */}
              <label for="company" className="ml-2 font-light">
                Company *
              </label>
              <br />
              <input
                type="text"
                id="company"
                name="company"
                className="rounded-full border-2 border-gray-300 w-full mb-5 mt-2"
              />
              <br />

              {/*  */}

              <div className="grid grid-cols-2 gap-3 mb-5 w-full">
                <div>
                  <label for="email" className="ml-2 mb-3 font-light">
                    Email *
                  </label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="rounded-full border-2 border-gray-300 w-full mt-2"
                  />
                </div>
                {/*  */}
                <div>
                  <label for="telephone" className="ml-2 mb-3 font-light">
                    Telephone *
                  </label>
                  <br />
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    className="rounded-full border-2 border-gray-300 w-full mt-2"
                  />
                </div>
              </div>

              {/*  */}

              <br />

              {/*  */}
              <label for="message" className="ml-2 mb-3 font-light">
                Message *
              </label>
              <br />
              <textarea
                rows={4}
                type="text"
                id="message"
                name="message"
                className="rounded-3xl border-2 border-gray-300 w-full mt-2"
              />
              <br />

              <p className="py-3 ml-2">
                By submitting your enquiry you agree to Policy Exchange sending
                you information about our properties and business related
                support services. See our Terms and Conditions and Privacy
                Notice for more information.
              </p>
              <button className="flex  items-center gap-1 rounded-full font-semibold my-5 px-4 py-2 bg-[#9de7d7] hover:bg-[#00263a] duration-300 hover:text-white">
                Submit <IoIosArrowForward />
              </button>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
